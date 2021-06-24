const greeting = {
  title: "Hello, World! 👋 I'm Abdoul Salam Ally",
  subTitle:
    "I'm a passionate Software Engineer, graphics designer and a film maker based in Bujumbura, Burundi specializing in building exceptional, high-quality software products, designs and videos.",
  resumeLink: "https://www.linkedin.com/ambry/?x-li-ambry-ep=AQFVb0TrrCN99QAAAXo5hjYtyYaguNT0Jbp_O5X8-yOKsuWJbnKcLVGtC3RDr1NAPBe21bF8pABKNvWxz9qUi2fi0UDz0JueTKbHhV4a1NXAAy6k12SSpJ8k0N8395-35tbEBb37tl_WcHjxp_IOK8IAaK1-CYf_pJcn0ymauei-lDw06Vo74R12a2NsuPi86J3AGiarYwDP3TwkThhUV5HFtXNf4Cdmj26MCkGTetrd_eG-uvCrMntDlhfXb-44OcHDLaTyruXxSNH3CYRtwE4kwiFp56mwb4O9toMrWJ8d7MgHGl8k3RomNJTycn6LTH0ST1nIwidoknMpq6yY6H3ibUjNTzxblTG511hPNxx0OfH5Vus3O1jKoz23SVPfT-k8dwqLXNvMsirRRZwC9dkk9JxArtb1tAfCAwEumeofxcckVvopc2VIg3sLjMCictVX7BOD4xIgyfugoS7bou8pttZmIChepRNiUTAd-QXB0olZGkNyiLcpXT-0b01hV2ZrZc-9o4DJZNaw-sefMg&x-ambry-um-filename=Profile.pdf"
}

const socialMediaLinks = {
  github: "https://github.com/abdoulsalamally",
  linkedin: "https://www.linkedin.com/in/abdoul-salam-ally-2429b6155/",
  gmail: "abdelsalami2016@gmail.com",
  // gitlab: "https://gitlab.com/pratikms",
  // facebook: "https://www.facebook.com/pratik.shivaraikar"
}

const skillsSection = {
  title: "About Me",
  subTitle: "I am a Fullstack Developer, I turn things into a coding perspective and I have a professional experience of working with Web and Mobile development. Apart from that, I've also worked on quite a few windows projects such as Management Systems, Point Of Sales and many more. I also have a huge passion in graphics designing and film making without forgetting audio production",
  skillsPreamble: "Here are a few programming technologies that I've worked on:",
  
  softwareSkills: [
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    // {
    //   skillName: "Python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "PHP",
    //   fontAwesomeClassname: "fab fa-php"
    // },
  
  
    // {
    //   skillName: "AWS",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
  
    // {
    //   skillName: "Docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // },
    // {
    //   skillName: "Java",
    //   fontAwesomeClassname: "fab fa-java"
    // },
   
  ]
}

const experience = {
  showExperience: true, //Set it to true to show experience Section
  experience: [
    {
      key: 3,
      role: "Software Engineer",  
      company: "Kasim",
      companyLogo: require("./images/calsoft.jpg"),
      companyHomepage: "#",
      background: "rgb(230, 22, 29)",
      date: "August 2019 – Present",
      desc: "Mobile development Softwares, Web design, Graphics design and Video editing",
      descBullets: [
        "Developed POS for small businesses",
        "Working on Fin-tech projects",
        "Designing and maintaining various websites"
      ]
    },
    {
      key: 2,
      role: "Software Engineer",   
      company: "Inspired Business Ideas",
      companyLogo: require("./images/quickheal.png"),
      companyHomepage: "https://ibi-africa.com/",
      background: "rgb(244, 100, 28)",
      date: "Feb 2019 – August 2019",
      desc: "Worked on Mobile apps",
      descBullets: [
        "Developed POS for small businesses",
        "Designed and implemented using hybrid framework ( web,android and IOS )",
        "Worked on digital signage projects using Rasperry Pi"
      ]
    },
 
  ]
}

const openSource = {
  githubConvertedToken: process.env.GATSBY_GITHUB_ACCESS_TOKEN,
  githubUserName: "abdoulsalamally"
}

const blogSection = {
  title: "Blogs",
  subtitle: "Whenever I find time, I also like to write about whatever I have learned:",
  url: "https://abdelsalamally.blogspot.com/"
}

const contactInfo = {
  title: "Get In Touch",
  subtitle: "My inbox is always open. Whether for a potential project or just to say hi, I'll try my best to answer your email!",
    number: "+25761085970",
  email_address: "abdelsalami2016@gmail.com"
}

export { greeting, socialMediaLinks, skillsSection, experience, openSource, blogSection, contactInfo }
