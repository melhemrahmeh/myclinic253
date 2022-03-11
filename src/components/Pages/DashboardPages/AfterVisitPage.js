import Sidebar from "../../dashboard/Sidebar.js";
import Navbar from "../../dashboard/Navbar.js";
import Schedule from "../../schedule/Schedule.js"
import React from 'react';

export default function AfterVisitPage() {
    return (
        <div>
            <Sidebar isMain={false} />
            <Navbar />
            <Schedule />
        </div>
    );
}