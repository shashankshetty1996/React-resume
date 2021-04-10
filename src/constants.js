const yearOfExperience = Math.abs(
  new Date(Date.now() - new Date("11-27-2017").getTime()).getFullYear() - 1970
);

const constant = {
  SUMMARY: [
    `Experienced Remote Systems Engineer with more than ${yearOfExperience} years of success in IT (Hardware and SaaS) industry with focus in pre & post sales. Possessing deep technical acumen along with excellent communication and negotiation skills to close deals and drive sales achievements. Known for ability to support customers as technical advocate throughout entire sales process.`,
    "As a Remote Systems Engineer, primary goal is ensuring that customers continually and increasingly receive value from the products. This is accomplished through initiative-taking, holistic, and organization-level approach that leverages technology and real-time visibility which warrants their full engagement and buy-in. Through this initiative-taking involvement that yields strategic value, the aim is to get established as a trusted advisor and customer advocate.",
  ],
  EXPERIENCE: [
    {
      id: 1,
      title: "Remote Systems Engineer",
      fromDate: "Nov 2017",
      toDate: "present",
      subTitle: "Dell Technologies Presales Engineer",
      infos: [
        "As highly motivated individual Enterprise Storage sales maker delivering a high standard of work to meet the required internal / external deadlines.",
        "Worked as Remote Sales Engineer with field sales team based out of Florida and Chicago being part of complete DADD process and huge opportunities leading to revenue generation of 80M on total in FY21 and 36M in two quarters of FY22.",
        "Performed technical Presales activities such as Demonstrations, presentations and RFPs to secure the technical/functional win for the business and to ensure growth of existing accounts.",
        "Provided end to end solutions such as designing and sizing storage solutions, producing solution decks and proposals, building technical drawings, quotations and addressing Dell EMC product related queries.",
        "Proactively monitoring the assets and conducting data collection and health check by logging in to customer array to analyze customer’s environment to get KPI’s and modeled solution to meet customer’s future needs. Also based on analysis coming up with tech refresh, upgrade and contract renewal opportunities.",
        "Directly Aligned to field team based out of Federal and Central Canada covering regions like Toronto, Ottawa and Vancouver and deliver presales solution service for two quarter resulting multiple accolades from field.",
        "SPOC for RMA process and Mentoring the whole team with process. Identifying the process of RMA (Return Material Authorization), dealing with escalations and managing the entire project along with constant interaction with stakeholders.",
        "Worked as Project Manager for Central Trafficking Project which involved interaction with cross functional teams to move storage assets from one data center to another.",
        "Responsible for hygienic account information by building Asset Dashboard of the account and keeping the Install Base Up to date and becoming the data masters of the account.",
        "Hire, train, and mentor Associate sales engineer analyst resources and enable them as Remote system engineers.",
      ],
    },
  ],
  EDUCATION: [
    {
      id: 1,
      title: "N.M.A.M Institute of Technology, Nitte, karnataka",
      fromDate: "Aug 2013",
      toDate: "May 2017",
      subTitle: "B.E in Computer Science",
    },
  ],
  PERSONAL: {
    HEADER: {
      NAME: "Sushmitha Shetty",
      ROLE: "Remote Systems Engineer",
    },
    INFO: [
      {
        label: "Contact Number",
        type: "number",
        value: "+91 7760756508",
      },
      {
        label: "Email ID",
        type: "email",
        value: "sushshetty508@gmail.com",
      },
      {
        label: "Date of Birth",
        type: "string",
        value: "June 19 1995",
      },
      {
        label: "Linked in",
        type: "link",
        value: "https://www.linkedin.com/in/shettysushmitha19",
      },
      {
        label: "Current Address",
        type: "string",
        value:
          "Shopsite 30/2 7th cross 2nd main Indiranagar stage 1, Bangalore Karnataka 560038",
      },
    ],
    EDUCATION: [
      {
        label: "NMAMIT, Nitte, karnataka",
        type: "string",
        value: "BE in Computer Science, Aug 2014 to May 2018",
      },
    ],
  },
  SKILLS: [
    {
      label: "Primary Skills",
      type: "string",
      value:
        "Pre/ Post-sales support, Demonstration, Proposal Building, Assets Management - Customer Installbase Cleanup.",
    },
    {
      label: "Secondary Skills",
      type: "string",
      value:
        "Sales Management, Stake holder Collaboration, Technical Consulting, Project Management,",
    },
    {
      label: "Tech Skills",
      type: "string",
      value: "Salesforce Tools, MS Word, MS Powerpoint, MS Excel. ",
    },
    {
      label: "Soft Skills",
      type: "string",
      value: "Customer Relations, Presentation, Training and Mentoring, ",
    },
  ],
  AWARDS: [
    {
      label: "",
      type: "list",
      value: [
        "The FISH AWARD winner 2017 intake batch in Dellemc",
        "Awards like Delight, Cheers and Bravo (Gold, Silver and Bronze respectively) for each quarter till date exemplifying Delivery Excellence, Exceptional Performance and innovation",
        "Hosted Dell Global Alliance Partner Summit at Delhi, Chennai and Bangalore.",
        "Face of Presales solution branding globally.",
        "Runner-up in Dell Women Cricket Tournament.",
        "Part of Social Initiatives such as Women In Action and Ugly India.GoTripper of the month, August 2020",
      ],
    },
  ],
};

export const CERTIFICATION_PROVIDERS = {
  UDEMY: "Udemy",
  SUMO_LOGIC: "Sumo Logic",
  DELL: "Dell Technologies",
};

export const CERTIFICATION = [
  {
    provider: CERTIFICATION_PROVIDERS.DELL,
    title:
      "Specialist – Implementation Engineer, PowerStore Solutions Version 1.0",
    issued_on: "Jan 2021",
  },
  {
    provider: CERTIFICATION_PROVIDERS.DELL,
    title:
      "Specialist - Technology Architect, Midrange Storage Solutions Version 1.0",
    issued_on: "Apr 2019",
  },
  {
    provider: CERTIFICATION_PROVIDERS.DELL,
    title: "Associate - Information Storage and Management Version 3.0",
    issued_on: "Dec 2017",
  },
];

export default constant;
