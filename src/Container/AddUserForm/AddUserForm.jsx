import React, { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import AddForm from '../../Components/AddForm/AddForm'
import { Box, Stack } from '@mui/material'
import Input from '../../Components/Input/Input'
import MuiPicker from '../../Components/Input/MuiPicker'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, updateUser } from '../../Redux/userSlice'
import { useMuMediaQuery } from '../../Context/MuMediaQuery'
import AlertAction from '../../Components/Alert/AlertAction'
import { useTranslation } from 'react-i18next'


const AddUserForm = ({ id }) => {
    const dispatch = useDispatch()
    const { loading, error, users } = useSelector(state => state.user)
    const media = useMuMediaQuery()
    const { t } = useTranslation()
    const [open, setOpen] = useState(false);
    const user = users?.find(us => us.id === id)

    const initialValues = {
        name: '',
        email: '',
        password: '',
        address: '',
        phone: '',
        birthDate: '',
        file: null
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email().required('Required'),
        password: Yup.string().required('Required'),
        address: Yup.string().required('Required'),
        phone: Yup.string().required('Required'),
        birthDate: Yup.date().required('Required').nullable()
    })

    const onSubmit = (values, submitProps) => {
        dispatch(addUser(values))
        setOpen(true)
        submitProps.resetForm()
    }

    const updateOnSubmit = (values) => {
        dispatch(updateUser(values))
        setOpen(true)
    }

    const formik = useFormik(user ? {
        initialValues: { ...user },
        onSubmit: updateOnSubmit,
        validationSchema: validationSchema
    }
        : {
            initialValues: initialValues,
            onSubmit: onSubmit,
            validationSchema: validationSchema
        })
    return (
        <Box sx={{ minHeight: '100vh' }}>
            {
                error && !loading ? <AlertAction open={open} setOpen={setOpen} iserror={true}>
                    {error}
                </AlertAction>
                    : !loading ?
                        <AlertAction open={open} setOpen={setOpen} iserror={false}>
                            {id ? t('Update_User_done_successful') : t('Add_User_done_successful')}
                        </AlertAction> : null
            }
            <AddForm title={id ? t('Update_User') : t('Add_New_User')} formik={formik} loading={loading}>
                <Stack direction={media.tablet ? 'column' : 'row'} justifyContent='space-around' alignItems={media.tablet ? 'flex-start' : 'center'}>
                    <Box>
                        <Input type='text' label={t('Name')} name='name' formik={formik} />
                        <Input type='text' label={t('Address')} name='address' formik={formik} />
                        <Input type='text' label={t('Phone')} name='phone' formik={formik} />
                    </Box>
                    <Box>
                        <Input type='email' label={t('Email')} name='email' formik={formik} />
                        <Input type='password' label={t('Password')} name='password' formik={formik} />
                        <MuiPicker label={t('BirthDate')} name='birthDate' formik={formik} />
                    </Box>
                </Stack>
            </AddForm>
        </Box>
    )
}

export default AddUserForm