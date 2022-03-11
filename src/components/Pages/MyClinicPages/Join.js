import Header from "../../myclinic/Header.js"
import Footer from "../../myclinic/Footer.js"
import NavBar from "../../myclinic/NavBar.js"
import MainPageImage from "../../myclinic/MainPageImage.js"
import About from "../../myclinic/About.js"

export default function Join() {

    return (
        <div>
            <Header />
            <NavBar />
            <MainPageImage />
            <About />
            <Footer isMain={false} isTeam={false} />
        </div>
    );
}