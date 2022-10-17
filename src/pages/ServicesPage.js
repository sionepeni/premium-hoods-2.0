import React from "react"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import ServiceContent from "../components/services/ServiceContent"

export default function ServicesPage() {
    return (
        <>
            <Header pageSelected={"Services"} />
            <ServiceContent />
            <Footer />
        </>
    )
}
