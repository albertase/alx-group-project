'use client'
import React from "react"
import Navbar from "@/components/Navbar/Navbar";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import Footer from "@/components/Footer/Footer";
import Product from "@/components/Product/Product";
import HeadComponent from "@/components/SeoComp/HeadComponent";


const Products = () => {
    const pageTitle = "Products Page";
    const pageDescription = "This is Products Page of Ukaegbu Albert's Portfolio";
    const pageCanonical = "https://albertikechukwu-portfolio.vercel.app/products";
    return (
        <div>
            <HeadComponent
                title={pageTitle}
                description={pageDescription}
                canonical={pageCanonical}
            />
            <Navbar/>
            <Product/>
            <NewsLetter/>
            <Footer/>
        </div>
    )
}


export default Products