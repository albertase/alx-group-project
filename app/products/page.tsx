'use client'
import React from "react"
import Navbar from "@/components/Navbar/Navbar";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import Footer from "@/components/Footer/Footer";
import Product from "@/components/Product/Product";
import HeadComponent from "@/components/SeoComp/HeadComponent";


const Products = () => {
    const pageTitle = "Products Page";
    const pageDescription = "This is Products Page of Odemakinde Elisha's Portfolio";
    const pageCanonical = "https://elishatofunmi.com/products";
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