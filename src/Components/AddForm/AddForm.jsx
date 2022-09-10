import React from 'react'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Paper from '../Paper/Paper'
import { useDarkMode } from '../../Context/DarkMode'
import { Theme } from '../../Style/Theme'
import NoImage from '../../Assets/noImage.jpg'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { useMuMediaQuery } from '../../Context/MuMediaQuery'
import { useTranslation } from 'react-i18next'

const AddForm = ({ formik, title, loading, children }) => {
    const darkMode = useDarkMode()
    const media = useMuMediaQuery()
    const { t } = useTranslation()
    return (
        <Box sx={{ p: '57px 0' }}>
            <Box component='form' onSubmit={formik.handleSubmit} sx={{ p: '20px' }}>
                <Box
                    sx={{ m: '20px 0', width: 'fit-content', p: '15px', borderRadius: '12px', boxShadow: darkMode.darkMode ? ` 5px 4px 8px 0px ${Theme.dark.shadow} ` : ` 5px 4px 8px 0px ${Theme.light.shadow} ` }}
                    bgcolor='#2196f3'>
                    <Typography variant='h5' color='white'>{title}</Typography>
                </Box>
                <Paper>
                    <Container sx={{ p: '30px 0' }}>
                        <Stack direction={media.tablet ? 'column' : 'row'} alignItems='center' justifyContent='space-between'>
                            <Box sx={{ flex: '1', textAlign: 'center' }}>
                                <img style={{
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                }}
                                    src={formik.values['file'] ? formik.values['file'].toString().startsWith('http') ? formik.values['file'] : URL.createObjectURL(formik.values['file']) : NoImage}
                                    alt=""
                                />
                                <Box sx={{ m: '24px 0' }}>
                                    <Box component='label' htmlFor="file"
                                        sx={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', cursor: 'pointer' }}>
                                        {t('Image')} <DriveFolderUploadOutlinedIcon />
                                    </Box>
                                    <input
                                        type="file"
                                        name='file'
                                        id="file"
                                        onChange={(event) => formik.setFieldValue("file", event.currentTarget.files[0])}
                                        style={{ display: "none" }}
                                    />
                                </Box>
                            </Box>
                            <Box sx={{ flex: '2' }}>
                                {children}
                            </Box>
                        </Stack>
                        {
                            loading ? <Box sx={{ display: 'table', m: '20px auto', backgroundColor: '#9e9e9e' }}>
                                <LoadingButton
                                    loading
                                    loadingPosition="start"
                                    startIcon={<SaveIcon />}
                                    variant="contained"
                                >
                                    {t('Save')}
                                </LoadingButton>
                            </Box> :
                                <Button variant='contained' type='submit' sx={{ display: 'block', m: '20px auto', p: '10px 30px' }}> {t('Save')}</Button>
                        }
                    </Container>
                </Paper>
            </Box>
        </Box>
    )
}

export default AddForm