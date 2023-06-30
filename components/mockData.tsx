import Button from "./Button/Button";
import SlideText from "./Slider/SlideText";
import {Component, ReactElement} from "react";

type Data = {
    id: number;
    img: string;
    header: string;
    slideText: ReactElement<any, any>;
    button: ReactElement<any, any>;
}

type Project = {
    id: number;
    img: string;
    header: string;
    text: string;
    button: ReactElement<any, any>;
}
 export const data: Data[] = [
    {
        id: 1,
        img: '../../Slide_image.png',
        header: 'Neural Networks and Joggers',
        slideText: <SlideText/>,
        button: <Button>Read more</Button>,
    },
     {
         id: 2,
         img: '../../Slide_image.png',
         header: 'Neural Networks and Joggers',
         slideText: <SlideText/>,
         button: <Button>Read more</Button>,
     },
     {
         id: 3,
         img: '../../Slide_image.png',
         header: 'Neural Networks and Joggers',
         slideText: <SlideText/>,
         button: <Button>Read more</Button>,
     },
     {
         id: 4,
         img: '../../Slide_image.png',
         header: 'Neural Networks and Joggers',
         slideText: <SlideText/>,
         button: <Button>Read more</Button>,
     },
     {
         id: 5,
         img: '../../Slide_image.png',
         header: 'Neural Networks and Joggers',
         slideText: <SlideText/>,
         button: <Button>Read more</Button>,
     },
     {
         id: 6,
         img: '../../Slide_image.png',
         header: 'Neural Networks and Joggers',
         slideText: <SlideText/>,
         button: <Button>Read more</Button>,
     },
     {
         id: 7,
         img: '../../Slide_image.png',
         header: 'Neural Networks and Joggers',
         slideText: <SlideText/>,
         button: <Button>Read more</Button>,
     },
     {
         id: 8,
         img: '../../Slide_image.png',
         header: 'Neural Networks and Joggers',
         slideText: <SlideText/>,
         button: <Button>Read more</Button>,
     },
     {
         id: 9,
         img: '../../Slide_image.png',
         header: 'Neural Networks and Joggers',
         slideText: <SlideText/>,
         button: <Button>Read more</Button>,
     },
     {
         id: 10,
         img: '../../Slide_image.png',
         header: 'Neural Networks and Joggers',
         slideText: <SlideText/>,
         button: <Button>Read more</Button>,
     },
     {
         id: 11,
         img: '../../Slide_image.png',
         header: 'Neural Networks and Joggers',
         slideText: <SlideText/>,
         button: <Button>Read more</Button>,
     },
     {
         id: 12,
         img: '../../Slide_image.png',
         header: 'Neural Networks and Joggers',
         slideText: <SlideText/>,
         button: <Button>Read more</Button>,
     },
];


export const projects: Project[] = [
    {
        id: 1,
        img: '/system_football.png',
        header: 'Py Football',
        text: 'An AI sport analytics platform that enable players\n' +
            'generate stats and insights to ace their game.',
        button: <Button>Explore</Button>,
    },
    {
        id: 2,
        img: '/systemjif.png',
        header: 'Robonet',
        text: '2D- RL Environment to train self navigating robots.',
        button: <Button>Explore</Button>,
    },
    {
        id: 3,
        img: '/systemgif3.png',
        header: 'Roboobstacle',
        text: 'Training a Robotic Agent to learn how to avoid obstacles.',
        button: <Button>Explore</Button>,
    },
    {
        id: 4,
        img: '/systemgif4.png',
        header: 'Pytennis',
        text: 'A reinforcement learning based tennis game - Using Dual-DQNs',
        button: <Button>Explore</Button>,
    },


]


export const products: Project[] = [
    {
        id: 1,
        img: '/product1.png',
        header: 'Rectvision',
        text: 'Rectvision is a SaaS no-code platform that enables \n' +
            'individuals or businesses to create their own AI and deploy \n' +
            'it into their existing business or a new business with no \n' +
            'machine learning expertise required.',
        button: <Button>Explore</Button>,
    },
    {
        id: 2,
        img: '/product2.png',
        header: 'SynX',
        text: 'A platform that enable organizations and individuals access \n' +
            'to quality synthetic data.',
        button: <Button>Explore</Button>,
    },
    {
        id: 3,
        img: '/product3.png',
        header: 'RectSports',
        text: 'An AI  sport analytics platform that enable players, coaches \n' +
            'generate stats and insights to ace their game.',
        button: <Button>Explore</Button>,
    },
    {
        id: 4,
        img: '/product4.png',
        header: 'Firstwears',
        text: 'A platform that enable users access to quality wears from \n' +
            'their comfort zones with short delivery period.',
        button: <Button>Explore</Button>,
    },


]
