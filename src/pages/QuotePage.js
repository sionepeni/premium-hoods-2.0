import React from "react"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Quote from "../components/home/Quote"

export default function QuotePage() {
    return (
        <>
            <Header pageSelected={"Get a Quote"} />
            <Quote />
            <Footer />
        </>
    )
}
