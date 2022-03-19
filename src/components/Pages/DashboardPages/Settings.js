import Sidebar from "../../dashboard/Bar/Sidebar.js";// import Navbar from "../../dashboard/Navbar.js";
import Settings from "../../dashboard/Profile/profile.js"
import ScrollButton from "../../Scrollbutton/ScrollButton.js"
import React from 'react';

export default function MyAppointments() {
    return (
        <div>
            <Sidebar />
            <Settings />
            <ScrollButton />
        </div>
    );
}