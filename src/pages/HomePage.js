import React from "react"
import BackToTop from "../components/back-to-top/BackToTop"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import AboutServices from "../components/home/AboutServices"
import Hero from "../components/home/Hero"
import Quote from "../components/home/Quote"

export default function HomePage() {
    return (
        <>
            <Header pageSelected={"Home"} />
            <Hero />
            <BackToTop />
            <AboutServices />
            <Quote />
            <Footer />
        </>
    )
}
