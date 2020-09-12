export const HEADER = {
  designation: 'Full Stack Developer',
  location: 'Bangalore, India',
  locationIcon: '/images/location.png',
  locationIconAlt: 'Location',
  name: 'Santhosh Thirumavalavan',
  profilePicAlt: 'Profile Picture',
  profilePicImg: '/images/profile.jpg'
};

export const ABOUT = {
  bio: [
    'I am a Full Stack Web Developer and UI/UX enthusiast who focuses on writing clean, elegant and efficient code.',
    `My unequivocal love for creativity ushered me to create my first html page back in 2006. I was taken aback by
    the endless possibilities and there has been no turning back since then. I completed my B.Tech degree in Computer Science and
    Engineering from SRM University, Chennai in 2016.`,
    `I kick-started my tech career by interning at Crayon Data and later went on to work full time for Cognizant and
    Keepworks. As a polyglot developer, I have grabbed every possible opportunity at the workplace, to learn and hone
    my skills by working on diverse tasks ranging from designing components to deploying apps to production servers.`,
    `Apart from building web apps, I am an avid reader and a hobbyist photographer who likes to travel.`
  ],
  stack: 'Here\'s my tech stack.',
  stackShareUrl: 'https://stackshare.io/iamsantto/my-stack',
}

export const WORK = [
  {
    duration: 'Jan \'17 - Present',
    projects: [{
      description: 'Currently leading the development of the project by communicating with various teams across remote locations. Built major UI components with complex business logic, integrating third party APIs/SDKs. Developed the Round Robin algorithm for scheduling the customer requests. Improved the efficiency of our custom bot with the help of IBM Watson. Migrated different services to build a monolithic architecture. Set up, deployed the apps to production servers.',
      name: 'Kandy Wrappers',
      url: 'https://www.kandy.io/kandy-provides/kandy-wrappers'
    }],
    stack: [
      'React',
      'Redux',
      'Laravel',
      'Node.js',
      'Mithril',
      'Socket.io',
      'Webpack',
      'Yarn',
      'Vagrant',
      'ESlint',
      'Babel',
      'Gulp',
      'Ngingx',
      'Heroku',
      'MongoDB',
      'MySQL',
      'Jest',
      'IBM Watson'
    ],
    title: 'KeepWorks',
    url: 'http://www.keepworks.com/'
  },
  {
    duration: 'Jul \'16 - Dec \'17',
    projects: [{
      description: 'Finished in the top 24 of a coding challenge, which helped me get into the certified Full Stack Training program conducted by NIIT StackRoute instead of the regular training modules. Went on to work on a search portal that used a graph based database system and natural language processing.',
      name: 'Digital Engagement Practice',
      url: 'https://www.cognizant.com/whitepapers/Digital_Engagement_Practice_overview.pdf'
    }],
    stack:[
      'Angular',
      'Express.js',
      'Neo4j',
      'D3.js',
      'Node.js',
      'MongoDB',
      'jQuery',
      'Jasmine',
      'Webpack',
      'Mocha',
      'Vagrant',
      'ESlint',
      'Babel',
      'Gulp'
    ],
    title: 'Cognizant',
    url: 'https://www.cognizant.com/'
  },
  {
    duration: 'Jun \'16',
    projects: [{
      description: 'Responsible for writing scripts which read massive excel sheets, curate the data into suitable JSON models which were further used to render webpages.',
      name: 'Maya.ai',
      url: 'https://maya.ai/'
    }],
    stack: [
      'jQuery',
      'JavaScript',
      'JSON'
    ],
    title: 'Crayon Data',
    url: 'https://www.crayondata.com/'
  },
  {
    duration: 'Aug \'12 - May \'16',
    projects: [
      {
        description: 'Built a registration portal integrating third party APIs to facilitate online payments and automated response mails for handling registrations for our national level cultural fest which saw over 30,000 registrations.',
        name: 'Technical Head - Directorate of Student Affairs',
        url: 'https://www.linkedin.com/company/srmdsa/'
      },
      {
        description: 'The multidisciplinary learnings at this club, working with various clients assisting them with web design/development and branding content nurtured me into the developer I am.',
        name: 'Active Member - Webarch',
        url: 'https://webarchsrm.com/'
      },
      {
        description: 'Co-ordinate the functioning of the student body, planning/execution of various events during the academic year, including Milan \'16 - our annual national level cultural fest for about 25,000 students of the university.',
        name: 'Cultural Secretary (2015-2016)'
      },
      {
        description: 'Lead/Mentor a team of graphic designers responsible for continuous delivery of branding material such as webpages, event posters, banners, logos, graffiti, Tshirt designs, etc.',
        name: 'Convenor - Graphikos (Design Club)'
      }
    ],
    stack: [
      'HTML/CSS/JS',
      'Python',
      'Photoshop',
      'Illustrator'
    ],
    title: 'SRM University',
    url: 'https://www.srmist.edu.in/'
  }
]

export const FOOTER = {
  connect: [],
  nav: [
    { name: 'About' },
    { name: 'Work' },
    { name: 'Blog', link: 'https://medium.com/@craytographer' },
    { name: 'Pictures', link: 'https://500px.com/craytographer' },
    { name: 'Resume', link: 'santhosht.pdf' }
  ]
};

export const CONNECT = [
  {
    name: 'github',
    logo: 'images/github.png',
    url: 'https://github.com/iamsantto'
  },
  {
    name: 'linkedin',
    logo: 'images/linkedin.png',
    url: 'https://www.linkedin.com/in/craytographer/'
  },
  {
    name: 'instagram',
    logo: 'images/instagram.png',
    url: 'https://www.instagram.com/craytographer/'
  },
  {
    name: 'twitter',
    logo: 'images/twitter.png',
    url: 'https://twitter.com/craytographer/'
  },
  {
    name: 'mail',
    logo: 'images/mail.png',
    url: 'mailto:iamsantto@gmail.com'
  }
]

export const VIEWS = {
  about: 'About',
  work: 'Work'
}
