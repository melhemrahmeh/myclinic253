import { Link } from 'react-router-dom'

export default function Sidebar(props) {
    var addpatient;
    var addemployee;
    var myemployees;
    var mypatients;
    var myappointments;
    var aftervisit;
    var profile;
    var login;

    if (props.isMain) {
        addpatient = "./addpatient";
        addemployee = "./addemployee";
        myemployees = "./myemployees";
        mypatients = "./mypatients";
        myappointments = "./myappointments";
        aftervisit = "./aftervisit";
        profile = "./profile";
        login = "./login";
    } else {
        addpatient = "../addpatient";
        addemployee = "../addemployee";
        myemployees = "../myemployees";
        mypatients = "../mypatients";
        myappointments = "../myappointments";
        aftervisit = "../aftervisit";
        profile = "../profile";
        login = "../login";
    }

    return (
        <section id="sidebar">
            <a href="#" className="brand">
                <i class='bx bx-home-tooth' ></i>
                <span className="text"> My Clinic</span>
            </a>
            <ul className="sideMenu top">
                <li className="active">
                    <a href="#">
                        <i className="bx bxs-dashboard" />
                        <Link to={"../dashboard"}><span className="text" >My Clinic </span></Link>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bxs-calendar" />
                        <Link to={myappointments}><span className="text" >My Appointments </span></Link>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bxs-bar-chart-alt-2" />
                        <Link to={mypatients}><span className="text" >My Patients </span></Link>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bxs-add-to-queue" />
                        <Link to={addpatient}><span className="text" >Add Patient </span></Link>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bxs-doughnut-chart" />
                        <Link to={myemployees}><span className="text" >My Employees</span></Link>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bxs-file-plus" />
                        <Link to={addemployee}><span className="text" >Add Employees</span></Link>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-plus-medical"></i>
                        <Link to={aftervisit}><span className="text" >After Visit Summary</span></Link>
                    </a>
                </li>
            </ul>
            <ul className="sideMenu">
                <li>
                    <a href="#">
                        <i className="bx bxs-cog" />
                        <Link to={profile}><span className="text" >Settings</span></Link>
                    </a>
                </li>
                <li>
                    <a href="#" className="logout">
                        <i className="bx bxs-log-out-circle" />
                        <Link to={login}><span className="text" >Logout</span></Link>
                    </a>
                </li>
            </ul>
        </section>
    );
}


