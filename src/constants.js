const yearOfExperience = Math.abs(
	new Date(Date.now() - new Date("08-06-2018").getTime()).getFullYear() - 1970
);

const constant = {
	SUMMARY: [
		`Passionate software developer with more than ${yearOfExperience} years of experience having flair for creating sophisticated solutions in the best efficient way.`,
		`Worked on various tech stacks such as <strong>React, NextJS, Typescript, GraphQL, VueJs, Angular and GoLang.</strong>`,
		`Developed several applications such as <em>B2B Hotel Extranet Portal, Admin portal, OAuth application, Event management portal.</em>`,
		`Passionate about <strong>Software Architecture, standardizing processes across the applications, improving system with at most industrial trends and standards.</strong>. Also possess keen interest towards open-source contributions and pacing with latest updates on technology.`,
		`Regular attendee of web meetups and conferences to track current business and technical needs in the market.`,
	],
	EXPERIENCE: [
		{
			id: 1,
			title: "Senior Software Engineer",
			fromDate: "Oct 2019",
			toDate: "present",
			subTitle: "GoIbibo/MakeMyTrip, FullStack Developer",
			infos: [
				`Implemented and standardized Components Design System for InGoMMT system, in house Components Design System on top of Material-UI using Storybook for ReactJS.`,
				`Worked on a Hybrid Application containing ReactJS as main shell, with extended support for legacy on going migration application running on Underscore.js template with jQuery and semi SSR with UI subsection rendered via Django templates.`,
				`Integrated and setup GraphQL client along with configuring existing utils such as global loader, error handling using custom react hooks.`,
				`Introduced Typescript and its benefits to the team and extended support in migrating existing utils, context and core components into TSX for type support as well as documentation.`,
				`Proactively performed various additional tasks other than business requirement, such as upgrading, replace and removing unused & redundant packages from code base. Also build in house package replacement such as feature tour, infinite scrolling, etc.`,
				`Worked on complete revamp of coupon pages, adding special closed group coupons type. Giving easier and interactive UI/UX, which in turn resulted 70% gain in conversion and more than 130% boost in creation of new type, reducing page load time from 2 sec to less than 1 sec and overall flow from 2 step to single view step.`,
				`Created generic framework for coupons and its variants flow, which will be dynamical created. With unique type along with creation, activation/deactivation, reactive and modify option baked in. Along with automated GTM integration and alert configuration.`,
				`Worked on video upload and progress state, where hoteliers can upload property videos and moderate their video showcase to end users.`,
				`Managed and took ownership of multiple modules such as Rate &amp; Inventory for hoteliers, coupon, videos, guest rating and reviews, price recommendation.`,
				`Have been part of planning architecture for all the running projects and working with hybrid code base. Along with mentoring and supporting multiple team members from onboarding to extending supports to other teams.`,
			],
		},
		{
			id: 2,
			title: "Software Engineer",
			fromDate: "Aug 2018",
			toDate: "Sept 2019",
			subTitle: "Y Media Labs, Front end Developer.",
			infos: [
				`Created dynamic page component rendering, based on a JSON object, have worked on rendering carousel, list view and table view. Additionally, this divides into subcategories for rendering and also registering functions for API calls based on scenario such as initial data fetch and pagination calls.`,
				`Customized dashboard has user preference option, which gets user back to the view which he/she was previously viewing. This implementation has significantly increased overall performance by a large margin, from 30 seconds to 3 seconds.`,
				`Worked on admin portal which had private resource, that are to be rendered based on user's authorization. This application was further implemented with OAuth and build on intensive use of storybook.`,
				`Created mail & PDF template for report generation, which had more intuitive representation of data.`,
				`Created and introduced firebase authentication, which increased delivery by 20%. Overall product has`,
				`gained more than 120% traffic for the website.`,
				`Introduced and implemented docker based deployment in software development process.`,
				`Initiated project in Vue.js. which in turn forecasted future projects in Vue.js.`,
				`Trained coworkers and teammates in react and redux concepts.`,
			],
		},
	],
	EDUCATION: [
		{
			id: 1,
			title: "N.M.A.M Institute of Technology, Nitte, karnataka",
			fromDate: "Aug 2014",
			toDate: "May 2018",
			subTitle: "B.E in Computer Science",
		},
		{
			id: 2,
			title: "Mahesh PU College, Karnataka",
			fromDate: "Jun 2012",
			toDate: "May 2014",
		},
		{
			id: 3,
			title: "GM Vidyaniketan Public School, Karnataka",
			fromDate: "Jun 2009",
			toDate: "Mar 2012",
		},
	],
	PERSONAL: {
		HEADER: {
			NAME: "Shashank S Shetty",
			ROLE: "Senior Software Engineer",
		},
		INFO: [
			{
				label: "Contact Number",
				type: "number",
				value: "+91 9481752839",
			},
			{
				label: "Email ID",
				type: "email",
				value: "imshashanksshetty@gmail.com",
			},
			{
				label: "Date of Birth",
				type: "string",
				value: "August 26, 1996",
			},
			{
				label: "Website",
				type: "link",
				value: "https://shashank-resume.netlify.app/",
			},
			{
				label: "Linked in",
				type: "link",
				value: "https://www.linkedin.com/in/imshashanksshetty",
			},
			{
				label: "twitter",
				type: "link",
				value: "https://twitter.com/_shashankshetty",
			},
			{
				label: "Github",
				type: "link",
				value: "https://www.github.com/shashankshetty1996",
			},
			{
				label: "Current Address",
				type: "string",
				value:
					"5th Phase, HAL 2nd Stage house number 2704, Kodihalli, Bengaluru",
			},
		],
		EDUCATION: [
			{
				label: "NMAMIT, Nitte, karnataka",
				type: "string",
				value: "BE in Computer Science, Aug 2014 to May 2018",
			},
			{
				label: "Mahesh PU College, Udupi, Karnataka",
				type: "string",
				value: "Computer Science, May 2012 to Jun 2014",
			},
		],
	},
	SKILLS: [
		{
			label: "Primary Skills",
			type: "string",
			value:
				"JavaScript, React.js, Typescript, GraphQL, NextJS, NodeJS, Tailwind.",
		},
		{
			label: "Secondary Skills",
			type: "string",
			value:
				"Express.js, Vue.js, Angular, GoLang, Material-UI, jQuery, Python, Docker, Shell script.",
		},
		{
			label: "Basic Skills",
			type: "string",
			value: "HTML5, CSS3, JSON, Markdown, YAML.",
		},
		{
			label: "Eco System library",
			type: "string",
			value: "URQL, react-router-dom, axios, SWR, Redux, Redux Saga, VueX.",
		},
		{
			label: "Preprocessor / Template Engine",
			type: "string",
			value: "SCSS, TypeScript, EJS, Handlebars.",
		},
		{
			label: "DevOps & Cloud",
			type: "string",
			value: "Git, Docker, Exposed to Jenkins and AWS.",
		},
	],
	AWARDS: [
		{
			label: "GoIbibo/MakeMyTrip",
			type: "string",
			value: "GoTripper of the month, August 2020",
		},
		{
			label: "Y Media Labs",
			type: "string",
			value: "Shining Star Award, May 2019",
		},
		{
			label: "Y Media Labs",
			type: "string",
			value: "Shining Star Award, November 2018",
		},
	],
	CERTIFICATION: [
		{
			label: "Microservices with Node JS and React",
			value: "Modern Application Development",
		},
	],
};

