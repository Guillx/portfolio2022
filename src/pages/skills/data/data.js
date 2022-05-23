import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { GiCircleSparks } from "react-icons/gi";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import English from "../../../assets/flag1.png";
import German from "../../../assets/flag2.png";
import Spanish from "../../../assets/flag3.svg";
import Galician from "../../../assets/flag4.svg.jpg";

export const skillsData = [
  {
    label: "HTML",
    value: "85%",
    icon: <AiFillHtml5 />,
  },
  {
    label: "CSS",
    value: "75%",
    icon: <IoLogoCss3 />,
  },
  {
    label: "JavaScript",
    value: "55%",
    icon: <SiJavascript />,
  },
  {
    label: "React JS",
    value: "60%",
    icon: <FaReact />,
  },
  {
    label: "Figma",
    value: "60%",
    icon: <FaFigma />,
  },
  {
    label: "Spline 3D",
    value: "40%",
    icon: <GiCircleSparks />,
  },
  {
    label: "Node JS",
    value: "40%",
    icon: <FaNodeJs />,
  },
  {
    label: "MySQL",
    value: "30%",
    icon: <GrMysql />,
  },
  {
    label: "MongoDB",
    value: "30%",
    icon: <SiMongodb />,
  },
  {
    label: "Git",
    value: "50%",
    icon: <FaGitAlt />,
  },
];

export const languagesData = [
  {
    id: 1,
    image: `${English}`,
    progressLabel: "Inglés",
    progressValue: "70%",
  },
  {
    id: 2,
    image: `${German}`,
    progressLabel: "Alemán",
    progressValue: "35%",
  },
  {
    id: 3,
    image: `${Spanish}`,
    progressLabel: "Castellano",
    progressValue: "100%",
  },
  {
    id: 1,
    image: `${Galician}`,
    progressLabel: "Galego",
    progressValue: "100%",
  },
];
