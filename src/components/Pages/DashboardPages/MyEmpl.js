import SideBar from "../../dashboard/Bar/Sidebar.js";// import Navbar from "../../dashboard/Navbar.js";
import ScrollButton from "../../Scrollbutton/ScrollButton.js"
import  MaterialTable from "../../tables/Material_Table.js"

import React from 'react';

export default function MyAppointments() {
    return (
        <div>
            {/* <NavBar/> */}
            <SideBar />
            <MaterialTable/>
            <ScrollButton />
        </div>
    );
}