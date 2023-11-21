/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ranjan Singh",
  title: "Hi all, I'm Ranjan",
  subTitle: emoji(
    "An enthusiastic DevSecOps Engineer 🚀 leveraging extensive experience in building secure and scalable cloud infrastructures with cutting-edge tools such as Docker, Kubernetes, Jenkins, Terraform, and AWS/GCP/Azure. Proficient in automating security, development, and operations tasks to drive faster time-to-market, improve product quality, and ensure robust cybersecurity controls."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1ARoC2Lph1zdj57yz_xajGLuWjxtAxsOL?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rekid46/",
  linkedin: "https://www.linkedin.com/in/ranjan-singh-335845206/",
  gmail: "singhtanjan9024@gmail.com",
  gitlab: "https://gitlab.com/rekid46",
  facebook: "https://www.facebook.com/lifeofranjan",
  medium: "https://medium.com/@rekid46",
  stackoverflow: "https://stackoverflow.com",
  instagram: "https://instagram.com/simply.ranjan",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "UNSTOPPABLE DEVSECOPS ENGINEER DETERMINED TO CONQUER EVERY EMERGING TECH STACK!",
  skills: [
    emoji(
      "⚡ With a keen eye for automation, I continually refine our processes to ensure swift, seamless, and stable releases."
    ),
    emoji("⚡ Navigating the nexus of development and operations, I build and streamline efficient deployment pipelines."),
    emoji(
      "⚡ At the vanguard of DevOps, I foster a culture of collaboration and rapid delivery within our software ecosystem."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Automation",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Security",
      fontAwesomeClassname: "fas fa-shield-alt"
    },
    {
      skillName: "Collaboration",
      fontAwesomeClassname: "fas fa-users"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-cubes"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Ansible",
      fontAwesomeClassname: "fab fa-ansible"
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Poornima Institute of Engineering and Technology",
      logo: require("./assets/images/piet.jpg"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "Augest 2018 - July 2022",
      desc: "Participated in the research of DevSecops Trends and published 3 papers.",
      descBullets: [
        "Ranked top 10% in the program.",
        "Took courses about Software Engineering, Web Security, Operating Systems etc."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Automation", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Security",
      progressPercentage: "80%"
    },
    {
      Stack: "Collaboration",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "DevSecOps Engineer",
      company: "Fev India Pvt Ltd",
      companylogo: require("./assets/images/fev11.jpeg"),
      date: "April 2022 – Present",
      desc: "I streamlines the development and operations pipeline, ensuring efficient deployment and management of software solutions critical to automotive design, production, and testing processes. I ensure that the secure development and deployment of automotive software solutions, maintaining best-in-class security practices within the DevOps lifecycle, and mitigating cybersecurity risks in line with industry standards and regulations.",
    },
    {
      role: "DevSecOps Lead",
      company: "Medius Technologies Pvt Ltd",
      companylogo: require("./assets/images/medius.avif"),
      date: "Jan 2021 – July 2022",
      desc: "I've spearhead the integration of development, security, and operations, ensuring the secure and efficient deployment of our cloud-based debt management solutions. I've maintained security controls, conduct risk assessments, automate deployment processes, and guide the team in implementing secure coding practices."
    },
    {
      role: "DevOps Associate",
      company: "Celebal Technologies Pvt Ltd",
      companylogo: require("./assets/images/celebal2.png"),
      date: "Sep 2021 – Apr 2022",
      desc: "I was responsible for implementing and managing DevOps processes, including the deployment and orchestration of applications using Kubernetes. My role also involved DataOps tasks, ensuring efficient data pipelines, data quality, and reliable data delivery within the organization's tech stack."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/medius1.png"),
      projectName: "TheMedius.ai",
      projectDesc: "Medius is at the forefront of debt management and envisions advancing the economy by empowering financial institutions with practical, technologically advanced solutions for managing their loan accounts. Our cloud platform, built on award-winning machine learning and a robust strategy engine, helps resolve NPAs and provides an empathetic collection experience. Our team of recovery attorneys developed a technology that allows banks not only to foresee but also control risks, thanks to automated pre-litigation and litigation services powered by pre-approved terminology. We're inspired to reduce risks by providing impactful solutions, and we've built a fully automated cloud collection software trusted by recognized banks, NBFCs, and lenders to deliver end-to-end, SaaS-based, collection management tools integrated with legal workflows.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://themedius.ai/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/devopsfolio.png"),
      projectName: "DevSecOpsFolio",
      projectDesc: "A clean, beautiful and responsive portfolio template for DevSecOps Engineers! It allows users to showcase their skills, education, work experience, open-source projects, achievements, blogs, and more. The template, built with advanced technologies like React and Node.js, can be personalized as desired, with an ability to link to GitHub and Medium accounts. It is highly user-friendly, providing instructions for setting up and running the project locally for development and testing. The portfolio can also be dockerized for efficient deployment​.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://raje.pro"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Microsoft Azure Certified DevOps Engineer Expert",
      subtitle:
        "Earning the DevOps Engineer Expert certification demonstrates the ability to combine people, process, and technologies to continuously deliver valuable products and services that meet end user needs and business objectives.",
      image: require("./assets/images/microsoft-certified-expert-badge.png"),
      imageAlt: "Az-400 logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        }
      ]
    },
    {
      title: "Microsoft Azure Administrator Associate",
      subtitle:
        "Earning Azure Administrator Associate certification validates the skills and knowledge to implement, manage, and monitor an organization’s Microsoft Azure environment.",
      image: require("./assets/images/azure-administrator.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "AWS Certified Solutons Architect",
      subtitle: "Earners of this certification have a comprehensive understanding of AWS services and technologies.",
      image: require("./assets/images/AWS SAA-02.png"),
      imageAlt: "Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://raje.pro/"
        }
      ]
    },
    
    {
      title: "Certified Kubernetes Administrator",
      subtitle: "It is designed to validate the skills and knowledge of professionals in administering Kubernetes clusters",
      image: require("./assets/images/CKA.png"),
      imageAlt: "Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://raje.pro/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest",
      slides_url: "https://bit.ly/slides",
      event_url: "https://www.facebook.com//"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9001002191",
  email_address: "singhranjan9024@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
