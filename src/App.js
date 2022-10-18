import "./App.css"
import HomePage from "./pages/HomePage"
import ServicesPage from "./pages/ServicesPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import QuotePage from "./pages/QuotePage"

function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<HomePage />}>
                            {" "}
                        </Route>
                        <Route
                            path="/services"
                            element={<ServicesPage />}
                        ></Route>
                        <Route path="/quote" element={<QuotePage />}></Route>
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default App
