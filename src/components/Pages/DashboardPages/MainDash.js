import SideBar from "../../dashboard/Bar/Sidebar.js";// import Navbar from "../../dashboard/Navbar.js";
import Main from "../../dashboard/Main.js";
import ScrollButton from "../../Scrollbutton/ScrollButton.js"
import LatestOp from "../../tables/LatestOp.js"
import React from 'react';

export default function AfterVisitPage() {
    return (
        <div>
            <SideBar />
            <Main />
            <LatestOp/>
            <ScrollButton />
        </div>
    );
}