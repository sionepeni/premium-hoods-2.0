import logo from "./img/ph-header.png"
import "../../styles/Header.css"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { BsXLg } from "react-icons/bs"
// import { Link } from "react-router-dom"

export default function Header() {
    const headerOptions = [
        {
            option: "Home",
            link: "/",
        },
        {
            option: "Services",
            link: "/services",
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
                <div className="header-btn-container">
                    {headerOptions.map((i) => (
                        // <Link to={i.link} key={i.link}>
                        // {" "}
                        <div className="header-btns" key={i.option}>
                            {i.option}
                        </div>
                        // {/* </Link> */}
                    ))}
                </div>
            </div>
        </>
    )
}
