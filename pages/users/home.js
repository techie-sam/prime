import BottomNav from "@/components/BottomNav";
import SideBar from "@/components/SideBar";
import { useState } from "react";

const Home = ({ sidebarItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <SideBar />
            <BottomNav />
        </>
    );
}

export function getStaticProps() {
    const sidebarItems = [
        { text: "Home", icon: "" },
        { text: "Search", icon: "" },
        { text: "Bookings", icon: "" },
        { text: "Notifications", icon: "" },
        { text: "Profile", icon: "" },
    ]
    return {
        props: {
            sidebarItems
        }
    }
}

export default Home;