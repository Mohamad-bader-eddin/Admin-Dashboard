import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Charts from "./Pages/Charts/Charts";
import Home from "./Pages/Home/Home";
import { ThemeProvider } from "styled-components";
import { Theme } from './Style/Theme'
import { MediaQueryProvider } from "./Context/MuMediaQuery";
import { useDarkMode } from "./Context/DarkMode";
import jsCookie from 'js-cookie';
import { languages } from "./Languages/Languages";
import { useTranslation } from "react-i18next";
import { useOpenSidebar } from "./Context/OpenSidebar";
import Navbar from "./Container/Navbar/Navbar";
import Sidebar from "./Container/Sidebar/Sidebar";
import { Box, Stack } from "@mui/material";
import Normalize from 'react-normalize';
import AddUser from "./Pages/AddUser/AddUser";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import AddProduct from "./Pages/AddProduct/AddProduct";
import UserTable from "./Pages/UserTabel/UserTable";
import ShowUser from "./Pages/ShowUser/ShowUser";
import UpdateUser from "./Pages/UpdateUser/UpdateUser";
import UpdateProduct from "./Pages/UpdateProduct/UpdateProduct";
import ProductionCard from "./Pages/ProductionCard/ProductionCard";

function App() {
  const currentLanguageCode = jsCookie.get('i18next') || 'en'
  const currentLanguage = languages.find(l => l.code === currentLanguageCode)
  const openSidebar = useOpenSidebar()
  const darkMode = useDarkMode()
  const { t } = useTranslation()

  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])
  return (
    <ThemeProvider theme={Theme}>
      <MediaQueryProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Normalize />
          <Stack direction='row'>
            <Sidebar />
            <Box sx={{
              width: openSidebar.openSidebar ? '250px' : '50px', backgroundColor: darkMode.darkMode ?
                Theme.dark.primary : Theme.light.primary
            }}></Box>
            <Box sx={{ width: openSidebar.openSidebar ? 'calc(100% - 250px)' : 'calc(100% - 50px)' }}>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-user" element={<AddUser />} />
                <Route path="/update-user/:id" element={<UpdateUser />} />
                <Route path="/user-table" element={<UserTable />} />
                <Route path="/user/:id" element={<ShowUser />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/product-table" element={<ProductionCard />} />
                <Route path="/product/:id" element={<UpdateProduct />} />
                <Route path="/charts" element={<Charts />} />
              </Routes>
            </Box>
          </Stack>
        </LocalizationProvider>
      </MediaQueryProvider>
    </ThemeProvider>
  );
}

export default App;
