import "./App.css"
import HomePage from "./pages/HomePage"
import ServicesPage from "./pages/ServicesPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

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
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default App
