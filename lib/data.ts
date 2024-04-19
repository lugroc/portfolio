import backgroundremoverImg from "@/public/backgroundremover.jpg";
import ecommerceImg from "@/public/ecommerce.jpg";

export const links = [
  {
    name: "Home",
    hash: "/#home",
  },
  {
    name: "About",
    hash: "/#about",
  },
  {
    name: "Projects",
    hash: "/#projects",
  },
  {
    name: "Skills",
    hash: "/#skills",
  },
  {
    name: "Contact",
    hash: "/#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Removing Background with AI",
    description:
      "Developed a web tool that deletes the background of an image utilizing a pretrained model.",
    tags: ["Python", "Flask", "JavaScript", "HTML", "CSS", "Docker", "Google Cloud"],
    flags: ["live", "Cold Start"],
    imageUrl: backgroundremoverImg,
    url: "https://backgroundremover-h6cota2n5a-tl.a.run.app/",
    target: "_blank",
  },
  {
    title: "Ecommerce",
    description:
      "Old project for learning Node.js. I made API, DB, Auth, Login, Cart, Payment, Dashboard and more.",
    tags: ["React", "Express.js", "MongoDB", "JavaScript", "Amazon S3"],
    flags: ["offline"],
    imageUrl: ecommerceImg,
    url: "#projects",
    target: "",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "AWS",
  "Google Cloud",
  "Tailwind",
  "MongoDB",
  "Express.js",
  "PostgreSQL",
  "Go",
  "Python",
  "Flask",
] as const;
