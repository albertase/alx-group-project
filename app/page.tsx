'use client'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProfileImage from "@/components/Profile/ProfileImage";
import NewsLetter from "@/components/NewsLetter/NewsLetter"
import ProfileDetailed from "@/components/Profile/ProfileDetailed";
import MyWork from "@/components/MyWork/MyWork";
import Slide from "@/components/Slider/Slide";
import Mentorship from "@/components/Mentorship/Mentorship";
import HeadComponent from "@/components/SeoComp/HeadComponent";
import { NextSeo } from 'next-seo';

export default function Home() {
    const pageTitle = "Landing Page";
    const pageDescription = "This is the Landing Page of Odemakinde Elisha";
    const pageCanonical = "https://elishatofunmi.com/home";
    const pageImage = "https://elishatofunmi.com/contact_pic.png";
    const twitterUsername = "@elishatofunmi";

    return (
        <>
            <NextSeo
                title={pageTitle}
                description={pageDescription}
                canonical={pageCanonical}
                openGraph={{
                    url: pageCanonical,
                    title: pageTitle,
                    description: pageDescription,
                    images: [
                        {
                            url: pageImage,
                            alt: pageTitle,
                        },
                    ],
                    site_name: "Odemakinde Elisha Portfolio",
                }}
                twitter={{
                    handle: twitterUsername,
                    site: twitterUsername,
                    cardType: 'summary_large_image',
                }}
            />
            <HeadComponent
                title={pageTitle}
                description={pageDescription}
                canonical={pageCanonical}
            />
            <main className="">
                <Navbar />
                <div className="mt-32">
                    <ProfileImage />
                    <ProfileDetailed/>
                    <MyWork/>
                    <Slide/>
                </div>
                <Mentorship/>
                <NewsLetter/>
                <Footer />
            </main>
        </>
    );
}