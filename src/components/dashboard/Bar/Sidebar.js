import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

const Nav = styled.div`
background: #F9F9F9;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;

`;

const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const SidebarNav = styled.nav`
background: #27c4d3;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
transition: 350ms;
z-index: 10;

`;

const SidebarWrap = styled.div`
width: 100%;
`;

const Sidebar = () => {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<IconContext.Provider value={{ color: "#040108" }}>
				<Nav>
					<NavIcon to="#">
						<FaIcons.FaBars onClick={showSidebar} />
					</NavIcon>
					<section id="content">

						<h1
							style={{
								textAlign: "center",
								marginLeft: "-50px",
								marginTop: "20px",
								color: "#26B0C2"
							}}
						>
							MyClinic
						</h1>

						{/* 
						// <nav>
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

							<a href="#" className="profile">
								<img src="assets/dashboard/img/people.png" alt=""/>
							</a>
						// </nav>*/}
					</section>
				</Nav>
				<SidebarNav sidebar={sidebar}>
					<SidebarWrap>
						<NavIcon to="#">
							<AiIcons.AiOutlineClose onClick={showSidebar} />
						</NavIcon>
						{SidebarData.map((item, index) => {
							return <SubMenu item={item} key={index} />;
						})}
					</SidebarWrap>
				</SidebarNav>
			</IconContext.Provider>
		</>
	);
};

export default Sidebar;
