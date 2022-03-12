import { Link } from 'react-router-dom'


export default function UserProfile() {
    return (
        <section id="content">
            <nav>
                <a href="javascript:void(0);" data-target="basicSidebar" data-placement="left" data-position="slidepush" is-open="true" is-open-width="1000" class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect pmd-sidebar-toggle"><i className="bx bx-menu" /></a>
                <a class="navbar-brand nav-link" href="#">
                    Categories
                </a>
                <form action="#">
                    <div className="form-input">
                        <input type="search" placeholder="Search..." />
                        <button type="submit" className="search-btn">
                            <i className="bx bx-search" />
                        </button>
                    </div>
                </form>
                <input type="checkbox" id="switch-mode" hidden="" />
                <label htmlFor="switch-mode" className="switch-mode" />
                <a href="#" className="notification">
                    <i className="bx bxs-bell" />
                    <span className="num">8</span>
                </a>
                <a href="#" className="profile">
                    <img src="assets/dashboard/img/people.png" />
                </a>
            </nav>
            <br />

            <main>
                <div className="head-title">
                    <div className="left">
                        <h2>
                            <pre>     Patient's Name</pre>
                        </h2>
                        <ul className="breadcrumb">
                            <li>
                                <i className="bx bx-chevron-right" />
                            </li>
                            <li>
                                <a className="active" href="#">
                                    User Profile
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a href="#" className="btn-download">
                        <Link to={"../bookappointment"}><span className="text" style={{ color: "white" }}>Add Appointment </span></Link>
                    </a>
                </div>
                <div>
                    <ul className="box-info">
                        <li>
                            <i className="bx bxs-calendar-check" />
                            <span className="text">
                                <h3>5</h3>
                                <p>Total Appointments</p>
                            </span>
                        </li>
                        <li>
                            <i className="bx bxs-dollar-circle" />
                            <span className="text">
                                <h3>$100</h3>
                                <p>Total Balance</p>
                            </span>
                        </li>
                        <li>
                            <i className="bx bxs-dollar-circle" />
                            <span className="text">
                                <h3>$100</h3>
                                <p>Amount Due</p>
                            </span>
                        </li>
                    </ul>

                </div>
                <br />
                <div className="table-data">
                    <div className="order">
                        <div className="head">
                            <h3>Appointments</h3>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Date and Time</th>
                                    <th>Status</th>
                                    <th>After Visit Summary</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01-10-2020</td>
                                    <td>
                                        <span className="status completed">Completed</span>
                                    </td>
                                    <td>
                                        <i class='bx bxs-file-pdf' style={{ "font-size": "1.3em", "font-family": "sans-serif" }}></i>After Visit.pdf
                                    </td>
                                </tr>
                                <tr>
                                    <td>18-11-2021</td>
                                    <td>
                                        <span className="status pending">Pending</span>
                                    </td>
                                    <td>
                                        <i class='bx bxs-file-pdf' style={{ "font-size": "1.3em", "font-family": "sans-serif" }}></i>After Visit.pdf
                                    </td>
                                </tr>
                                <tr>
                                    <td>19-05-2022</td>
                                    <td>
                                        <span className="status process">Process</span>
                                    </td>
                                    <td>
                                        <i class='bx bxs-file-pdf' style={{ "font-size": "1.3em", "font-family": "sans-serif" }}></i>After Visit.pdf
                                    </td>
                                </tr>
                                <tr>
                                    <td>01-07-2021</td>
                                    <td>
                                        <span className="status pending">Pending</span>
                                    </td>
                                    <td>
                                        <i class='bx bxs-file-pdf' style={{ "font-size": "1.3em", "font-family": "sans-serif" }}></i>After Visit.pdf
                                    </td>
                                </tr>
                                <tr>
                                    <td>11-08-2022</td>
                                    <td>
                                        <span className="status completed">Completed</span>
                                    </td>
                                    <td>
                                        <i class='bx bxs-file-pdf' style={{ "font-size": "1.3em", "font-family": "sans-serif" }}></i>After Visit.pdf
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </section>
    );
}