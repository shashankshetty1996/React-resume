const constant = {
  HEADER: {
    TITLE:
      'Passionate front end developer with a flair for creating elegant solutions in the best efficient way.',
    WORK:
      'Developed Admin portal, OAuth application, Event Registration portal, E-branding website and Smart Campus Application.',
    PLAN:
      'Passionate about Software Architecture, Resolving challenging problems, DevOps and Cloud computing.',
    FOLLOW_UP: 'Regular attendee of web meetups and update with trends'
  },
  EXPERIENCE: [
    {
      id: 1,
      title: 'Software Engineer',
      fromDate: 'Aug 2018',
      toDate: 'present',
      subTitle: 'Y Media Labs, Front end Developer.',
      infos: [
        'Created dynamic page component rendering, based on a JSON object, I have rendered carousel, list view and table view in. Further more this separates it into catagories for rendering and also register functions for API calls based on scenario such as initial data fetch and pagination calls.',
        'Customized dashboard has user preference option, which gets user back to the view which he/she was previously viewing. This implementation has significantly increased overall speed by a large margin, from about 3 minutes rendering to 3 to 5 second completely.',
        "Worked on admin portal which has private resource data, which are to be rendered based on user's accessability. For this application we have also implemented OAuth. Project is build on intensive use of storybook.",
        'Created E-Mail and PDF template for report generation, which has more intuitive representation of data, which users.',
        'Created and introduced firebase authentication, which increased delivery by 20%. Overall product has gained more then 120% traffic for the website.',
        'Introduced and implemented docker based deployment and importance in Software development process.',
        'Initiated project in Vue.js. which in turn forecasted future projects in Vue.js.',
        'Trained co worker with react and redux concept in a span of one week.'
      ]
    },
    {
      id: 2,
      title: 'Senior Event & Training Head and Tech Lead',
      fromDate: 'Mar 2017',
      toDate: 'Jul 2018',
      subTitle: 'Finite Loop (Freelancing)',
      infos: [
        'Designed architecture and database modelling for projects such as smart campus, exam evaluation portal and fest registration portal.',
        'Trained over 140+ students with various technology such as HTML, CSS, JavaScript, AngularJS, NodeJs, etc.',
        'Developed application which could with stand heavy traffic for very low performing system. That had to currently handle more then 3000 concurrent user accessing shared data',
        'Collaborated with very domain and expertise level co-worker to complete various task such as IoT, Agriculture domain, college administrator, retired bank official',
        'Have solved various issue and security threat for various projects. Which helped product with there confidently data and prevention for external threats',
        'Organized and participated in various event such as Introduction to web technology, Hands on session on Software life cycle using DevOps technologies.',
        'Have lead client interaction for understanding use case and tried to understand potential significance purpose of the product and come up with optimize solution for it.'
      ]
    },
    {
      id: 3,
      title: 'Software Developer',
      fromDate: 'May 2016',
      toDate: 'Mar 2017',
      subTitle: 'Freelancing',
      infos: [
        'Designed full application stuck from starch and revamped existing e-branching websites.',
        'Build end-to-end user desktop application for store to manage grocery. Which increased saving by 3 times and overall revenue by 2 times.',
        "Also another desktop Application to keep track of book and it's borrowers. Which had capability of tracking down and searching throw 45,000+ records. This has saved months of work all together.",
        'Cloud based data migration project for association for there payroll data management.'
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
      ROLE: 'UI/UX Software Developer'
    },
    INFO: [
      {
        label: 'Contact Number',
        type: 'number',
        value: '+91 9481752839'
      },
      {
        label: 'Current Address',
        type: 'string',
        value: 'new one ill add here'
      },
      {
        label: 'Email ID',
        type: 'email',
        value: 'shashankshetty1996@gmail.com'
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
        label: 'Github',
        type: 'link',
        value: 'https://www.github.com/shashankshetty1996'
      }
    ]
  },
  SKILLS: [
    {
      label: 'Primary Skills',
      type: 'string',
      value:
        'React.js, Vue.js, Docker, Angular, Angular.js, Node.js, Express.js'
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
      value: 'Git, Docker, Jenkins (Basic), AWS (Basic concept for deployment)'
    }
  ]
};

export default constant;
