const yearOfExperience = Math.abs(
  new Date(Date.now() - new Date("08-06-2018").getTime()).getFullYear() - 1970
);

const constant = {
  SUMMARY: [
    `Passionate <strong>software developer with ${yearOfExperience} Years of experience</strong> having a flair for creating elegant solutions in the best efficient way.`,
    "Worked on various tech stacks such as <strong>React, Vue, NodeJs, Docker, Angular, Typescript and GoLang.</strong>",
    "Developed <em>Admin portal, B2B Extranet, OAuth application, Event registration and management portal</em>",
    "Passionate about <strong>Software Architecture, Standardizing process across the application.</strong> Also have interest towards <strong>open source</strong> contributions and updating with latest software trends.",
    "Regular attendee of <strong>web meetups and conferences.</strong> for upto date and keeping up with upcoming trends.",
  ],
  EXPERIENCE: [
    {
      id: 1,
      title: "Software Engineer",
      fromDate: "Oct 2019",
      toDate: "present",
      subTitle: "GoIbibo/MakeMyTrip, FullStack Developer",
      infos: [
        "Implemented and standardized Components Design System for InGoMMT system, in house Components Design System on top of Material-UI using Storybook for ReactJS.",
        "Have worked upon a Hybrid Application containing ReactJS as main shell, with extended support for legacy on going migration application running on Underscore.js template with jQuery and semi SSR with UI subsection rendered via Django templates.",
        "Integrated and setup GraphQL client along with configuring existing utils such as global loader, error handling using custom react hooks.",
        "Worked upon complete revamp of coupon pages, adding special closed group coupons type. With easier and interactive UI/UX, resulting 70% gain in conversion and more than 130% boost in creation of new type, reducing page load time by 2 sec to less than 1 sec and overall flow from 2 step to single view step.",
        "Created generic framework for coupons and it's variants flow, which will be dynamical created. With unique type along with creation, activation/deactivation, reactive and modify option baked in. Along with automated GTM integration and alert configuration.",
        "Worked on video upload and progress state, where hoteliers can upload property videos and moderate there video showcase to end users.",
        "Mentored and supporting multiple team members from onboarding to extending supports to other teams.",
        "Managed and took ownership multiple modules such as Rate & Inventory for hoteliers, Coupon, Videos, Guest Rating and reviews, Price Recommendation.",
        "Have been part planning architecture for all the running projects and working with Hybrid code base.",
      ],
    },
    {
      id: 2,
      title: "Software Engineer",
      fromDate: "Aug 2018",
      toDate: "Sept 2019",
      subTitle: "Y Media Labs, Front end Developer.",
      infos: [
        "Created dynamic page component rendering, based on a JSON object, have worked on rendering carousel, list view and table view. Further more this separates it into catagories for rendering and also register functions for API calls based on scenario such as initial data fetch and pagination calls.",
        "Customized dashboard has user preference option, which gets user back to the view which he/she was previously viewing. This implementation has significantly increased overall performance by a large margin, from 30 seconds to 3 seconds.",
        "Worked on admin portal which had private resource, which are to be rendered based on user's authorization. For this application we have also implemented OAuth and build on intensive use of storybook.",
        "Created mail & PDF template for report generation, which had more intuitive representation of data.",
        "Created and introduced firebase authentication, which increased delivery by 20%. Overall product has gained more then 120% traffic for the website.",
        "Introduced and implemented docker based deployment in software development process.",
        "Initiated project in Vue.js. which in turn forecasted future projects in Vue.js.",
        "Trained co workers in react and redux concepts.",
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
      ROLE: "Software Developer",
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
        value: "August 26 1996",
      },
      {
        label: "Website",
        type: "link",
        value: "https://shashank-resume.netlify.app/",
      },
      {
        label: "Linked in",
        type: "link",
        value: "https://www.linkedin.com/in/shashankshetty1996",
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
        value: "Computer Science, May 2014 to Jun 2012",
      },
    ],
  },
  SKILLS: [
    {
      label: "Primary Skills",
      type: "string",
      value:
        "JavaScript, React.js, Vue.js, Docker, Typescript, Node.js, Express.js, GoLang, Angular.",
    },
    {
      label: "Secondary Skills",
      type: "string",
      value:
        "jQuery, Python, Bootstrap 4, Materialize css, Shell script, GraphQL.",
    },
    {
      label: "Basic Skills",
      type: "string",
      value: "HTML5, CSS3, JSON, Markdown, YAML.",
    },
    {
      label: "Eco System library",
      type: "string",
      value: "Redux, Redux Saga, VueX, Vue resource, axios.",
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
      label: "NPTEL",
      type: "string",
      value: "Modern Application Development",
    },
  ],
};

export default constant;
