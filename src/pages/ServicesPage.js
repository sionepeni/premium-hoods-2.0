import React from "react"
import BackToTop from "../components/back-to-top/BackToTop"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import ServiceContent from "../components/services/ServiceContent"

export default function ServicesPage() {
    return (
        <>
            <Header pageSelected={"Services"} />
            <BackToTop />
            <ServiceContent />
            <Footer />
        </>
    )
}
