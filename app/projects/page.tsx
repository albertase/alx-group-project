import Project from "@/components/Project/Project"
import React from "react"
import Navbar from "@/components/Navbar/Navbar";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import Footer from "@/components/Footer/Footer";


const Projects = () => {
    return (
        <div>
            <Navbar/>
            <Project/>
            <NewsLetter/>
            <Footer/>
        </div>
    )
}


export default Projects