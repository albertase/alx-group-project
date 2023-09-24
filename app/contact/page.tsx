'use client'
import About from "@/components/About/About"
import Navbar from "@/components/Navbar/Navbar"
import React from "react"
import Footer from "@/components/Footer/Footer";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import Contact from "@/components/Contact/Contact";
import HeadComponent from "@/components/SeoComp/HeadComponent";


const Contacts = () => {
    const pageTitle = "Contact Page";
    const pageDescription = "This is Contact Page of Ukaegbu Albert's Portfolio";
    const pageCanonical = "https://albertikechukwu-portfolio.vercel.app/contact";
    return (
        <div>
            <HeadComponent
                title={pageTitle}
                description={pageDescription}
                canonical={pageCanonical}
            />
            <Navbar/>
            <br/>
            <br/>
            <br/>
            <Contact/>
            <div className="md:-mt-36 -mt-20">
                <NewsLetter/>
            </div>
            <Footer/>
        </div>
    )
}

export default Contacts


