import Header from "../../myclinic/Header.js"
import Footer from "../../myclinic/Footer.js"
import NavBar from "../../myclinic/NavBar.js"
import AddPatient from "../../forms/AddPatient.js"

export default function AddPatientPage() {

    return (
        <div>
            <Header />
            <NavBar isMain={false}/>
            <AddPatient />
            <Footer isMain={false} isTeam={false} />
        </div>
    );
}