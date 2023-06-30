import About from "@/components/About/About"
import Navbar from "@/components/Navbar/Navbar"
import React from "react"
import Footer from "@/components/Footer/Footer";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import Contact from "@/components/Contact/Contact";


const Contacts = () => {
    return (
        <div>
            <Navbar/>
            <br/>
            <br/>
            <br/>
            <Contact/>
            <NewsLetter/>
            <Footer/>

        </div>
    )
}

export default Contacts


