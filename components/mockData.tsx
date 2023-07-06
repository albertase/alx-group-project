import Button from "./Button/Button";
import {Component, ReactElement} from "react";
import Link from "next/link";

type Data = {
    id: number;
    img: string;
    header: ReactElement<any, any>;
    slideText: string;
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
        img: '/article1.webp',
        header: <p className="text-[18.5px] leading-[20px]">Trackus-Coach 10x better, form<br />ulating better winning strategies</p>,
        slideText: 'In today’s episode of football, we will be talking about how Trackus, helps coaches coach 10 time...etter than their usual selves. First and foremost, introducing Trackus, Trackus is an AI that generates actionable insights (from tracking and event data) in sports games. In more context, this AI watches sports games and generates tactical analytics, player chances,',
        button: <Link href="https://medium.com/@elishatofunmi/trackus-coach-10x-better-formulating-better-winning-strategies-with-ai-292081cbfb27" as="https://medium.com/@elishatofunmi/trackus-coach-10x-better-formulating-better-winning-strategies-with-ai-292081cbfb27"><Button>Read more</Button></Link>,
    },
     {
         id: 2,
         img: '/article2.webp',
         header: <p className="text-[20px] leading-[24px]">One year of running a startup <br/> full-time —  Rectlabs Inc.</p>,
         slideText: 'Today makes it officially 1 year since I announced Rectlabs Inc as an AI startup emanating from N...igeria, Africa.',
         button: <Link href="https://medium.com/@elishatofunmi/one-year-of-running-a-startup-full-time-rectlabs-inc-9a6e42bc09e1" as="https://medium.com/@elishatofunmi/one-year-of-running-a-startup-full-time-rectlabs-inc-9a6e42bc09e1"><Button>Read more</Button></Link>,
     },
     {
         id: 3,
         img: '/article3.webp',
         header: <p className="leading-[33px]">The Story behind Rectvision &  <br/> SynX— Rectlabs Inc Flagship <br/> products, In my  journey as a full-<br/>stack AI engineer.</p>,
         slideText: 'Hi folks, It’s been a long while since I wrote like this, I am pretty much getting back to being ... little more consistent this year. This time around, I just want to share a little bit of my story and why I am building an AI-centered startup within the African space.',
         button: <Link href="https://medium.com/@elishatofunmi/the-story-behind-rectvision-synx-rectlabs-inc-flagship-products-366fe719b52f" as="https://medium.com/@elishatofunmi/the-story-behind-rectvision-synx-rectlabs-inc-flagship-products-366fe719b52f"><Button>Read more</Button></Link>,
     },
     {
         id: 4,
         img: '/article4.webp',
         header: <p className="leading-[24px]">Multi-team object detection for <br/> football games on Raspberry <br/> Pi 3</p>,
         slideText: 'Building 1 object detection model to detect 4 different football teams — Introduction Computer vis...ion is a branch of deep learning that',
         button: <Link href="https://medium.com/cometheartbeat/multi-team-object-detection-technique-of-football-games-on-raspberry-pi3-94ccbe01b9fd" as="https://medium.com/cometheartbeat/multi-team-object-detection-technique-of-football-games-on-raspberry-pi3-94ccbe01b9fd"><Button>Read more</Button></Link>,
     },
     {
         id: 5,
         img: '/article4.webp',
         header: <p className="leading-[24px]">Four Important Computer Vision <br/> Annotation Tools you Need <br/> to Know in 2020</p>,
         slideText: 'A breakdown of the four most-used annotation tools for object detection — Introduction Computer v... is a field in artificial',
         button: <Link href="https://medium.com/cometheartbeat/4-important-computer-vision-annotation-tools-you-need-to-know-in-2020-9f964931ed7" as="https://medium.com/cometheartbeat/4-important-computer-vision-annotation-tools-you-need-to-know-in-2020-9f964931ed7"><Button>Read more</Button></Link>,
     },
     {
         id: 6,
         img: '/article6.webp',
         header: <p className="leading-[24px]">Real-time Object Detection <br/> using SSD MobileNet V2 on <br/> Video Streams</p>,
         slideText: 'An easy workflow for implementing pre-trained object detection architectures on video streams — I... this article, we’ll be learning the',
         button: <Link href="https://medium.com/cometheartbeat/real-time-object-detection-using-ssd-mobilenet-v2-on-video-streams-3bfc1577399c" as="https://medium.com/cometheartbeat/real-time-object-detection-using-ssd-mobilenet-v2-on-video-streams-3bfc1577399c"><Button>Read more</Button></Link>,
     },
     {
         id: 7,
         img: '/article7.webp',
         header: <p className="text-[18px] leading-[23px]">End-to-End Object Detection <br/> Using EfficientDet on Raspberry <br/> Pi 3 (Part 3)</p>,
         slideText: 'Hi there, this is the 3rd part of a 3 part series, for better understanding kindly read my first ... second articles here: End-to-end object',
         button: <Link href="https://medium.com/cometheartbeat/end-to-end-object-detection-using-efficientdet-on-raspberry-pi-3-part-3-2bd6a7a6614d" as="https://medium.com/cometheartbeat/end-to-end-object-detection-using-efficientdet-on-raspberry-pi-3-part-3-2bd6a7a6614d"><Button>Read more</Button></Link>,
     },
     {
         id: 8,
         img: '/article8.webp',
         header: <p className="leading-[29px]">End-to-end Object Detection <br/> Using EfficientDet on Raspberry <br/> Pi 3 (Part 2)</p>,
         slideText: 'Hi there! This is the 2nd part of a 3-part series on building and deploying a custom object detec... model to a Raspberry Pi 3. To get',
         button: <Link href="https://medium.com/cometheartbeat/end-to-end-object-detection-using-efficientdet-on-raspberry-pi-3-part-2-bb5133646630" as="https://medium.com/cometheartbeat/end-to-end-object-detection-using-efficientdet-on-raspberry-pi-3-part-2-bb5133646630"><Button>Read more</Button></Link>,
     },
     {
         id: 9,
         img: '/article9.webp',
         header: <p className="text-[16px] leading-[26px]">End-to-end object detection using<br/> EfficientDet on Raspberry Pi 3 (P1)</p>,
         slideText: 'Computer vision deals with giving computers or machines a visual understanding of the environment...t’s a broad field that could be',
         button: <Link href="https://medium.com/cometheartbeat/end-to-end-object-detection-using-efficientdet-on-raspberry-pi-3-e4a0d3fe895b" as="https://medium.com/cometheartbeat/end-to-end-object-detection-using-efficientdet-on-raspberry-pi-3-e4a0d3fe895b"><Button>Read more</Button></Link>,
     },
     {
         id: 10,
         img: '/article10.webp',
         header: <p className="text-[16px] leading-[24px]">Utilization of Dask ML Framework <br/> for Fraud Detection —End-to-end <br/>Data analytics</p>,
         slideText: 'Introduction Fraudulent activities have become a rampant activity that has aroused a lot of curio... in the financial sector. This has posed a',
         button: <Link href="https://medium.com/towards-artificial-intelligence/utilization-of-dask-ml-framework-for-fraud-detection-end-to-end-data-analytics-310b2f94d897" as="https://medium.com/towards-artificial-intelligence/utilization-of-dask-ml-framework-for-fraud-detection-end-to-end-data-analytics-310b2f94d897"><Button>Read more</Button></Link>,
     },
     {
         id: 11,
         img: '/article11.webp',
         header: <p className="text-[19px] leading-[26px]">Regularization techniques for im<br/>age processing using TensorFlow</p>,
         slideText: 'In machine learning, our ultimate concern is how best we can model our data for optimal performan... Imagine you’re working with imag',
         button: <Link href="https://medium.com/cometheartbeat/regularization-techniques-for-image-processing-using-tensorflow-56c5b365bc17" as="https://medium.com/cometheartbeat/regularization-techniques-for-image-processing-using-tensorflow-56c5b365bc17"><Button>Read more</Button></Link>,
     },
     {
         id: 12,
         img: '/article12.webp',
         header: <p className="leading-[22px]">Filters as an image processing <br/> tool — part 1</p>,
         slideText: 'Introduction Image processing is a fundamental field in the aspect of computer visioning and its ...ely concerned with giving machines the ability to understand images. There are images we do really want',
         button: <Link href="https://medium.com/analytics-vidhya/filters-as-an-image-processing-tool-part-1-1700a925c105" as="https://medium.com/analytics-vidhya/filters-as-an-image-processing-tool-part-1-1700a925c105"><Button>Read more</Button></Link>,
     },
     {
         id: 13,
         img: '/article13.webp',
         header: <p className="text-[18px] leading-[21px]">Overcoming overfitting in image cl<br/>assification using data augmentation</p>,
         slideText: 'Imagine you have trained an image classification model whose performance seems a bit poor—did you... know there’s more you can d',
         button: <Link href="https://medium.com/cometheartbeat/overcoming-overfitting-in-image-classification-using-data-augmentation-9858c5cee986" as="https://medium.com/cometheartbeat/overcoming-overfitting-in-image-classification-using-data-augmentation-9858c5cee986"><Button>Read more</Button></Link>,
     },
     {
         id: 14,
         img: '/article14.webp',
         header: <p className=" text-[22px] leading-[42px]">Augmented Learning- The AI <br/> we desire.</p>,
         slideText: 'Its so fundamental today that so many of us think of the fact that there is so much hype in this ...rging field of technology; but the truth be told, its not an hype, its the fact. Its the fact that today’s machine hav',
         button: <Link href="https://medium.com/@elishatofunmi/augmented-learning-the-ai-we-desire-4334f0058f1a" as="https://medium.com/@elishatofunmi/augmented-learning-the-ai-we-desire-4334f0058f1a"><Button>Read more</Button></Link>,
     },
     {
         id: 15,
         img: '/article15.webp',
         header: <p className=" text-[20px] leading-[24px]">Transfer Functions for Machine <br/> Learning, Simplified</p>,
         slideText: 'Introduction to Transfer Functions This write up is an excerpt from my recent research on transf... functions and machine learning operations. Throughout this post, I’ll basically be establishing the core',
         button: <Link href="https://medium.com/cometheartbeat/transfer-functions-for-machine-learning-simplified-eff2fddd133b" as="https://medium.com/cometheartbeat/transfer-functions-for-machine-learning-simplified-eff2fddd133b"><Button>Read more</Button></Link>,
     },
     {
         id: 16,
         img: '/article16.webp',
         header: <p className="text-[19px] leading-[21px]">Low level TensorFlow for classifi <br/>cation problems (Titanic).</p>,
         slideText: 'Hello everyone, I wanna believe you have been finding the series on TensorFlow useful. Check out... previous articles on fundamentals ',
         button: <Link href="https://medium.com/@elishatofunmi/low-level-tensorflow-for-classification-problems-titanic-2a56f3255ff0" as="https://medium.com/@elishatofunmi/low-level-tensorflow-for-classification-problems-titanic-2a56f3255ff0"><Button>Read more</Button></Link>,
     },
     {
         id: 17,
         img: '/article17.webp',
         header: <p className="text-[16.5px] leading-[19px]">Low level TensorFlow for regression <br/> problems (house pricing).</p>,
         slideText: 'Hello everyone, I wanna believe you have been finding my articles useful for your programming ex...ises, on Fundamentals of',
         button: <Link href="https://medium.com/@elishatofunmi/low-level-tensorflow-for-regression-problems-house-pricing-63cf0785a59" as="https://medium.com/@elishatofunmi/low-level-tensorflow-for-regression-problems-house-pricing-63cf0785a59"><Button>Read more</Button></Link>,
     },
     {
         id: 18,
         img: '/article18.webp',
         header: <p className="leading-[26px]">Optimizer, losses and activation <br/> functions in fully connected ne <br/>ural networks.</p>,
         slideText: 'HEvery neural network built today works on algorithms that are mathematically proven to be the b... solution to a certain problem',
         button: <Link href="https://medium.com/@elishatofunmi/optimizer-losses-and-activation-functions-in-fully-connected-neural-networks-e1958bc66121" as="https://medium.com/@elishatofunmi/optimizer-losses-and-activation-functions-in-fully-connected-neural-networks-e1958bc66121"><Button>Read more</Button></Link>,
     },
     {
         id: 19,
         img: '/article19.webp',
         header: <p className="text-[22px] leading-[40px]">Fundamentals of TensorFlow <br/> (Low Level)</p>,
         slideText: 'This series of tutorial makes you understand the fundamental applications of TensorFlow, how you ... build your own neural network using TensorFlow. You can download or have access to the',
         button: <Link href="https://medium.com/@elishatofunmi/fundamentals-of-tensorflow-low-level-629bcfa17586" as="https://medium.com/@elishatofunmi/fundamentals-of-tensorflow-low-level-629bcfa17586"><Button>Read more</Button></Link>,
     },
     {
         id: 20,
         img: '/article20.webp',
         header: <p className=" text-[18px] leading-[22px]">Definition of machine intellige <br/>nce in simple terms with respect <br/> to nature</p>,
         slideText: 'There has been so many discussions regarding the conceptual knowledge of what Artificial intellig... (AI) is all about. Let me star',
         button: <Link href="https://medium.com/@elishatofunmi/definition-of-machine-intelligence-in-simple-terms-with-respect-to-nature-6600988af795" as="https://medium.com/@elishatofunmi/definition-of-machine-intelligence-in-simple-terms-with-respect-to-nature-6600988af795"><Button>Read more</Button></Link>,
     },
     {
         id: 21,
         img: '/article21.webp',
         header: <p className=" text-[19px] leading-[22px]">Baseline Titanic challenge Solu<br/> tion (from decision to prediction)</p>,
         slideText: 'Data Description/ Overview The titanic challenge competition is a simple use of machine learning... to create a model that predicts which',
         button: <Link href="https://medium.com/@elishatofunmi/baseline-titanic-challenge-solution-from-decision-to-prediction-e39a735a36cf" as="https://medium.com/@elishatofunmi/baseline-titanic-challenge-solution-from-decision-to-prediction-e39a735a36cf"><Button>Read more</Button></Link>,
     },
];


