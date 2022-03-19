import SideBar from "../../dashboard/Bar/Sidebar.js";// import Navbar from "../../dashboard/Navbar.js";
import Operations from "../../dashboard/Statistics/Operations.js"

import React from 'react'

export default function MyAppointments() {
    return (
        <div>
            <SideBar/>
            <Operations/>
        </div>
    );
}