const constant = {
  SUMMARY: [
    'Passionate <strong>software developer with 1+ Years of experience</strong> having a flair for creating elegant solutions in the best efficient way.',
    'Worked on various tech stacks such as <strong>React, Vue, Angular and Node.</strong>',
    'Developed <em>Admin portal, B2B Application, OAuth application, Event registration and management portal, E-branding website and Smart Campus Application.</em>',
    'Passionate about <strong>Software Architecture, DevOps and Cloud computing.</strong> Also have interest towards <strong>open source</strong> contributions and updating with latest software trends.',
    'Regular attendee of <strong>web meetups and conferences.</strong>'
  ],
  EXPERIENCE: [
    {
      id: 1,
      title: 'Software Engineer',
      fromDate: 'Aug 2018',
      toDate: 'present',
      subTitle: 'Y Media Labs, Front end Developer.',
      infos: [
        'Created dynamic page component rendering, based on a JSON object, have worked on rendering carousel, list view and table view. Further more this separates it into catagories for rendering and also register functions for API calls based on scenario such as initial data fetch and pagination calls.',
        'Customized dashboard has user preference option, which gets user back to the view which he/she was previously viewing. This implementation has significantly increased overall performance by a large margin, from 30 seconds to 3 seconds.',
        "Worked on admin portal which has private resource data, which are to be rendered based on user's accessability. For this application we have also implemented OAuth. Project is build on intensive use of storybook.",
        'Created E-Mail and PDF template for report generation, which has more intuitive representation of data, which users.',
        'Created and introduced firebase authentication, which increased delivery by 20%. Overall product has gained more then 120% traffic for the website.',
        'Introduced and implemented docker based deployment in Software development process.',
        'Initiated project in Vue.js. which in turn forecasted future projects in Vue.js.',
        'Trained co workers in react and redux concepts.'
      ]
    },
    {
      id: 2,
      title: 'Freelancer',
      fromDate: 'May 2016',
      toDate: 'Jul 2018',
      infos: [
        'Designed architecture and database modelling for projects such as smart campus, exam evaluation portal and fest registration portal.',
        'Developed application which could withstand heavy traffic for very low performing system. That had to currently handle heavy load',
        'Have mitigated various security threat issues for projects which has helped products with confidential data and prevented external threats',
        'Designed full stack application from scratch and revamped existing e-branching websites.'
      ]
    }
  ],
  EDUCATION: [
    {
      id: 1,
      title: 'N.M.A.M Institute of Technology, Nitte, karnataka',
      fromDate: 'Aug 2014',
      toDate: 'May 2018',
      subTitle: 'B.E in Computer Science'
    },
    {
      id: 2,
      title: 'Mahesh PU College, Karnataka',
      fromDate: 'Jun 2012',
      toDate: 'May 2014'
    },
    {
      id: 3,
      title: 'GM Vidyaniketan Public School, Karnataka',
      fromDate: 'Jun 2009',
      toDate: 'Mar 2012'
    }
  ],
  PERSONAL: {
    HEADER: {
      NAME: 'Shashank S Shetty',
      ROLE: 'Software Developer'
    },
    INFO: [
      {
        label: 'Contact Number',
        type: 'number',
        value: '+91 9481752839'
      },
      {
        label: 'Email ID',
        type: 'email',
        value: 'imshashanksshetty@gmail.com'
      },
      {
        label: 'Date of Birth',
        type: 'string',
        value: 'August 26 1996'
      },
      {
        label: 'Website',
        type: 'link',
        value: 'https://shashankshetty1996.github.io'
      },
      {
        label: 'Linked in',
        type: 'link',
        value: 'https://www.linkedin.com/in/shashankshetty1996'
      },
      {
        label: 'Github',
        type: 'link',
        value: 'https://www.github.com/shashankshetty1996'
      },
      {
        label: 'Current Address',
        type: 'string',
        value:
          '5th Phase, HAL 2nd Stage house number 2704, Kodihalli, Bengaluru'
      }
    ]
  },
  SKILLS: [
    {
      label: 'Primary Skills',
      type: 'string',
      value:
        'JavaScript, React.js, Vue.js, Docker, Angular, Angular.js, Node.js, Express.js'
    },
    {
      label: 'Secondary Skills',
      type: 'string',
      value:
        'jQuery, Python, MySQL, MongoDB, Bootstrap 3, Bootstrap 4, Materialize css, Shell script, Svelte.js, GraphQL, Jenkins'
    },
    {
      label: 'Basic Skills',
      type: 'string',
      value: 'HTML5, CSS3, JSON, Markdown, YAML'
    },
    {
      label: 'Eco System library',
      type: 'string',
      value: 'Redux, Redux Saga, VueX, Vue resource, axios'
    },
    {
      label: 'Preprocessor / Template Engine',
      type: 'string',
      value: 'SCSS, TypeScript, EJS, Handlebars'
    },
    {
      label: 'DevOps & Cloud',
      type: 'string',
      value: 'Git, Docker, Exposed to Jenkins and AWS'
    }
  ],
  AWARDS: [
    {
      label: 'Y Media Labs',
      type: 'string',
      value: 'Shining Star Award, May 2019'
    },
    {
      label: 'Y Media Labs',
      type: 'string',
      value: 'Shining Star Award, November 2018'
    },
    {
      label: 'Finite Loop',
      type: 'string',
      value: 'All Rounder Performer of the year, 2017'
    }
  ],
  CERTIFICATION: [
    {
      label: 'NPTEL',
      type: 'string',
      value: 'Modern Application Development'
    }
  ]
};

export default constant;
