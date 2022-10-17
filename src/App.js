import "./App.css"
import Header from "./components/header/Header"
import AboutServices from "./components/home/AboutServices"
import Hero from "./components/home/Hero"

function App() {
    return (
        <>
            <div className="App">
                <Header />
                <Hero />
                <AboutServices />
            </div>
        </>
    )
}

export default App
