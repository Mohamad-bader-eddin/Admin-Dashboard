import { Box, TextField } from '@mui/material'
import { useDarkMode } from '../../Context/DarkMode'


const Input = (props) => {
    const { label, name, formik, ...rest } = props
    const darkMode = useDarkMode()
    return (
        <Box sx={{ mb: '20px' }}>
            <TextField id={name} name={name} label={label} variant={darkMode.darkMode ? 'outlined' : 'standard'}
                onChange={formik.handleChange}
                value={formik.values[name]}
                onBlur={formik.handleBlur}
                {...rest}
                error={Boolean(formik.touched[name] && formik.errors[name])}
                helperText={formik.touched[name] && formik.errors[name] ? formik.errors[name] : ''}
                color='info'
                sx={darkMode.darkMode ? {
                    '& label': {
                        color: 'white',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#fff',
                        },
                        '&:hover fieldset:not(.css-hgkgee-MuiInputBase-root-MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline)': {
                            borderColor: '#2196f3',
                        },
                    },
                    '& .MuiInputBase-input': {
                        color: '#fff'
                    },
                } : null} />
        </Box>
    )
}

export default Input