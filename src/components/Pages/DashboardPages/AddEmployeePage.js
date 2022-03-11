import Sidebar from "../../dashboard/Sidebar.js";
import Navbar from "../../dashboard/Navbar.js";
import AddEmployee from "../../forms/AddEmployee.js"

export default function AddEmployeePage() {

    return (
        <div>
            <Sidebar isMain={false} />
            <Navbar />
            <AddEmployee />
        </div>
    );
}