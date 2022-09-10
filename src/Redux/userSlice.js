import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    serverTimestamp,
    updateDoc,
} from "firebase/firestore";
import db, { storage } from "../Firebase/config";
import { format } from "date-fns";
import {
    deleteObject,
    getDownloadURL,
    ref,
    uploadBytes,
} from "firebase/storage";

const initialState = {
    loading: false,
    users: [],
    error: "",
};

export const addUser = createAsyncThunk(
    "user/addUser",
    async(user, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        let newUser;
        try {
            if (user.file) {
                const name = new Date().getTime() + user.file.name;
                const storageRef = ref(storage, name);
                await uploadBytes(storageRef, user.file);
                const imageUrl = await getDownloadURL(storageRef);
                newUser = {
                    ...user,
                    file: imageUrl,
                    birthDate: format(user.birthDate.getTime(), "MM/dd/yyyy"),
                    createAt: serverTimestamp(),
                };
            } else {
                newUser = {
                    ...user,
                    birthDate: format(user.birthDate.getTime(), "MM/dd/yyyy"),
                    createAt: serverTimestamp(),
                };
            }

            await addDoc(collection(db, "user"), newUser);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getUsers = createAsyncThunk(
    "user/getUsers",
    async(_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const usercol = collection(db, "user");
            const userSnapshot = await getDocs(usercol);
            const userList = userSnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            return userList;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const updateUser = createAsyncThunk(
    "user/updateUser",
    async(user, thunkAPI) => {
        const { rejectWithValue, getState } = thunkAPI;
        const userState = getState().user.users.find((us) => us.id === user.id);
        try {
            if (userState.file === user.file) {
                await updateDoc(doc(db, "user", user.id), {...user });
            } else {
                const name = new Date().getTime() + user.file.name;
                const storageRef = ref(storage, name);
                await uploadBytes(storageRef, user.file);
                const imageUrl = await getDownloadURL(storageRef);
                await updateDoc(doc(db, "user", user.id), {...user, file: imageUrl });
                if (userState.file) {
                    await deleteObject(ref(storage, userState.file));
                }
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteUser = createAsyncThunk(
    "user/deleteUser",
    async(id, thunkAPI) => {
        const { rejectWithValue, getState } = thunkAPI;
        const user = getState().user.users.find((us) => us.id === id);
        try {
            if (user.file) {
                await deleteObject(ref(storage, user.file));
            }
            await deleteDoc(doc(db, "user", id));
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: {
        [addUser.pending]: (state) => {
            state.loading = true;
            state.error = "";
        },
        [addUser.fulfilled]: (state) => {
            state.loading = false;
        },
        [addUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [getUsers.pending]: (state) => {
            state.loading = true;
            state.error = "";
        },
        [getUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [getUsers.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [updateUser.pending]: (state) => {
            state.loading = true;
            state.error = "";
        },
        [updateUser.fulfilled]: (state) => {
            state.loading = false;
        },
        [updateUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [deleteUser.pending]: (state) => {
            state.loading = true;
            state.error = "";
        },
        [deleteUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = state.users.filter((user) => user.id !== action.payload);
        },
        [deleteUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export default userSlice.reducer;