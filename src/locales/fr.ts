export default {
  'lang': 'fr',
  'job': {
    'softwareEngineer': {
      'label': 'Software Engineer',
      'title': 'Développeur Logiciel',
      'description': 'Conçoit, développe et maintient des applications logicielles robustes, performantes et évolutives. Il maîtrise les principes d’ingénierie logicielle, les algorithmes et les bonnes pratiques de développement.'
    },
    'fullStackDeveloper': {
      'label': 'Full Stack Developer',
      'title': 'Développeur Full Stack',
      'description': 'Développe des applications web complètes, en travaillant à la fois sur le front-end (interface utilisateur) et le back-end (logique métier, base de données). Polyvalent et autonome dans la réalisation de projets web.'
    },
    'cybersecurityEngineer': {
      'label': 'Cybersecurity Engineer',
      'title': 'Ingénieur en Cybersécurité',
      'description': 'Assure la sécurité des systèmes, des réseaux et des applications. Identifie les vulnérabilités, met en place des mesures de protection et participe à la défense contre les cyberattaques.'
    }
  },
  'birthday': {
    'title': 'Anniversaire',
    'value': '11 Janvier 2001'
  },
  'location': 'Localisation',
  'navigationBar': {
    'about': 'Accueil',
    'resume': 'CV',
    'projects': 'projets',
    'contact': 'contact'
  },
  'section': {
    'home': {
      'title': 'Mon Profil',
      'myServices': {
        'title': 'Mes services',
        'category': {
          'All': 'Tous',
          'Development': 'Développement',
          'Database': 'Base de données',
          'Reseaux': 'Réseaux',
          'Cybersecurity': 'Cybersécurité',
          'Mobile': 'Mobile',
        }
      },
      'technicalSkills': {
        'title': 'Compétences techniques',
        'description': 'Mon expertise sur diverses technologies et outils me permet de concevoir des solutions adaptées à chaque besoin, en garantissant performance, sécurité et évolutivité.',
        'category': {
          'All': 'Tous',
          'Languages': 'Langues',
          'Frameworks/Libraries': 'Frameworks/Libraries',
          'ML/Data': 'ML/Data',
          'Blockchain/Web3': 'Blockchain/Web3',
          'Cloud/DevOps': 'Cloud/DevOps',
          'Concepts': 'Concepts',
        }
      }
    },
    'resume': {
      'title': 'Mon CV',
      'schooling': {
        'title': 'Ma scolarité',
      },
      'experiences': {
        'title': 'Mes expériences'
      }
    },
    'projects': {
      'title': 'Mes projets',
      'subTitle': 'Mes dernières réalisations',
      'description': "Voici quelques-uns des projets sur lesquels j'ai travaillé récemment.",
      'category': {
        'all': 'Tous',
        'webDevelopment': 'Développement Web',
        'software': 'Logiciel',
        'cybersecurity': 'Cybersécurité',
        'mobile': 'Mobile'
      }
    },
    'contact': {
      'title': 'Me contacter',
      'subTitle': 'Formulaire de contact',
      'form': {
        'name': 'Nom',
        'mail': 'Email',
        'message': 'Votre message',
        'submit': 'Envoyer'
      },
      'alert': {
        'sendMail': {
          'success': { 'title': 'Opération réussie!', 'description': 'Votre e-mail a été envoyé avec succès. ' },
          'error': { 'title': 'Opérations échouées!', 'description': 'Une erreur s\'est produite.' }
        }
      }
    },
    'themeMode': {
      'light': 'Clair',
      'dark': 'Sombre',
      'system': 'Système'
    }
  }
} as const