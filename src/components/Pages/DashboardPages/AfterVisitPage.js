import Sidebar from "../../dashboard/Sidebar.js";
import Navbar from "../../dashboard/Navbar.js";
import AfterVisit from "../../forms/AfterVisit.js"
import React from 'react';

export default function AfterVisitPage() {
    return (
        <div>
            <Sidebar isMain={false} />
            <Navbar />
            <AfterVisit />
        </div>
    );
}