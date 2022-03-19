import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";


export const SidebarData = [
	{
		title: "My Clinic",
		path: "/dashboard",
		icon: <AiIcons.AiFillHome />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

	},
	{
		title: "My Appointments",
		path: "/myappointments",
		icon: <IoIcons.IoIosPaper />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,


	},
	{
		title: "Patients",
		path: "",
		icon: <FaIcons.FaPhone />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
		subNav: [
			{
				title: "My Patients",
				path: "/mypatients",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Add Patient",
				path: "/addpatient",
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: "Employees",
		path: "",
		icon: <FaIcons.FaEnvelopeOpenText />,

		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "My Employees",
				path: "/myemployees",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Add Employee",
				path: "/addemployee",
				icon: <IoIcons.IoIosPersonAdd />,
			},
		],
	},
	{
		title: "After Visit Summary",
		path: "/aftervisit",
		icon: <AiIcons.AiOutlineForm />,
	},

	{
		title: "Settings",
		path: "/profile",
		icon: <IoIcons.IoMdHelpCircle />,
	},

	{
		title: "Test",
		path: "/test",
		icon: <IoIcons.IoMdHelpCircle />,
	},
	{
		title: "Logout",
		path: "/",
		icon: <BiIcons.BiLogOut />,
	},
];