export const projects: Project[] = [
    {
        id: 1,
        img: '/system_football.png',
        header: 'Py Football',
        text: 'An AI sport analytics platform that enable players\n' +
            'generate stats and insights to ace their game.',
        button: <Link href="https://github.com/elishatofunmi/pyfootball" as="https://github.com/elishatofunmi/pyfootball"> <Button>Explore</Button></Link>,
    },
    {
        id: 2,
        img: '/systemjif.png',
        header: 'Robonet',
        text: '2D- RL Environment to train self navigating robots.',
        button: <Link href="https://github.com/rectlabs/robonet" as="https://github.com/rectlabs/robonet"><Button>Explore</Button></Link>,
    },
    {
        id: 3,
        img: '/systemgif3.png',
        header: 'Roboobstacle',
        text: 'Training a Robotic Agent to learn how to avoid obstacles.',
        button: <Link href="https://github.com/rectlabs/roboobstacle" as="https://github.com/rectlabs/roboobstacle"><Button>Explore</Button></Link>,
    },
    {
        id: 4,
        img: '/systemgif4.png',
        header: 'Pytennis',
        text: 'A reinforcement learning based tennis game - Using Dual-DQNs',
        button: <Link href="https://github.com/elishatofunmi/pytennis-Discrete-Mathematics-Approach-" as="https://github.com/elishatofunmi/pytennis-Discrete-Mathematics-Approach-"><Button>Explore</Button></Link>,
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
        button: <Link href="https://rectvision.com" as="https://rectvision.com"><Button>Explore</Button></Link>,
    },
    {
        id: 2,
        img: '/product2.png',
        header: 'SynX',
        text: 'A platform that enable organizations and individuals access \n' +
            'to quality synthetic data.',
        button:  <Link href="https://usesynx.com" as="https://usesynx.com"><Button>Explore</Button></Link>,
    },
    {
        id: 3,
        img: '/product3.png',
        header: 'RectSports',
        text: 'An AI  sport analytics platform that enable players, coaches \n' +
            'generate stats and insights to ace their game.',
        button:  <Link href="https://gettrackus.com" as="https://gettrackus.com"><Button>Explore</Button></Link>,
    },
    {
        id: 4,
        img: '/product4.png',
        header: 'Firstwears',
        text: 'A platform that enable users access to quality wears from \n' +
            'their comfort zones with short delivery period.',
        button:  <Link href="https://getfirstwears.com" as="https://getfirstwears.com"><Button>Explore</Button></Link>,
    },


]
