import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Header from "./components/Header";
import Skills from "./components/Skills";

function App() {
    return (
        <div className="bg-[url('./assets/site-bg.jpg')] bg-no-repeat bg-cover overflow-hidden text-slate-200 min-h-screen flex flex-col items-center justify-between">
            <Header />
            <NavBar />
            <main className="flex flex-col items-center justify-center w-[92%]">
                <Home />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
