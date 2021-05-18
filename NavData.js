import {RiDashboardFill, RiBarChartLine, RiSettings5Fill, RiCustomerService2Fill} from "react-icons/ri";
import {BsFillPersonFill, BsFillChatSquareDotsFill} from "react-icons/bs";
import {MdGroup, MdExtension} from "react-icons/md"

export const NavData = [
    {
        Icon: <RiDashboardFill/>,
        title: 'Dashboard',
        path: '/dashboard',
    },
    {
        Icon: <BsFillPersonFill/>,
        title: 'Agent',
        path: '/agent',
    },
    {
        Icon: <MdGroup/>,
        title: 'Customers',
        path: 'customers',
    },
    {
        Icon: <RiBarChartLine/>,
        title: 'Analytics',
        path: '/analytics',
    },
    {
        Icon: <RiSettings5Fill/>,
        title: 'Settings',
        path: '/settings',
    },
    {
        Icon: <BsFillChatSquareDotsFill/>,
        title: 'Hippo Chat',
        path: 'https://hippochat.io/#/dashboard?access_token=674a701c344d3e010d68d61b5c01a553',
    },
    {
        Icon: <MdExtension/>,
        title: 'Extention',
        path: 'extension',
    },
    {
        Icon: <RiCustomerService2Fill/>,
        title: 'Support',
        path: 'https://help.jungleworks.com/knowledge-base/',
    },
]