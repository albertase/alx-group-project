'use client'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProfileImage from "@/components/Profile/ProfileImage";
import NewsLetter from "@/components/NewsLetter/NewsLetter"
import ProfileDetailed from "@/components/Profile/ProfileDetailed";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="mt-32">
        <ProfileImage />
        <ProfileDetailed/>
      </div>
      <NewsLetter/>
      <Footer />
    </main>
  )
}
