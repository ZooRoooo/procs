import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
   
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    PowerBi,
    linkedin,
    mongodb,
   // motion,
    mui,
    roboflow,
   // nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    C,
    snapgram,
    summiz,
    tailwindcss,
    threads,
   Python,
    Java
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: Java,
        name: "Java",
        type: "Language",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: C,
        name: "C",
        type: "Language",
    },
    {
        imageUrl: Python,
        name: "Python",
        type: "Language",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: roboflow,
        name: "Roboflow",
        type: "Annotation",
    },
    {
        imageUrl: PowerBi,
        name: "PowerBi",
        type: "DataAnalytics",
    },

    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
   
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
   
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ZooRoooo',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/indrajit-das-5a28432a2/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'An Intelligent Crowed Detecetion',
        description: 'This model help to detect crowd detect also help to find the optical flow of motion of the crowd and finalyy it also help give the density of the crowed of that whole area.',
        link: 'https://github.com/ZooRoooo/Crowed-Detection',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'ExpenseMate',
        description: 'It is a Expense Sharing App where You can add your expense and can also create group with your friends ,analysis the amount of trasaction and the turnover amount ,admin panel is also their to see the user transaction .',
        link: 'https://github.com/ShibaranjaniDasgupta/internship-ardent-expensemate',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-blue',
        name: 'InspireHub',
        description: 'It is a app where you can see peoples are sharing their idea.',
        link: 'https://github.com/ZooRoooo/stackapp',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Pizza Sales Analysis ',
        description: 'Dashboard Data report of the pizza Sale of a shop .',
        link: 'https://github.com/ZooRoooo/powerbi',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Sudoku',
        description: 'It is a Normal Sudoku Game',
        link: 'https://github.com/ZooRoooo/Sudoku-solver',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'SumZ',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/ZooRoooo/ai-summmerization',
    }
];