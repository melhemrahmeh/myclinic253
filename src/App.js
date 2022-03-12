import AboutUs from "./components/Pages/MyClinicPages/AboutUs.js"
import MainPage from "./components/Pages/MyClinicPages/MainPage.js"
import BookAppointment from "./components/Pages/MyClinicPages/BookAppointment.js"
import OperationsPages from "./components/Pages/MyClinicPages/OperationsPage.js"
import MyAppointments from "./components/Pages/DashboardPages/MyAppointmentsPage.js"
import AfterVisitPage from "./components/Pages/DashboardPages/AfterVisitPage.js"
import AddEmployeePage from "./components/Pages/DashboardPages/AddEmployeePage.js"
import AddPatientPage from "./components/Pages/DashboardPages/AddPatientPage.js"

import TeamPage from "./components/Pages/MyClinicPages/TeamPage.js"
import Login from "./components/Pages/MyClinicPages/Login.js"
import Join from "./components/Pages/MyClinicPages/Join.js"
import MyPatientsPage from "./components/Pages/DashboardPages/MyPatientsPage"
import MyEmployeesPage from "./components/Pages/DashboardPages/MyPatientsPage"
import UserProfilePage from "./components/Pages/DashboardPages/UserProfilePage"
import Main from "./components/dashboard/Main.js"


import { Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <div>
      <Routes>
        <Route index path="" element={<MainPage />} />
        <Route path="about/" element={<AboutUs />} />
        <Route path="bookappointment/" element={<BookAppointment />} />
        <Route path="operations/" element={<OperationsPages />} />
        <Route path="team/" element={<TeamPage />} />
        <Route path="login/" element={<Login />} />
        <Route path="join/" element={<Join />} />

        <Route path="aftervisit/" element={<AfterVisitPage />} />
        <Route path="addemployee/" element={<AddEmployeePage />} />
        <Route path="addpatient/" element={<AddPatientPage />} />
        <Route path="myemployees/" element={<MyEmployeesPage />} />
        <Route path="mypatients/" element={<MyPatientsPage />} />
        <Route path="dashboard/" element={<Main />} />
        <Route path="myappointments/" element={<MyAppointments />} />
        <Route path="user/" element={<UserProfilePage />} />
      </Routes>
    </div>
  );
}