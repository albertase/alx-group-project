'use client'
import About from "@/components/About/About"
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import {NextSeo} from "next-seo";
import React from 'react';
import HeadComponent from "@/components/SeoComp/HeadComponent";


const AboutPage = () => {

    const pageTitle = "About Page";
    const pageDescription = "This is About Page of Ukaegbu Albert's Portfolio";
    const pageCanonical = "https://albertikechukwu-portfolio.vercel.app/about";
    return (
        <div>
            <HeadComponent
                title={pageTitle}
                description={pageDescription}
                canonical={pageCanonical}
            />
            <Navbar/>
            <About/>
            <NewsLetter/>
            <Footer/>
        </div>
    )
}

export default AboutPage


