import SideBar from "../../dashboard/Bar/Sidebar.js";// import Navbar from "../../dashboard/Navbar.js";
import AfterVisit from "../../forms/AfterVisit.js"
import ScrollButton from "../../Scrollbutton/ScrollButton.js"
import React from 'react';

export default function AfterVisitPage() {
    return (
        <div>
            <SideBar />
            <AfterVisit />
            <ScrollButton />
        </div>
    );
}