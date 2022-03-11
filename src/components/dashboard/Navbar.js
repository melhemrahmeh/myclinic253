import { Link } from 'react-router-dom'

export default function Navbar() {
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
        </section>
    );
}