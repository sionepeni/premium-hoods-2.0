import "../../styles/ServiceContent.css"
// import canopya from "./imgs/canopy-a.jpeg"
// import canopyb from "./imgs/canopy-b.jpeg"
import fluea from "./imgs/flue-a.jpeg"
import flueb from "./imgs/flue-b.jpeg"
import hooda from "./imgs/hood-a.jpeg"
import hoodb from "./imgs/hood-b.jpeg"
import filtera from "./imgs/filter-a.jpeg"
import filterb from "./imgs/filter-b.jpeg"
import logo from "../header/img/ph-logo.png"
import { useState } from "react"

function Card({ item: { option, text, pictures } }) {
    const [currentImage, setCurrentImage] = useState(1)

    return (
        <>
            <div className="card">
                <h1 className="card-heading">{option}</h1>
                <div className="card-divider"></div>
                <p className="card-text">{text}</p>

                <div className="card-picture">
                    <img
                        className="card-img1"
                        src={!pictures ? logo : pictures[`${currentImage}`]}
                        alt="premium hoods"
                    />
                </div>

                <div className="card-bottom">
                    <h2
                        className={
                            !pictures
                                ? "hidden"
                                : currentImage === 1
                                ? "card-selected"
                                : "card-not-selected"
                        }
                        onClick={() => setCurrentImage(2)}
                    >
                        Before &nbsp;
                    </h2>
                    <h2
                        className={
                            !pictures
                                ? "hidden"
                                : currentImage === 2
                                ? "card-selected"
                                : "card-not-selected"
                        }
                        onClick={() => setCurrentImage(1)}
                    >
                        After
                    </h2>
                </div>
            </div>
        </>
    )
}

function ServiceContent() {
    const serviceContentData = [
        {
            option: "Kitchen Extraction Cleaning",
            text: "It is imperative that the hood above cooking appliances (stoves, ovens, fryers, grilles etc.) be kept in pristine condition on both hygiene and fire safety grounds. This area includes the oil drains and light fittings. And let's face it, a dirty hood covered in grease, oil, fat, soot, dust etc. is a slur on the good reputation of the chef and the restaurant.",
            pictures: {
                1: hoodb,
                2: hooda,
            },
        },
        {
            option: "Filter Cleaning",
            text: "Dirty, blocked, worn-out and poorly designed filters will reduce airflow leading to a hot kitchen as well as fat particles being deposited on ceilings, walls and cooking surfaces. We recommend “Genuine Filters” because of their efficiency and ease of cleaning.",
            pictures: {
                1: filterb,
                2: filtera,
            },
        },
        {
            option: "Flue Cleaning",
            text: "A buildup of oil, fat, grease, soot, dust and debris is a health and fire risk as it reduces air flow. These materials may then drop back down through the hood and filters onto the appliances and food below. Clean ducting ensures maximum efficiency from your extractor system.",
            pictures: {
                1: flueb,
                2: fluea,
            },
        },
        {
            option: "High Ceiling/ Wall Cleaning",
            text: "We clean and sanitize high walls, ceilings and light fittings. Like all our services, we cater to your business needs and will provide you with a scope that suits.",
        },
    ]

    return (
        <>
            <div className="service-content">
                <h1 className="service-content-h1">Services</h1>
                <div className="service-content-body">
                    {serviceContentData.map((item) => (
                        <Card item={item} key={item.option}></Card>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ServiceContent
