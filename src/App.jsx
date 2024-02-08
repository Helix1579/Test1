import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import SocialLinks from "./Components/SocialLinks";
import AboutPage from "./Components/AboutPage";
import Portfolio from "./Components/Portfolio";
import Experience from "./Components/Experience";
import ContactPage from "./Components/ContactPage";

function App() {
    return (
        <div>
            <NavBar />
            <HomePage />
            <AboutPage />
            <Portfolio />
            <Experience />
            <ContactPage />
            <SocialLinks />
        </div>
    );
}

export default App;
 