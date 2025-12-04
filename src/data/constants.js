export const Bio = {
  name: "Jose Nilson Cueva",
  roles: [
    "Data Scientist",
    "Web Developer",
    "Programmer",
  ],
  description:
    "Soy estudiante de Ingeniería Informática con enfoque en desarrollo de aplicaciones web y ciencia de datos. Motivado y versátil, estoy listo para asumir nuevos desafíos y comprometido a ofrecer resultados de alta calidad. Con una actitud positiva y una mentalidad de crecimiento, estoy preparado para contribuir significativamente y alcanzar grandes logros.",
  github: "https://github.com/JoseCuevaRamos",
  resume:
    "https://drive.google.com/file/d/1ArgNywR5Fa9ADXDHlNuLifGL98uuDSLk/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/jose-nilson-cueva-ramos-514032310/",
  twitter: "#",
  insta: "#",
  facebook: "#",
};

export const projects = [

  {
    id: 0,
    title: "Proyecto de AWS Academy",
    date: "Junio 2024",
    description:
      "El objetivo de este proyecto fue proporcionar a los estudiantes un conocimiento profundo y práctico de Amazon DynamoDB, un servicio de base de datos NoSQL totalmente administrado. Se trabajó con la creación y gestión de tablas, cálculo de unidades de lectura y escritura, índices secundarios, configuración de flujos y tablas globales, así como copias de seguridad y restauraciones.",
    image:
      "https://logowik.com/content/uploads/images/aws-amazon-web-services.jpg",
    tags: [
      "AWS",
      "SQL",
      "NoSQL",
      "DynamoDB",
      "Lambda",
      "Python",
      "Boto3",
      "EC2",
    ],
    category: "cloud",
    github: "https://github.com/JoseCuevaRamos/Proyecto_AWS",
    webapp: "https://github.com/JoseCuevaRamos/Proyecto_AWS",
  },

  {
    id: 1,
    title: "Sistema de Compras con Carrito",
    date: "Julio 2024",
    description:
      "Desarrollé una API RESTful en Java con Spring Boot, PostgreSQL y JPA (Hibernate) para gestionar un sistema de compras en línea. Se implementaron funcionalidades como gestión de productos, usuarios, carritos de compra y pedidos, asegurando una experiencia fluida para los clientes. Se integró autenticación y autorización con JWT para proteger los endpoints.",
    image:
      "https://img.freepik.com/vector-premium/carro-carrito-compra-que-contiene-mercancias-emoticon-dibujos-animados-dibujo-icono-doodle-ilustracion-vectorial_10606-1263.jpg",
    tags: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "JPA",
      "JWT",
      "REST API",
    ],
    category: "web app",
    github: "https://github.com/JoseCuevaRamos/Api-Carro-de-Compras",
    webapp: "#",
  },

  {
    id: 2,
    title: "API de Gestión de Películas y Reseñas",
    date: "Junio 2024",
    description:
      "Desarrollé una API RESTful en Java con Spring Boot para administrar una base de datos de películas, permitiendo a los usuarios agregar, editar y calificar títulos. Implementé JWT para autenticación, asegurando un control de acceso seguro. Se crearon endpoints para búsquedas avanzadas por género, director y puntuación.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNo1sUxeC03r0DUbopvvBrhqhLQ27coPbX6w&s",
    tags: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "JPA",
      "JWT",
      "REST API",
    ],
    category: "web app",
    github: "https://github.com/JoseCuevaRamos/ForoHub",
    webapp: "#",
  },

  {
    id: 3,
    title: "Chat Bot con Configuración Dinámica por Rol",
    date: "Julio 2024",
    description:
      "Este proyecto permite configurar dinámicamente un chatbot con roles personalizados. Define un rol, responde preguntas específicas y obtén una experiencia de interacción adaptada a tus necesidades. Se basa en Streamlit y la API de Cohere para la generación de respuestas contextuales.",
    image:
      "https://www.cio.com/wp-content/uploads/2023/08/chatbot_ai_machine-learning_emerging-tech-100778305-orig.jpg?quality=50&strip=all&w=1024",
    tags: [
      "Streamlit",
      "Cohere",
      "Python",
      "IA",
    ],
    category: "web app",
    github: "https://github.com/JoseCuevaRamos/chat-bot-streamlit",
    webapp: "#",
  },

  {
    id: 4,
    title: "Plataforma IoT para Recopilación y Presentación de Datos",
    date: "Agosto 2024",
    description:
      "Desarrollé una plataforma web conectada a un dispositivo IoT para la recopilación y presentación de datos en tiempo real. La arquitectura del sistema se basa en servicios de AWS como Lambda, API Gateway y DynamoDB, garantizando escalabilidad y disponibilidad.",
    image:
      "https://tektelic.com/wp-content/uploads/38-IoT.svg",
    tags: [
      "AWS",
      "IoT",
      "Lambda",
      "API Gateway",
      "DynamoDB",
      "JavaScript",
      "React",
      "Node.js",
    ],
    category: "web app",
    github: "https://github.com/JoseCuevaRamos/buho",
    webapp: "#",
  },
   {
    id: 5,
    title: "ICEYAKU (Aplicación Móvil)",
    date: "Enero 2024 - Febrero 2024",
    description:
      "Aplicación para Android desarrollada con Expo Go y Firebase. La primera pantalla ofrece un resumen general de la aplicación y sus funcionalidades. La segunda se integra con Firebase para mostrar datos en tiempo real desde la base de datos. La tercera se enfoca en medidas de seguridad en caso de inundaciones, proporcionando instrucciones detalladas y rutas de escape para garantizar la seguridad del usuario. La aplicación combina funcionalidad con diseño centrado en el usuario, proporcionando una herramienta informativa y práctica.",
    image:
      "https://raw.githubusercontent.com/JoseCuevaRamos/Grupo_3_fundamentos/main/Software/gif-20240803-183021.gif",
    tags: ["Java", "Android Studio", "Firebase", "Expo Go", "Arduino", "React-native"],
    category: "android app",
    github: "https://github.com/JoseCuevaRamos/Grupo_3_fundamentos",
    webapp: "https://github.com/JoseCuevaRamos/Grupo_3_fundamentos/tree/main/Software",
  },
    {
    id: 6,
    title: "Aplicación de Programación Optimizada con Algoritmos Genéticos",
    date: "Mayo 2024 - Junio 2024",
    description:
      "La aplicación ayuda a generar horarios considerando la disponibilidad de los profesores, las horas requeridas para cada curso y las aulas disponibles. Permite a los estudiantes seleccionar los cursos que desean tomar. Se implementó el uso de algoritmos genéticos para optimizar la generación de horarios, asegurando que se cumplan todas las restricciones y preferencias tanto de docentes como de alumnos.",
    image:
      "https://raw.githubusercontent.com/JoseCuevaRamos/Algoritmo_Horario/main/gif-20240804-004401.gif",
    tags: [
      "Python",
      "HTML",
      "CSS",
      "Algorithm",
      "Streamlit",
      "Flask",
    ],
    category: "web app",
    github: "https://github.com/JoseCuevaRamos/Algoritmo_Horario",
    webapp: "https://github.com/JoseCuevaRamos/Algoritmo_Horario",
  },
    {
    id: 7,
    title: "Encriptador de Texto Alura",
    date: "Julio 2024",
    description:
      "Desarrollé una aplicación web que permite a los usuarios cifrar y descifrar texto utilizando JavaScript, HTML y CSS. La aplicación ofrece una interfaz intuitiva diseñada en Figma, permitiendo una interacción fluida. Los usuarios pueden ingresar texto, seleccionar un método de cifrado y ver la salida cifrada o descifrada en tiempo real. JavaScript se encarga de la funcionalidad principal, garantizando la seguridad y privacidad de los datos.",
    image:
      "https://github.com/user-attachments/assets/693bf035-1f99-482f-9ac6-210904b0a5cf",
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
      "Figma",
    ],
    category: "web app",
    github: "https://github.com/JoseCuevaRamos/Alura_C1_encriptador",
    webapp: "https://josecuevaramos.github.io/Alura_C1_encriptador/",
  },

];

