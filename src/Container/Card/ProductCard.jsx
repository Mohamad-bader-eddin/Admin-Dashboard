import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Chip } from '@mui/material';
import noImage from '../../Assets/noImage.jpg'
import ProductActionDropdown from '../../Components/ProductActionDropdown/ProductActionDropdown';
import { useDarkMode } from '../../Context/DarkMode';
import { Theme } from '../../Style/Theme';
import { Stack } from '@mui/system';
import DraggableDialog from '../../Components/Dialog/DraggableDialog';
import { useTranslation } from 'react-i18next';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const ProductCard = ({ product, setOpenAlert }) => {
    const darkMode = useDarkMode()
    const [expanded, setExpanded] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const { t } = useTranslation()

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Box>
            <DraggableDialog open={openDialog} setOpen={setOpenDialog} setOpenAlert={setOpenAlert} productId={product.id} />
            <Card sx={{
                maxWidth: 345, color: darkMode.darkMode ? Theme.dark.text : Theme.light.text
                , background: darkMode.darkMode ? Theme.dark.card : Theme.light.card
            }}>
                <CardHeader
                    sx={{ color: darkMode.darkMode ? Theme.dark.text : Theme.light.text }}
                    action={
                        <ProductActionDropdown id={product.id} setOpenDialog={setOpenDialog} />
                    }
                    title={product.name}
                />
                <CardMedia
                    component="img"
                    height="200"
                    image={product.file ? product.file : noImage}
                    alt="Paella dish"
                />
                <CardContent sx={{ color: darkMode.darkMode ? Theme.dark.text : Theme.light.text }}>
                    <Typography variant="body2">
                        {product.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon sx={{ color: darkMode.darkMode ? Theme.dark.text : Theme.light.text }} />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent sx={{ color: darkMode.darkMode ? Theme.dark.text : Theme.light.text }}>
                        <Stack spacing={2}>
                            <Stack direction='row' alignItems='center' justifyContent='space-between'>
                                <Chip color='info' label={t('Tracking_ID')} variant="outlined" />
                                <Typography>
                                    {product.idProduct}
                                </Typography>
                            </Stack>
                            <Stack direction='row' alignItems='center' justifyContent='space-between'>
                                <Chip color='info' label={t('Type')} variant="outlined" />
                                <Typography>
                                    {product.type}
                                </Typography>
                            </Stack>
                            <Stack direction='row' alignItems='center' justifyContent='space-between'>
                                <Chip color='info' label={t("Price")} variant="outlined" />
                                <Typography>
                                    {product.price}
                                </Typography>
                            </Stack>
                            <Stack direction='row' alignItems='center' justifyContent='space-between'>
                                <Chip color='info' label={t("Production_Date")} variant="outlined" />
                                <Typography>
                                    {product.productionDate}
                                </Typography>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Collapse>
            </Card>
        </Box>
    );
}

export default ProductCard