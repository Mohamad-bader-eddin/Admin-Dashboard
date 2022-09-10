import React, { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import AddForm from '../../Components/AddForm/AddForm'
import { Box, Stack } from '@mui/material'
import Input from '../../Components/Input/Input'
import MuiPicker from '../../Components/Input/MuiPicker'
import { useDispatch, useSelector } from 'react-redux'
import { useMuMediaQuery } from '../../Context/MuMediaQuery'
import AlertAction from '../../Components/Alert/AlertAction'
import { addProduct, updateProduct } from '../../Redux/productSlice'
import { useTranslation } from 'react-i18next'


const AddProductForm = ({ id }) => {
    const dispatch = useDispatch()
    const { loading, error, products } = useSelector(state => state.product)
    const media = useMuMediaQuery()
    const { t } = useTranslation()
    const [open, setOpen] = useState(false);
    const product = products?.find(pr => pr.id === id)
    const initialValues = {
        name: '',
        idProduct: '',
        type: '',
        price: '',
        description: '',
        productionDate: null,
        file: null
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        idProduct: Yup.string().required('Required'),
        type: Yup.string().required('Required'),
        price: Yup.number().required('Required'),
        description: Yup.string().required('Required'),
        productionDate: Yup.date().required('Required').nullable()
    })

    const onSubmit = (values, submitProps) => {
        dispatch(addProduct(values))
        setOpen(true)
        submitProps.resetForm()
    }

    const updateOnSubmit = (values) => {
        dispatch(updateProduct(values))
        setOpen(true)
    }

    const formik = useFormik(product ? {
        initialValues: { ...product },
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
                            {id ? t('Update_Product_done_successful') : t('Add_Product_done_successful')}
                        </AlertAction> : null
            }
            <AddForm title={id ? t('Update_Product') : t('Add_New_Product')} formik={formik} loading={loading}>
                <Stack direction={media.tablet ? 'column' : 'row'} justifyContent='space-around' alignItems={media.tablet ? 'flex-start' : 'center'}>
                    <Box>
                        <Input type='text' label={t('Name')} name='name' formik={formik} />
                        <Input type='number' label={t('Price')} name='price' formik={formik} />
                        <MuiPicker label={t('Production_Date')} name='productionDate' formik={formik} />
                    </Box>
                    <Box>
                        <Input type='text' label={t('Tracking_ID')} name='idProduct' formik={formik} />
                        <Input type='text' label={t('Type')} name='type' formik={formik} />
                        <Input type='text' label={t('Description')} multiline
                            maxRows={4} name='description' formik={formik} />
                    </Box>
                </Stack>
            </AddForm>
        </Box>
    )
}

export default AddProductForm