export const education = [
  {
    id: 0,
    img: "https://intranet.upch.edu.pe/account/static/img/upch/logo/isotipo.jpg",
    school: "Universidad Peruana Cayetano Heredia (UPCH)",
    date: "2022 - Actualidad",
    grade: "--",
    desc: "Actualmente curso la carrera de Ingeniería Informática en la Universidad Peruana Cayetano Heredia. Mis estudios se centran en el desarrollo de habilidades en programación, gestión de bases de datos y uso de tecnologías modernas para el desarrollo de software.",
    degree: "Bachiller en Ingeniería Informática",
  },

  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
    school: "Oracle Next Education (ONE)",
    date: "2024",
    grade: "Backend con Java y Spring",
    desc: "Participé en el programa de educación **Oracle Next Education (ONE)** con especialización en **desarrollo backend con Java y Spring**. Durante el programa, adquirí conocimientos en desarrollo de API REST, integración con bases de datos, patrones de diseño y buenas prácticas en Java.",
    degree: "Especialización en Backend con Java y Spring",
  },

  {
    id: 2,
    img: "https://upload.wikimedia.org/wikipedia/commons/f/fc/IBM_logo_in.jpg",
    school: "IBM/Coursera",
    date: "2023 - 2024",
    grade: "IBM Data Science Professional Certificate",
    desc: "Completé el programa IBM Data Science Professional Certificate en Coursera, donde adquirí conocimientos en ciencia de datos, aprendizaje automático y programación en Python.",
    degree: "Científico de Datos",
  },
];

