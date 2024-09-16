import { useState } from "react";

function Navbar() {
    const [activeLink, setActiveLink] = useState("search");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { item: "search", link: "#search" },
        { item: "website", link: "https://www.girmantech.com/" },
        {
            item: "linkedin",
            link: "https://www.linkedin.com/company/girmantech/",
        },
        { item: "contact", link: "mailto:contact@girmantech.com" },
    ];

    const handleLinkClick = (item) => {
        setActiveLink(item);
        setIsMenuOpen(false);
    };

    return (
        <div className="w-full h-[111px] flex lg:justify-between items-center lg:px-40 bg-white shadow-sm shadow-gray-500/50 max-sm:px-4 max-sm:justify-around">
            {/* Logo */}
            <div className="w-[222px] h-[63px] max-sm:w-[100px]">
                <img src="/images/logo.svg" alt="" />
            </div>
            {/* Navigation Links for Large Screens */}
            <nav className="hidden lg:flex space-x-4">
                {navItems.map((navItem) => (
                    <a
                        key={navItem.item}
                        href={navItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-4 py-2 font-semibold  ${
                            activeLink === navItem.item
                                ? "underline text-blue-500"
                                : "text-gray-700"
                        }`}
                        onClick={() => handleLinkClick(navItem.item)}
                    >
                        {navItem.item}
                    </a>
                ))}
            </nav>

            {/* Hamburger Menu Icon for Small Screens */}
            <div className="lg:hidden max-sm:mr-[50px]">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <i className="fa-solid fa-bars w-[50px] text-[20px] cursor-pointer text-black"></i>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed top-0 right-0 bg-white shadow-lg w-[250px] h-full p-4 lg:hidden">
                    <div className="flex justify-end mb-4">
                        <button onClick={() => setIsMenuOpen(false)}>
                            <i className="fa-solid fa-xmark w-[30px] text-[30px] cursor-pointer text-black"></i>
                        </button>
                    </div>
                    <nav className="flex flex-col space-y-4">
                        {navItems.map((navItem) => (
                            <a
                                key={navItem.item}
                                href={navItem.link}
                                className={`px-4 py-2 rounded ${
                                    activeLink === navItem.item
                                        ? "bg-blue-500 text-white"
                                        : "text-gray-700"
                                }`}
                                onClick={() => handleLinkClick(navItem.item)}
                            >
                                {navItem.item}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </div>
    );
}

export default Navbar;
