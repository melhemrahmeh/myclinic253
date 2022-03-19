import Sidebar from "../../dashboard/Bar/Sidebar.js";// import Navbar from "../../dashboard/Navbar.js";
import ScrollButton from "../../Scrollbutton/ScrollButton.js"
import  PatientTable from "../../tables/PatientTable.js"

import React from 'react';

export default function MyAppointments() {
    return (
        <div>
            <Sidebar />
            <PatientTable/>
            <ScrollButton />
        </div>
    );
}