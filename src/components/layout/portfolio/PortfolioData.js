import blogImg from "../../../assets/blog.png";
import recipeImg from "../../../assets/recipes.png";
import todoImg from "../../../assets/todo.png";
import restaurantImg from "../../../assets/restaurant.png";

export const portfolioContent = [
  {
    name: "Projects Coming Soon 🚀",
    link: "#",
    imageSrc: blogImg,
    desc: "Stay tuned! I’m currently building exciting projects with Python, React.js, and AWS. They’ll be added here soon.",
    github: "#",
    tag: ["Python", "React.js", "AWS"],
    itemPostion: "row",
  },
  {
    name: "Machine Learning in Progress 🤖",
    link: "#",
    imageSrc: recipeImg,
    desc: "Working on ML-driven apps using Python and FastAPI. This space will showcase data science + backend projects.",
    github: "#",
    tag: ["Python", "FastAPI", "ML"],
    itemPostion: "row-reverse",
  },
  {
    name: "Full-Stack Build 🔧",
    link: "#",
    imageSrc: todoImg,
    desc: "Developing full-stack applications with Python (Flask/Django) + React. Coming soon to this portfolio!",
    github: "#",
    tag: ["Python", "Flask", "React.js"],
    itemPostion: "row",
  },
  {
    name: "Creative UI Experiments 🎨",
    link: "#",
    imageSrc: restaurantImg,
    desc: "Exploring modern UI/UX design with React.js and Chakra UI. Placeholder for upcoming web projects.",
    github: "#",
    tag: ["React.js", "Chakra UI", "CSS"],
    itemPostion: "row-reverse",
  },
];
