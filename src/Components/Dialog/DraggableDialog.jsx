import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { useDispatch } from 'react-redux';
import { useDarkMode } from '../../Context/DarkMode';
import { deleteProduct } from '../../Redux/productSlice';
import { deleteUser } from '../../Redux/userSlice';

function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

export default function DraggableDialog({ open, setOpen, userId, setOpenAlert, productId }) {
    const dispatch = useDispatch()
    const darkMode = useDarkMode()
    const handleClose = () => {
        setOpen(false);
    };
    const handleDelete = () => {
        userId ? dispatch(deleteUser(userId)) : dispatch(deleteProduct(productId))
        setOpen(false)
        setOpenAlert(true)
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
                sx={{
                    '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper':
                        { backgroundColor: darkMode.darkMode ? '#393939' : '#fff' }
                }}
            >
                <DialogTitle style={{ color: '#d32f2f' }} id="draggable-dialog-title">
                    Warning
                </DialogTitle>
                <DialogContent>
                    <DialogContentText style={{ color: darkMode.darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }}>
                        Are you sure want to delete this item..?!!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button color='error' onClick={handleDelete}>Delete</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}