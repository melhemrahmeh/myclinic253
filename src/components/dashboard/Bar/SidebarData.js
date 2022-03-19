import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

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
		path: "/mypatients",
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
		path: "/myemployees",
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
		icon: <IoIcons.IoMdHelpCircle />,
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
];
