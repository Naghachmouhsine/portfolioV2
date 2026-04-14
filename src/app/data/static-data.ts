import { Projet } from '../models/Projet';
import { Skill } from '../models/Skill';
import { Cv } from '../models/Cv';
import { Profile } from '../models/Profile';

export const PROJETS: Projet[] =[
  {
        "titre": "Plateforme PedagoConnect — gestion des demandes urgentes (web & mobile)",
        "description": "Plateforme web et mobile pour gérer les demandes urgentes des enseignants, extensible aux administrations.",
        "technos": [
            "Angular",
            "React Native",
            "Spring Boot",
            "MySQL"
        ],
        "num": 7,
        "github": "",
        "photos": [
            "/PedagoConnect/admin.png",
            "/PedagoConnect/home.jpeg",
            "/PedagoConnect/newDemande.jpeg",
            "/PedagoConnect/mesDemandes.jpeg"
        ],
        "id": "PEDAGO001"
    },
  {
            "titre": "Plateforme e-commerce spécialisée en sourcing",
            "description": "Plateforme e-commerce dédiée au sourcing de produits.",
            "technos": [
                "Angular",
                "Spring Boot",
                "MySQL"
            ],
            "num": 6,
            "github": "",
            "photos": [
                            "/sourcing/home.png",
              "/sourcing/login.png",
              "/sourcing/REGISTRE.png",
                            "/sourcing/dashboard.png",
              "/sourcing/createSourcing.png",
              "/sourcing/soourcing.png"
            ],
            "id": "ECOM001"
        },
  {
        "titre": "Application de Collecte et d'Analyse des Émotions des Étudiant",
        "description": "",
        "technos": [
            "Models DeepLearning : YOLO v8, VGG16",
            "Flask",
            "React.js",
            "MongoDB"
        ],
        "num": 2,
        "photos": [
            "/emotions/detection.png",
            "/emotions/dashboard.png"
        ],
        "github": "https://github.com/Naghachmouhsine/DetecionEmotionsEtudiantsBackEnd",
        "id": "XP3P0gep5fFKNWYRCvy1"
    },
        {
        "description": "",
        "titre": "Application web de gestion des ressources matérielle",
        "technos": [
            "SpringBoot",
            "SpringSecurity",
            "JSTL",
            "JavaScript",
            "Bootstrap"
        ],
        "num": 4,
        "github": "https://github.com/Naghachmouhsine/Gestion-des-ressources-materielles",
        "photos": [
            "/Gestion materiels/besoin.png",
            "/Gestion materiels/ressource.png"
        ],
        "id": "WBzQCzYO6hKyeoak47Zc"
    },
    {
        "github": "https://github.com/Naghachmouhsine/clubappfrontEnd",
        "photos": [
            "/appCLub/Clup FCC.png",
            "/appCLub/Clup FCC (1).png",
            "/appCLub/Home.png"
        ],
        "num": 1,
        "technos": [
            "Angular",
            "Express.js",
            "MySql"
        ],
        "titre": " Application web/mobile de gestion de club sportif",
        "description": "",
        "id": "o8y1MAjRr2QKUyToEH6h"
    },
     {
        "titre": "Site qui présent des informations sur Maroc",
        "description": "",
        "technos": [
            "React.js",
            "Bootstrap"
        ],
        "num": 5,
        "github": "https://github.com/Naghachmouhsine/visit_morroc_frontEnd",
        "photos": [
            "/site/p1.png",
            "/site/p3.png",
            "/site/p4.png",
            "/site/p5.png",
        ],
        "id": "SYcDTsgECUZzWbLLwloQ"
    }];

export const SKILLS: Skill[] =[
    {
        "technos": [
            "MySQL",
            "PostgreSQL",
            "MongoDB"
        ],
        "category": "Base de données",
        "id": "0eeAqzpjhKgeMxRLHPmc"
    },
    {
        "technos": [
            "HTML",
            "CSS",
            "Bootstrap",
            "JavaScript",
            "TypeScripte",
            "React.js",
            "Angular"
        ],
        "category": "Frontend",
        "id": "FIJDE9YbloyUHnxcykVf"
    },
    {
        "category": "Backend",
        "technos": [
            "Spring Boot",
            "Flask",
            "Laravel",
            "Node.js"
        ],
        "id": "P03cxBfj9ZIuNi91ePd5"
    },
    {
        "technos": [
            "Big Data : Hadoop, Spark",
            "Machine Learning : classification, clustering",
            "Deep Learning : MLP, CNN, RNN, Transformers"
        ],
        "category": "Science des données",
        "id": "yEFESQDQQOrx47s0SroK"
    }
];

export const CVS: Cv[] = [
  { id: 'cv1', category: 'FR', url: 'assets/cv/cv-fr.pdf', isActive: true },
  { id: 'cv2', category: 'EN', url: 'assets/cv/cv-en.pdf', isActive: false }
];

export const PROFILES: Profile[] = [
{
    "description": "Ingénieur logicielle , passionné par les technologies modernes et l’intégration des solutions logicielles performantes. Solide expérience\ndans la conception, le développement, le déploiement et la maintenance des applications et aussi l’intégration des algorithmes\nd’intelligence artificielle pour automatiser des processus complexes.",
    "cv": "https://firebasestorage.googleapis.com/v0/b/naghachmouhsin.appspot.com/o/cv_versions%2FMouhsineNaghach__CV.pdf?alt=media&token=56d4be79-3f42-440c-80b5-4cd906fb216d",
    "github": "https://github.com/Naghachmouhsine/",
    "linkedin": "https://www.linkedin.com/in/mouhsine-naghach-329202293/",
    "phone": "0682666725",
    "email": "mouhsinenaghach@gmail.com",
    "isActive": true,
    "titre": "Full Stack Developer",
    "id": "fQHBzZQNfig4IbLJcvmo"
}
];
