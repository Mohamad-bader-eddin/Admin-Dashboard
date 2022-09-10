import React from 'react'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import { Box, TextField } from '@mui/material'
import { useDarkMode } from '../../Context/DarkMode'

const MuiPicker = (props) => {
    const { label, name, formik, ...rest } = props
    const darkMode = useDarkMode()
    return (
        <Box sx={{ mb: '20px', width: '85%' }}>
            <DesktopDatePicker
                id={name} name={name}
                label={label}
                onChange={value => formik.setFieldValue(name, value)}
                value={formik.values[name]}
                {...rest}
                renderInput={(params) =>
                    <TextField {...params}
                        error={Boolean(formik.touched[name] && formik.errors[name])}
                        helperText={formik.touched[name] && formik.errors[name] ? formik.errors[name] : ''}
                        variant={darkMode.darkMode ? 'outlined' : 'standard'}
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
                            '& button': {
                                color: '#fff'
                            },
                            direction: 'ltr'
                        } : { direction: 'ltr' }} />
                }
            />
        </Box>
    )
}

export default MuiPicker