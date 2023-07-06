'use client'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProfileImage from "@/components/Profile/ProfileImage";
import NewsLetter from "@/components/NewsLetter/NewsLetter"
import ProfileDetailed from "@/components/Profile/ProfileDetailed";
import MyWork from "@/components/MyWork/MyWork";
import Slide from "@/components/Slider/Slide";
import Mentorship from "@/components/Mentorship/Mentorship";
import Head from "next/head";
import {Metadata} from "next";
import {NextSeo} from "next-seo";
import HeadComponent from "@/components/SeoComp/HeadComponent";



export default function Home() {
    const pageTitle = "Landing Page";
    const pageDescription = "This is Landing Page of Odemakinde Elisha";
    const pageCanonical = "https://elishatofunmi.com/home";
    const pageImage = "https://elishatofunmi.com/Elisha_bg.svg";
    const twitterUsername = "@elishatofunmi";
  return (
    <main className="">
        <HeadComponent
            title={pageTitle}
            description={pageDescription}
            canonical={pageCanonical}
        />
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
                cardType: 'My background image',
            }}
        />
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
  )
}
