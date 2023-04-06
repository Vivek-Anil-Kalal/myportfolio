import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { closeIcon, menuIcon } from "../assets";

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    console.log(selectedPage);
    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-yellow " : "text-white "} hover:text-yellow transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({ isTopOfPage , selectedPage, setSelectedPage }) => {
    // only for mobile screens
    const [isMenuToggled, setIsMenuToggled] = useState(false)
    const isAboveMediumScreens = useMediaQuery("(min-width:768px)")
    const navbarBackground = isTopOfPage ? "" : "bg-red" ;

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold">VV</h4>

                {/* DESKTOP NAV */}
                {isAboveMediumScreens ? (
                    <div className="flex justify-between gap-16 font-opensans font-bold text-sm">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Testimonials"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                    <button
                        className="rounded-full bg-red p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        {/* <img src="../assets/menu-icon.png" alt="menu-icon" /> */}
                        <img alt="menu-icon" src={menuIcon} />
                    </button>
                )}

                {/* MOBILE MENU POPUP */}
                {!isAboveMediumScreens && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full w-[300px] bg-blue">
                        {/* CLOSE ICON */}
                        <div className="flex justify-end p-12 ">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)} className="bg-red rounded-full p-2">
                                <img alt="closeIcon" src={closeIcon} />
                            </button>
                        </div>

                        {/* MENU ITEMS */}
                        <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Skills"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Testimonials"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;