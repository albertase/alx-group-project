'use client'
import Project from "@/components/Project/Project"
import React from "react"
import Navbar from "@/components/Navbar/Navbar";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import Footer from "@/components/Footer/Footer";
import HeadComponent from "@/components/SeoComp/HeadComponent";


const Projects = () => {
    const pageTitle = "Projects Page";
    const pageDescription = "This is Projects Page of Ukaegbu Albert's Portfolio";
    const pageCanonical = "https://albertikechukwu-portfolio.vercel.app/projects";
    return (
        <div>
            <HeadComponent
                title={pageTitle}
                description={pageDescription}
                canonical={pageCanonical}
            />
            <Navbar/>
            <Project/>
            <NewsLetter/>
            <Footer/>
        </div>
    )
}


export default Projects