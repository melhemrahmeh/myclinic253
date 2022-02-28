
export default function Main() {

    return (
        <>
            <nav className="sidebar_d">
                <div className="logo_d d-flex_d justify-content-between">
                    <a href="index.html">
                        <img src="assets/dashboard/img/logo.png" alt="" />
                    </a>
                    <div className="sidebar_d_close_icon d-lg-none">
                        <i className="ti-close" />
                    </div>
                </div>
                <ul id="sidebar_d_menu">
                    <li className="mm-active">
                        <a
                            className="has-arrow"
                            href="../dentist/index.html"
                            aria-expanded="false"
                        >
                            <img src="assets/dashboard/img/icon2/1.svg" alt="" />
                            <span>My Clinic</span>
                        </a>
                    </li>
                    <br />
                    <li className="mm-active">
                        <a
                            className="has-arrow"
                            href="../dentist/calendar.html"
                            aria-expanded="false"
                        >
                            <img src="assets/dashboard/img/icon2/2.svg" alt="" />
                            <span>My Appointments</span>
                        </a>
                    </li>
                    <br />
                    <li className="mm-active">
                        <a
                            className="has-arrow"
                            href="../dentist/MyPatients.html"
                            aria-expanded="false"
                        >
                            <img src="assets/dashboard/img/icon2/6.svg" alt="" />
                            <span>My Patients</span>
                        </a>
                    </li>
                    <br />
                    <li className="mm-active">
                        <a
                            className="has-arrow"
                            href="../dentist/MyEmployees.html"
                            aria-expanded="false"
                        >
                            <img src="assets/dashboard/img/icon2/6.svg" alt="" />
                            <span>My Employees</span>
                        </a>
                    </li>
                    <br />
                    <li className="mm-active">
                        <a
                            className="has-arrow"
                            href="../dentist/settings.html"
                            aria-expanded="false"
                        >
                            <img src="assets/dashboard/img/icon2/3.svg" alt="" />
                            <span>Settings</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <section className="main_content dashboard_part">
                <div className="container-fluid no-gutters">
                    <div className="row">
                        <div className="col-lg-12 p-0">
                            <div className="header_iner d-flex_d justify-content-between align-items-center">
                                <div className="sidebar_d_icon d-lg-none">
                                    <i className="ti-menu" />
                                </div>
                                <div className="serach_field-area">
                                    <div className="search_inner">
                                        <form action="#">
                                            <div className="search_field">
                                                <input type="text" placeholder="Search here..." />
                                            </div>
                                            <button type="submit">
                                                {" "}
                                                <img src="assets/dashboard/img/icon/icon_search.svg" alt="" />{" "}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="header_right d-flex_d justify-content-between align-items-center">
                                    <div className="profile_info">
                                        <img src="assets/dashboard/img/client_img.png" alt="#" />
                                        <div className="profile_info_iner">
                                            <p>Welcome,</p>
                                            <h5>Dr. </h5>
                                            <div className="profile_info_details">
                                                <a href="#">
                                                    My Profile <i className="ti-user" />
                                                </a>
                                                <a href="#">
                                                    Settings <i className="ti-settings" />
                                                </a>
                                                <a href="#">
                                                    Log Out <i className="ti-shift-left" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main_content_iner ">
                    <div className="container-fluid plr_30 body_white_bg pt_30">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="single_element">
                                    <div className="quick_activity">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="quick_activity_wrap">
                                                    <div className="single_quick_activity">
                                                        <h4>Total Income</h4>
                                                        <h3>
                                                            $ <span className="counter">579,000</span>{" "}
                                                        </h3>
                                                    </div>
                                                    <div className="single_quick_activity">
                                                        <h4>Total Expenses</h4>
                                                        <h3>
                                                            $ <span className="counter">79,000</span>{" "}
                                                        </h3>
                                                    </div>
                                                    <div className="single_quick_activity">
                                                        <h4>Review</h4>
                                                        <h3>
                                                            <span className="counter">☆☆☆☆☆</span>
                                                        </h3>
                                                    </div>
                                                    <div className="single_quick_activity">
                                                        <h4>Number of Patients</h4>
                                                        <h3>
                                                            <span className="counter">70</span>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6">
                                <div className="white_box mb_30 min_430">
                                    <div className="box_header  box_header_block ">
                                        <div className="main-title">
                                            <h3 className="mb-0">Profit &amp; Number of Visits</h3>
                                        </div>
                                        <div className="box_select d-flex_d">
                                            <select className="nice_Select2 mr_5">
                                                <option value={1}>Monthly</option>
                                                <option value={1}>Monthly</option>
                                            </select>
                                            <select className="nice_Select2 ">
                                                <option value={1}>Last Year</option>
                                                <option value={1}>this Year</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div id="bar_active" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6">
                                <div className="white_box mb_30 min_430">
                                    <div className="box_header  box_header_block">
                                        <div className="main-title">
                                            <h3 className="mb-0">Weekly Best Operation in Revenue</h3>
                                        </div>
                                    </div>
                                    <canvas height={200} id="visit-sale-chart" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-6">
                                <div className="white_box mb_30 min_400 ">
                                    <div className="box_header  box_header_block">
                                        <div className="main-title">
                                            <h3 className="mb-0">Mail Box</h3>
                                        </div>
                                        <div className="legend_style mt-10"></div>
                                    </div>
                                    <div className="title_btn"></div>
                                    <canvas height="120px" id="sales-chart" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_part">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="footer_iner text-center">
                                    <p>
                                        2022 © MyClinic - Designed by{" "}
                                        <a href="#">
                                            {" "}
                                            <i className="ti-heart" />{" "}
                                        </a>
                                        <a href="#">Int Elligence; team</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}