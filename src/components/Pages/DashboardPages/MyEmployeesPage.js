import Sidebar from "../../dashboard/Sidebar.js";
import Navbar from "../../dashboard/Navbar.js";
import EmployeesTable from "../../tables/EmployeesTable";

import React from 'react';

export default function MyEmployeesPage() {
    return (
        <div>
            <Sidebar isMain={false} />
            <Navbar />
            <EmployeesTable />
        </div>
    );
}