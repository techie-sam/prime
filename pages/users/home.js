import { useState } from "react";

const Home = ({ sidebarItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    return (
        <>
            <button onClick={toggleSidebar} className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg  sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open ttj</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <nav  className={`fixed top-0 left-0 z-40 w-64 h-screen md:block ${isOpen ? "block": "hidden"} shadow-gray-500 shadow-xl`}aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800">
                <button onClick={toggleSidebar} className="sm:hidden">Close</button>
                    <ul className="space-y-2 font-medium">
                        {
                            sidebarItems.map(({ text, icon }) =>
                                <li key={text}>
                                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

                                        <span className="ml-3">{text}</span>
                                    </a>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </nav>

        </>
    );
}

export function getStaticProps() {
    const sidebarItems = [
        { text: "All Artist", icon: "" },
        { text: "Music Artists", icon: "" },
        { text: "Bands", icon: "" },
        { text: "sd", icon: "" },
    ]
    return {
        props: {
            sidebarItems
        }
    }
}

export default Home;