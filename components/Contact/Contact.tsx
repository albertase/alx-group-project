import React, { useState } from "react";
import Link from "next/link";
import { client } from "@/app/utils/client";
import { Endpoint } from "@/app/utils/endpoint";

const Contact: React.FC = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        if (!fullName || !email || !message) {
            setError("Please fill in all fields.");
            return false;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return false;
        }

        setError("");
        return true;
    };

    const validateEmail = (email: string) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const sendMessage = async () => {
        if (!validateForm()) {
            return;
        }

        try {
            setIsSubmitting(true);

            const payload = {
                email,
                message,
                full_name: fullName,
            }
            const res = await client(Endpoint.contactUs, payload, {
                method: "POST",
            });

            setIsSubmitting(false);

            console.log({ res });

            setFullName("");
            setEmail("");
            setMessage("");
            setError("");
            setSuccess(true);

        } catch (error: any) {
            console.error("Error sending message:", error);
            setError(`An error occurred while sending the message. Please try again. Error: ${error.message}`);
            setIsSubmitting(false);
        }
    };

    const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(event.target.value);
        setError("");
        setSuccess(false);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        setError("");
        setSuccess(false);
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
        setError("");
        setSuccess(false);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        sendMessage();
    };

    return (
        <div className="grid bg-gray-100 grid-cols-1 py-24 sm:grid-cols-2 h-full w-full px-8">
            <div className="">
                <img className="w-full h-auto object-cover" src="/mentorship.png" alt="Contact Picture" />
            </div>

            <div className="bg-gray-100 flex flex-col justify-center">
                <div className="text-[#1D1C1C] px-8 flex flex-col gap-6">
                    <h1 className="Zilla_Slab_contact text-[45px] leading-[60px]">Get in Touch !</h1>
                    <p className="Montserrat_contact text-[22px] leading-[37px]">
                        I’m always interested in hearing about new projects and opportunities, fill the form below or click the
                        social media icons below to reach out to me.
                    </p>
                </div>
                <br />
                <div className="flex gap-4 px-8">
                    <Link href="https://www.linkedin.com/in/elishatofunmi/" as="https://www.linkedin.com/in/elishatofunmi/">
                        <img src="/contact_linkedin.png" alt="Linked-in" className="w-10 h-10 rounded-full" />
                    </Link>
                    <Link href="https://twitter.com/elishatofunmi" as="https://twitter.com/elishatofunmi">
                        <img src="/contact_twitter.png" alt="Twitter" className="w-12 h-12 rounded-full" />
                    </Link>
                    <Link href="mailto:elishatofunmi@gmail.com">
                        <img src="/contact_email.png" alt="Email" className="w-10 h-10 rounded-full" />
                    </Link>
                </div>
                <form onSubmit={handleSubmit} className="w-full mx-auto rounded-lg bg-gray-100 md:p-8 px-8">
                    <div className="flex flex-col text-[20px] text-black py-2">
                        <input
                            className="rounded-lg mt-2 p-4 placeholder:text-black placeholder:text-[20px] focus:outline-none border-2 border-[#C3C2D2]"
                            type="text"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={handleFullNameChange}
                        />
                    </div>
                    <div className="flex flex-col text-[20px] text-black py-2">
                        <input
                            className="p-4 rounded-lg mt-2 placeholder:text-black placeholder:text-[20px] focus:outline-none border-2 border-[#C3C2D2]"
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="flex flex-col text-[20px] text-black py-2">
            <textarea
                name="message"
                id="message"
                placeholder="Your Message..."
                className="focus:outline-none border-2 placeholder:text-black placeholder:text-[20px] border-[#C3C2D2] rounded-lg p-8"
                value={message}
                onChange={handleMessageChange}
            />
                    </div>
                    <div className="relative">
                        <button className="my-5 py-4 px-20 bg-[#585151] text-white font-semibold rounded-lg"> {isSubmitting ? "Sending..." : "Submit"}</button>
                        <img src="/contact_send.png" alt="" className="absolute top-9 left-40" />
                    </div>
                    {error && <p className="text-red-500 text-[20px] mt-2 text-center">{error}</p>}
                    {success && <p className="text-green-500 text-[20px] mt-2 text-center">Message sent successfully!</p>}
                </form>
            </div>
        </div>
    );
};

export default Contact;