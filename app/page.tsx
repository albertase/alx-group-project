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

export default function Home() {
  return (
    <main className="">
        <Head>
            <link rel="icon" href="" />
        </Head>
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
