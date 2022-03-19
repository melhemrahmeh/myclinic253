import AddEmployee from "../../forms/AddEmployee.js"
import SideBar from "../../dashboard/Bar/Sidebar.js";// import Navbar from "../../dashboard/Navbar.js";
import ScrollButton from "../../Scrollbutton/ScrollButton.js"
import React from 'react'

export default function AddEmployeePage() {

    return (
        <div>
            <SideBar />
            <AddEmployee />
            <ScrollButton />
        </div>
    );
}