export const CERTIFICATION_PROVIDERS = {
	UDEMY: "Udemy",
	SUMO_LOGIC: "Sumo Logic",
};

export const CERTIFICATION = [
	{
		provider: CERTIFICATION_PROVIDERS.UDEMY,
		title:
			"Learn NextJS from the ground up and build production-ready, fullstack ReactJS apps with the NextJS framework!",
		issued_on: "Aug 2021",
	},
	{
		provider: CERTIFICATION_PROVIDERS.UDEMY,
		title: "Microservices with Node JS and React",
		issued_on: "Sep 2020",
	},
	{
		provider: CERTIFICATION_PROVIDERS.UDEMY,
		title: "Node JS: Advanced Concepts",
		issued_on: "Jul 2020",
	},
	// {
	// 	provider: CERTIFICATION_PROVIDERS.SUMO_LOGIC,
	// 	title: "Sumo Logic Fundamentals Certified",
	// 	issued_on: "Oct 2020",
	// 	expires_on: "Oct 2022",
	// },
	{
		provider: CERTIFICATION_PROVIDERS.UDEMY,
		title: "Typescript: The Complete Developer's Guide",
		issued_on: "Jul 2020",
	},
	{
		provider: CERTIFICATION_PROVIDERS.UDEMY,
		title: "Complete Guide to Protocol Buffers 3 [Java, Golang, Python]",
		issued_on: "May 2020",
	},
	{
		provider: CERTIFICATION_PROVIDERS.UDEMY,
		title: "Go: The Complete Developer's Guide",
		issued_on: "May 2020",
	},
];

export default constant;
