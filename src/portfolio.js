/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Abhishek's Portfolio",
  description:
    "A committed and ambitious data science professional who is currently studying in Monash University's Master of Data Science programme in Melbourne, Australia. I am excited to work with data and usually love wrangling and visualising data.",
  og: {
    title: "Abhishek Sivananthan Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Abhishek Sivananthan",
  logo_name: "AbhishekSivananthan",
  nickname: "decisive_candy",
  subTitle:
    "A committed and ambitious data science professional who is currently studying in Monash University's Master of Data Science programme in Melbourne, Australia. I am excited to work with data and usually love wrangling and visualising data.",
  resumeLink:
    "https://drive.google.com/file/d/1wcVDLbhBlo-5RhUBumE-MPAAZanSInAa/view?usp=share_link",
  portfolio_repository: "https://github.com/Abhishek-200128/masterPortfolio-1",
  githubProfile: "https://github.com/Abhishek-200128",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Abhishek-200128",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abhishek-sivananthan-a332b81b4/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:abhisheksiva28@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/decisive.candy/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Effective use of data visualization techniques to visualize and analyse data",
        "⚡ Efficient use of Data Wrangling techniques to clean data before modelling",
      ],
      softwareSkills: [
        {
          skillName: "R Programming",
          fontAwesomeClassname: "devicon-rstudio",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Apache Spark",
          fontAwesomeClassname: "devicon-apachespark-wordmark",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Apache Kafka",
          fontAwesomeClassname: "devicon-apachekafka-wordmark",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Software Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using Javascript",
        "⚡ Developing web applications using Apache Struts and Java",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
  ],
};

// Education page
const degrees = {
  degrees: [
    {
      title: "Kumaraguru College of Technology",
      subtitle: "B.E. in Information Science and Engineering",
      logo_path: "kct_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Machine Learning, Data Science Full Stack Development.",
        "⚡ I passed with distinction.",
      ],
      website_link: "https://kct.ac.in",
    },
    {
      title: "Monash University",
      subtitle: "Master of Data Science",
      logo_path: "monash_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2023 - 2024",
      descriptions: [
        "⚡ I have taken varity of courses related to big data processing, data wrangling and machine learning which helped my gather a vast knowledge regarding the field",
        "⚡ During my time at university, I was involved in an industry project with a group of 5 memebers where we developed an IT solution regarding climate change in Australia.",
      ],
      website_link: "https://www.monash.edu",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://drive.google.com/file/d/1SVIVj2xNbBEgRZjKYXk97nqRY5Xv0yAE/view?usp=share_link",
      alt_name: "Stanford University",
      color_code: "#0056D1",
    },
    {
      title: "Text Retreival and Search Engines",
      subtitle: "- Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://drive.google.com/file/d/1nD7qwsQDHS8PXWuZ6IO52HVHibR195Df/view?usp=share_link",
      alt_name: "deeplearning.ai",
      color_code: "#0056D1",
    },
    {
      title: "Introduction to Data Science - Python",
      subtitle: "- Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://drive.google.com/file/d/1Zg7g7AjTQb9wDWxjlEN6sUM-m9HaHVRg/view?usp=share_link",
      alt_name: "Google",
      color_code: "#0056D1",
    },
    {
      title: "Server-side Development with NodeJS, Express and MongoDB",
      subtitle: "- Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://drive.google.com/file/d/1k8Yo5sq-R_s1MyjVgUh3nWWzUxq8aY5W/view?usp=share_link",
      alt_name: "IBM",
      color_code: "#0056D1",
    },
    {
      title: " Cyber Security Essentials",
      subtitle: "- Cisco",
      logo_path: "cisco-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1ItViSaEKg7C90l82iRbG95XQnCvC6mwP/view?usp=share_link",
      alt_name: "Microsoft",
      color_code: "#FFFFFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked at Zoho Corporation as a Software Engineer where I worked with a team of talented individuals to improve the Zoho Creator Product.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "Zoho Corporation",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "zoho_logo.jpg",
          duration: "May 2022 - Dec 2022",
          location: "Chennai, Tamilnadu, India",
          description:
            "Optimizing server performance and improving the general user experince of the product with the help of Apache Struts and JSP (Java Servlet Pages)",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineer Intern",
          company: "Zoho Corporation",
          company_url: "https://legatohealthtech.com/",
          logo_path: "zoho_logo.jpg",
          duration: "Aug 2021 - Apr 2022",
          location: "Chennai, Tamilnadu, India",
          description:
            "Contributed to the Zoho Creator product while gaining hands-on experience in Java, Javascript and SQL. Assisted in debugging and fixing various bugs, ensuring smooth product functionality.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and simple Web Applications.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "myicon.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, and Web Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
