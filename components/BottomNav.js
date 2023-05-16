import Link from "next/link";

const BottomNav = () => {
    const bottomNavContent = [
        { icon: "", text: "Home" },
        { icon: "", text: "Search" },
        { icon: "", text: "Booking" },
        { icon: "", text: "Notifications" },
        { icon: "", text: "Profile" }
    ]
    return (
        <nav className="fixed bottom-0 w-full border border-red-500">
            <ul className="flex justify-evenly brder">
                {
                    bottomNavContent.map(({ icon, text }) =>
                        <li key={text}>
                            <Link href={text.toLowerCase()}>
                                {text}
                                <span>{icon}</span>
                            </Link>
                        </li>
                    )
                }
                <li></li>
            </ul>
        </nav>
    );
}

export default BottomNav;