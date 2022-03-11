import Header from "../../myclinic/Header.js"
import Footer from "../../myclinic/Footer.js"
import NavBar from "../../myclinic/NavBar.js"
import AddEmployee from "../../forms/AddEmployee.js"

export default function AddEmployeePage() {

    return (
        <div>
            <Header />
            <NavBar isMain={false} />
            <AddEmployee />
            <Footer isMain={false} isTeam={false} />
        </div>
    );
}