'use client'
import Project from "@/components/Project/Project"
import React from "react"
import Navbar from "@/components/Navbar/Navbar";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import Footer from "@/components/Footer/Footer";
import HeadComponent from "@/components/SeoComp/HeadComponent";


const Projects = () => {
    const pageTitle = "Projects Page";
    const pageDescription = "This is Projects Page of Odemakinde Elisha's Portfolio";
    const pageCanonical = "https://elishatofunmi.com/projects";
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