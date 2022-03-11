import Sidebar from "../../dashboard/Sidebar.js";
import Navbar from "../../dashboard/Navbar.js";
import AddPatient from "../../forms/AddPatient.js"

export default function AddPatientPage() {

    return (
        <div>
            <Sidebar isMain={false} />
            <Navbar />
            <AddPatient />
        </div>
    );
}