import "./App.css"
import Header from "./components/header/Header"
import AboutServices from "./components/home/AboutServices"
import Hero from "./components/home/Hero"
import Quote from "./components/home/Quote"

function App() {
    return (
        <>
            <div className="App">
                <Header />
                <Hero />
                <AboutServices />
                <Quote />
            </div>
        </>
    )
}

export default App
