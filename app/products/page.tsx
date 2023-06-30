import React from "react"
import Navbar from "@/components/Navbar/Navbar";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import Footer from "@/components/Footer/Footer";
import Product from "@/components/Product/Product";


const Products = () => {
    return (
        <div>
            <Navbar/>
            <Product/>
            <NewsLetter/>
            <Footer/>
        </div>
    )
}


export default Products