// Horizontal certificates carousel data
export const certificates = [
  {
    id: 0,
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle",
    date: "jul. 2025 – jul. 2027",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7kUS0JS4hfbWsqt6bZxKYBFvNyJRyjnCsQQ&s",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=7590E9972597969380A6A1E12A0B253BBDDB87A52174AEAC2DD6601EC5E1769D",
  },
  {
    id: 1,
    title: "AWS Academy Graduate - AWS Academy Data Engineering",
    issuer: "Amazon Web Services (AWS)",
    date: "oct. 2024",
    image: "https://logowik.com/content/uploads/images/aws-amazon-web-services.jpg",
    link: "https://www.credly.com/badges/a955574a-9d8e-4204-bef2-c9b14bfb93b8/linked_in_profile",
  },
  {
    id: 2,
    title: "Scrum Foundation Professional Certification",
    issuer: "CertiProf",
    date: "oct. 2024 – oct. 2027",
    image: "https://certiprof.com/cdn/shop/files/Certiprof_Scrum_Foundation_badge480x480.webp?v=1742418590",
    link: "#",
  },
  {
    id: 3,
    title: "IBM Data Science Specialization",
    issuer: "IBM",
    date: "ago. 2024",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/IBM_logo_in.jpg",
    link: "https://www.coursera.org/account/accomplishments/specialization/3LKXKQLVBU13",
  },
  {
    id: 4,
    title: "AWS Academy Graduate - AWS Academy Introduction to Cloud Semester 2",
    issuer: "Amazon Web Services (AWS)",
    date: "jul. 2024",
    image: "https://logowik.com/content/uploads/images/aws-amazon-web-services.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Data Visualization with Python",
    issuer: "IBM",
    date: "jul. 2024",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/IBM_logo_in.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "Databases and SQL for Data Science with Python",
    issuer: "IBM",
    date: "jul. 2024",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/IBM_logo_in.jpg",
    link: "#",
  },
  {
    id: 7,
    title: "Cybersecurity Foundations for Risk Management",
    issuer: "University System of Georgia",
    date: "dic. 2023",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5S9D2vL3nVqWlKZVQUkRkaHK9vKw_OZIaA&s",
    link: "#",
  },
  {
    id: 8,
    title: "Inglés Avanzado",
    issuer: "ICPNA",
    date: "feb. 2023",
    image: "https://images.seeklogo.com/logo-png/33/1/icpna-logo-png_seeklogo-337573.png",
    link: "#",
  },
];
