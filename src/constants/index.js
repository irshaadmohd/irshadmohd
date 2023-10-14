import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    // meta,
    starbucks,
    tesla,
    shopify,
    movies,
    recipe,
    weather,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UX Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    
    {
      title: "BCA",
      company_name: "Kannur university",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Mar 2019 - Apr 2022",
      points: [
        "Gained proficiency in programming languages such as Java, C++, Python.",
        "Learned database concepts and gained experience in working with databases, including SQL and database management systems (DBMS)",
        "Familiarity with web development technologies like HTML, CSS, JavaScript, and web frameworks.",
        "Knowledge of various operating systems, including Windows, Linux, and Unix.",
      ],
    },
    {
      title: "SDE intern",
      company_name: "Brototype",
      icon: starbucks,
      iconBg: "#383E56",
      date: "May 2022 - Oct 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Engineer",
      company_name: "LevelX",
      icon: shopify,
      iconBg: "#383E56",
      date: "Nov 2022 - Present",
      points: [
        "Experienced Full Stack Engineer specializing in the MERN stack, with a strong foundation in both front-end and back-end development.",
        "Proficient in building scalable and responsive web applications, leveraging modern technologies and best practices.",
        "Adept at collaborating with cross-functional teams to deliver high-quality software solutions",
        "A commitment to staying updated with the latest trends and technologies in web development.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "Movies App",
      description:
        "Discover and explore a vast collection of movies across various genres with MovieFlix, thanks to its integration with The Movie Database (TMDb). Create your personalized watchlist, save your favorite movies, and enjoy a seamless movie-watching experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Api",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
       image: movies,
      source_code_link: "https://github.com/irshaadmohd/movies-app",
    },
    {
      name: "Weather App",
      description:
        "Web application that provides current weather information for a given location. It fetches weather data from a weather API and displays it to the user in a user-friendly format.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Api",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/irshaadmohd/SkyForecast",
    },
    {
      name: "Recipe App",
      description:
        "Web Application that application that allows users to search, discover, and view various recipes",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
      ],
      image: recipe,
      source_code_link: "https://github.com/irshaadmohd/recipe-app",
    },
  ];
  
  export { services, technologies, experiences, projects };