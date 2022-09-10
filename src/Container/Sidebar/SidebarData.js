import HomeIcon from "@mui/icons-material/Home";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import TableViewIcon from "@mui/icons-material/TableView";
import BarChartIcon from "@mui/icons-material/BarChart";

export const SidebarData = [{
        id: 1,
        title: "Home",
        icon: < HomeIcon / > ,
        path: "/",
    },
    {
        id: 2,
        title: "Add_User",
        icon: < PersonAddIcon / > ,
        path: "/add-user",
    },
    {
        id: 3,
        title: "User_Table",
        icon: < RecentActorsIcon / > ,
        path: "/user-table",
    },
    {
        id: 4,
        title: "Add_Product",
        icon: < AddBusinessIcon / > ,
        path: "/add-product",
    },
    {
        id: 5,
        title: "Products_Table",
        icon: < TableViewIcon / > ,
        path: "/product-table",
    },
    {
        id: 6,
        title: "Charts",
        icon: < BarChartIcon / > ,
        path: "/charts",
    },
];