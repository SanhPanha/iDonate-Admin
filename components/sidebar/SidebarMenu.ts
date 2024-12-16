import { icons } from "lucide-react";

export const SidebarMenuList = [
    {
        path: "/iDonate-admin/dashboard",
        icon: icons.LayoutDashboard ,
        title: "Dashboard",
        active: false,
    },
    {
        path: "/iDonate-admin/transactions",
        icon: icons.History,
        title: "Transactions",  
        active: false,
    },
    {
        path: "/iDonate-admin/events",
        icon: icons.CalendarRange,
        title: "Events",
        active: false,
    },
    {
        path: "/iDonate-admin/organization",
        icon: icons.Building2,
        title: "Organization",
        active: false,
    },
    {
        path: "/iDonate-admin/donor",
        icon: icons.Users,
        title: "Doner",
        active: false,
    },
    {
        path: "/iDonate-admin/testimonial",
        icon: icons.UserRoundPen,
        title: "Testimonial",
        active: false,
    },
    {
        path: "/iDonate-admin/category",
        icon: icons.LayoutList,
        title: "Category",
        active: false,
    },
]