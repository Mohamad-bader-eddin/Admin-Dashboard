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
    products: [],
    error: "",
};

export const addProduct = createAsyncThunk(
    "product/addProduct",
    async(product, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        let newProduct;
        try {
            if (product.file) {
                const name = new Date().getTime() + product.file.name;
                const storageRef = ref(storage, name);
                await uploadBytes(storageRef, product.file);
                const imageUrl = await getDownloadURL(storageRef);
                newProduct = {
                    ...product,
                    file: imageUrl,
                    productionDate: format(
                        product.productionDate.getTime(),
                        "MM/dd/yyyy"
                    ),
                    createAt: serverTimestamp(),
                };
            } else {
                newProduct = {
                    ...product,
                    productionDate: format(
                        product.productionDate.getTime(),
                        "MM/dd/yyyy"
                    ),
                    createAt: serverTimestamp(),
                };
            }

            await addDoc(collection(db, "product"), newProduct);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getProducts = createAsyncThunk(
    "product/getProducts",
    async(_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const productcol = collection(db, "product");
            const userSnapshot = await getDocs(productcol);
            const productList = userSnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            return productList;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const updateProduct = createAsyncThunk(
    "product/updateProduct",
    async(product, thunkAPI) => {
        const { rejectWithValue, getState } = thunkAPI;
        const productState = getState().product.products.find(
            (pr) => pr.id === product.id
        );
        try {
            if (productState.file === product.file) {
                await updateDoc(doc(db, "product", product.id), {...product });
            } else {
                const name = new Date().getTime() + product.file.name;
                const storageRef = ref(storage, name);
                await uploadBytes(storageRef, product.file);
                const imageUrl = await getDownloadURL(storageRef);
                await updateDoc(doc(db, "product", product.id), {
                    ...product,
                    file: imageUrl,
                });
                if (productState.file) {
                    await deleteObject(ref(storage, productState.file));
                }
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteProduct = createAsyncThunk(
    "product/deleteProduct",
    async(id, thunkAPI) => {
        const { rejectWithValue, getState } = thunkAPI;
        const product = getState().product.products.find((pr) => pr.id === id);
        try {
            if (product.file) {
                await deleteObject(ref(storage, product.file));
            }
            await deleteDoc(doc(db, "product", id));
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(addProduct.pending, (state) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(addProduct.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(addProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(updateProduct.pending, (state) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(updateProduct.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(updateProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(deleteProduct.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.products = state.products.filter(
                (product) => product.id !== action.payload
            );
        });
        builder.addCase(deleteProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default productSlice.reducer;