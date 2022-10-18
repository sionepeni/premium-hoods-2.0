import logo from "./img/ph-header.png"
import "../../styles/Header.css"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { BsXLg } from "react-icons/bs"
import { Link } from "react-router-dom"

export default function Header({ pageSelected }) {
    const [mobileView, setMobileView] = useState(false)

    const headerOptions = [
        {
            option: "Home",
            link: "/",
        },
        {
            option: "Services",
            link: "/services",
        },
        {
            option: "Get a Quote",
            link: "/quote",
        },
        // {
        //     option: "About Us",
        //     link: "/aboutus",
        // },
        // {
        //     option: "Contact Us",
        //     link: "/contact"
        // },
        // Top two options commented out for now. Maybe used for future updates.
    ]
    return (
        <>
            <div className="header full-bleed-header">
                <span>
                    <img
                        className="header-logo"
                        src={logo}
                        alt="premium hoods logo"
                    ></img>
                </span>
                <span
                    className="mobile-menu-btn"
                    onClick={() => setMobileView(!mobileView)}
                >
                    {mobileView ? (
                        <BsXLg color="white" size={40} />
                    ) : (
                        <GiHamburgerMenu color="white" size={40} />
                    )}
                </span>
                <div
                    className={
                        mobileView
                            ? "header-btn-container"
                            : "header-btn-container hidden"
                    }
                >
                    {headerOptions.map((i) => (
                        <Link to={i.link} key={i.link}>
                            {" "}
                            <div
                                className={
                                    pageSelected === i.option
                                        ? "header-btns-selected"
                                        : "header-btns"
                                }
                                key={i.option}
                            >
                                {i.option}
                            </div>{" "}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}
