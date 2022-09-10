import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AlertAction from '../../Components/Alert/AlertAction';
import Loading from '../../Components/Loading/Loading';
import ProductCard from '../../Container/Card/ProductCard';
import { useDarkMode } from '../../Context/DarkMode';
import { getProducts } from '../../Redux/productSlice';
import { HomePage } from '../Home/Home.style';
import { CardContainer } from './ProductionCard.style';


const ProductionCard = () => {
    const darkMode = useDarkMode()
    const dispatch = useDispatch()
    const { loading, products, error } = useSelector(state => state.product)
    const [openAlert, setOpenAlert] = useState(false);
    useEffect(() => {
        dispatch(getProducts())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <HomePage darkMode={darkMode.darkMode}>
            {
                error && !loading ? <AlertAction open={openAlert} setOpen={setOpenAlert} iserror={true}>
                    {error}
                </AlertAction>
                    : !loading ?
                        <AlertAction open={openAlert} setOpen={setOpenAlert} iserror={false}>
                            Delete User done successful !
                        </AlertAction> : null
            }
            {
                error ? <Box>{error}</Box>
                    : loading ? <Box sx={{ p: '100px 0' }}><Loading /></Box> : <CardContainer>
                        {
                            products.map(product => <ProductCard key={product.id} product={product} setOpenAlert={setOpenAlert} />)
                        }
                    </CardContainer>

            }
        </HomePage>
    );
}

export default ProductionCard