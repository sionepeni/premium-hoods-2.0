import "../../styles/Quote.css"
import { useState, useRef } from "react"
import { send } from "emailjs-com"
import { BsChevronDown, BsChevronUp } from "react-icons/bs"
import { BsXLg } from "react-icons/bs"
import ReCAPTCHA from "react-google-recaptcha"

export default function Quote() {
    const captchaRef = useRef(null)
    const [validation, setValidation] = useState(true)
    const [showServices, setShowServices] = useState(false)
    const [quoteSuccess, setQuoteSuccess] = useState(false)
    const [selectedServices, setSelectedServices] = useState("Service")
    const [toSend, setToSend] = useState({
        first_name: "",
        last_name: "",
        company: "",
        phone: "",
        email: "",
        comment: "",
        service: "",
    })

    const onSubmit = async (e) => {
        console.log(`first`)
        e.preventDefault()

        send("service_hyqo7yi", "template_70pdcqs", toSend, "htePApkmF0hMkDqvD")
        setQuoteSuccess(true).catch((err) => {
            throw err
        })
    }

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value })
    }

    const serviceChange = (e) => {
        setToSend({ ...toSend, [e.target.id]: e.target.outerText })
    }

    function onChange(value) {
        if (!value) return
        return setValidation(false)
    }

    return (
        <>
            <div className="quote full-bleed-quote">
                {quoteSuccess ? (
                    <div className="success-modal">
                        <span className="success-modal-x">
                            <BsXLg
                                onClick={() => setQuoteSuccess(false)}
                                color="red"
                                size={30}
                            />
                        </span>
                        <h2 className="success-modal-text">
                            Thank you for your interest in our services. Our
                            team will be in contact with you shortly.
                        </h2>
                    </div>
                ) : (
                    ""
                )}
                <h1 className="quote-h1">GET A FREE QUOTE</h1>
                <form onSubmit={onSubmit} className="quote-form">
                    <input
                        className="first general-form"
                        placeholder="First Name"
                        type="text"
                        name="first_name"
                        value={toSend.first_name}
                        onChange={handleChange}
                    ></input>
                    <input
                        className="last general-form"
                        placeholder="Last Name"
                        type="text"
                        name="last_name"
                        value={toSend.last_name}
                        onChange={handleChange}
                    ></input>
                    <input
                        className="company general-form"
                        placeholder="Company"
                        type="text"
                        name="company"
                        value={toSend.company}
                        onChange={handleChange}
                    ></input>
                    <input
                        className="phone general-form"
                        placeholder="Phone"
                        type="phone"
                        name="phone"
                        value={toSend.phone}
                        onChange={handleChange}
                    ></input>
                    <input
                        className="email general-form"
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={toSend.email}
                        onChange={handleChange}
                    ></input>
                    <div
                        className="service general-form"
                        onClick={() => setShowServices(!showServices)}
                    >
                        {selectedServices}{" "}
                        {showServices ? <BsChevronUp /> : <BsChevronDown />}
                        <ul
                            className={showServices ? "service-list" : "hidden"}
                            onClick={(e) =>
                                setSelectedServices(e.target.outerText)
                            }
                        >
                            <li
                                id="service"
                                className="quote-li"
                                onClick={serviceChange}
                            >
                                Kitchen Extraction Cleaning
                            </li>
                            <li
                                id="service"
                                className="quote-li"
                                onClick={serviceChange}
                            >
                                Filter Cleaning
                            </li>
                            <li
                                id="service"
                                className="quote-li"
                                onClick={serviceChange}
                            >
                                Flue Cleaning
                            </li>
                            <li
                                id="service"
                                className="quote-li"
                                onClick={serviceChange}
                            >
                                High Ceiling/ Wall Cleaning
                            </li>
                            <li
                                id="service"
                                className="quote-li"
                                onClick={serviceChange}
                            >
                                Other
                            </li>
                        </ul>
                    </div>
                    <textarea
                        className="comment general-form"
                        placeholder="Comments"
                        type="textarea"
                        name="comment"
                        value={toSend.comment}
                        onChange={handleChange}
                    ></textarea>
                    <ReCAPTCHA
                        sitekey={process.env.REACT_APP_SITE_KEY}
                        ref={captchaRef}
                        onChange={onChange}
                    />
                    <button
                        disabled={validation}
                        type="submit"
                        className={validation ? "none" : "quote-submit"}
                    >
                        Submit your Quote
                    </button>
                </form>
            </div>
        </>
    )
}
