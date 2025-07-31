export default {
  'lang': 'en',
  'job': {
    'softwareEngineer': {
      'label': 'Software Engineer',
      'title': 'Software Engineer',
      'description': 'Designs, develops, and maintains robust, high-performance, and scalable software applications. Mastery of software engineering principles, algorithms, and best development practices.'
    },
    'fullStackDeveloper': {
      'label': 'Full Stack Developer',
      'title': 'Full Stack Developer',
      'description': 'Develops complete web applications, working both on the front-end (user interface) and back-end (business logic, databases). Versatile and autonomous in delivering web projects.'
    },
    'cybersecurityEngineer': {
      'label': 'Cybersecurity Engineer',
      'title': 'Cybersecurity Engineer',
      'description': 'Ensures the security of systems, networks, and applications. Identifies vulnerabilities, implements protection measures, and participates in defense against cyber attacks.'
    }
  },
  'birthday': {
    'title': 'Birthday',
    'value': 'January 11, 2001'
  },
  'location': 'Location',
  'navigationBar': {
    'about': 'Home',
    'resume': 'Resume',
    'projects': 'Projects',
    'contact': 'Contact'
  },
  'section': {
    'home': {
      'title': 'My Profile',
      'myServices' : {
        'title' : 'My Services'
      },
      'technicalSkills': {
        'title': 'Technical Skills',
        'description': 'My expertise in various technologies and tools enables me to design tailored solutions for each need, ensuring performance, security, and scalability.',
        'category': {
          'All': 'All',
          'Languages': 'Languages',
          'Frameworks/Libraries': 'Frameworks/Libraries',
          'ML/Data': 'ML/Data',
          'Blockchain/Web3': 'Blockchain/Web3',
          'Cloud/DevOps': 'Cloud/DevOps',
          'Concepts': 'Concepts',
        }
      }
    },
    'resume': {
      'title': 'My Resume',
      'schooling': {
        'title': 'My Education',
      },
      'experiences': {
        'title': 'My Experiences'
      }
    },
    'projects': {
      'title': 'My Projects',
      'subTitle': 'My Latest Works',
      'description': "Here are some of the projects I have recently worked on.",
      'category': {
        'all': 'All',
        'webDevelopment': 'Web Development',
        'software': 'Software',
        'cybersecurity': 'Cybersecurity',
        'mobile': 'Mobile'
      }
    },
    'contact': {
      'title': 'Contact Me',
      'subTitle': 'Contact Form',
      'form': {
        'name': 'Name',
        'mail': 'Email',
        'message': 'Your message',
        'submit' : 'Send'
      },
      'alert' : {
        'sendMail' : {
          'success': {'title': 'Operation Successful!', 'description' : 'Your email has been sent successfully.'},
          'error' : { 'title': 'Operation Failed!', 'description' : 'An error occurred.'}
        }
      }
    },
    'themeMode' : {
      'light' : 'Light',
      'dark' : 'Dark',
      'system' : 'System'
    }
  }
} as const
