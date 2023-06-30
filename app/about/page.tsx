import About from "@/components/About/About"
import Navbar from "@/components/Navbar/Navbar"
import React from "react"
import Footer from "@/components/Footer/Footer";
import NewsLetter from "@/components/NewsLetter/NewsLetter";


const AboutPage = () => {
    return (
        <div>
            <Navbar/>
            <About/>
            <NewsLetter/>
            <Footer/>

        </div>
    )
}

export default AboutPage


