import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

export const WidgetData = [{
        id: 1,
        title: "Users",
        amount: "720",
        link: "See_All_User",
        precentage: "+5%",
        posotive: true,
        icon: ( <
            PersonOutlinedIcon className = "icon"
            style = {
                { color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" } }
            />
        ),
    },
    {
        id: 2,
        title: "Orders",
        amount: "260",
        link: "View_all_orders",
        precentage: "-2%",
        posotive: false,
        icon: ( <
            ShoppingCartOutlinedIcon className = "icon"
            style = {
                { color: "goldenrod", backgroundColor: "rgba(218,165,32,0.2)" } }
            />
        ),
    },
    {
        id: 3,
        title: "Earning",
        amount: "$4.6k",
        link: "View_net_earnings",
        precentage: "+12%",
        posotive: true,
        icon: ( <
            MonetizationOnOutlinedIcon className = "icon"
            style = {
                { color: "green", backgroundColor: "rgba(0,128,0,0.2)" } }
            />
        ),
    },
    {
        id: 4,
        title: "My_Balance",
        amount: "$7.8k",
        link: "See_details",
        precentage: "+5%",
        posotive: true,
        icon: ( <
            AccountBalanceWalletOutlinedIcon className = "icon"
            style = {
                { color: "purple", backgroundColor: "rgba(128,0,128,0.2)" } }
            />
        ),
    },
];