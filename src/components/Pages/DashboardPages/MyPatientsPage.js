import Sidebar from "../../dashboard/Sidebar.js";
import Navbar from "../../dashboard/Navbar.js";
import PatientsTable from "../../tables/PatientsTable";
import React from 'react';

export default function MyPatientsPage() {
    return (
        <div>
            <Sidebar isMain={false} />
            <Navbar />
            <PatientsTable />
        </div>
    );
}