import React, { useState } from 'react';
import { client } from '@/app/utils/client';
import { Endpoint } from '@/app/utils/endpoint';

const NewsLetter: React.FC = () => {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [isSubscribing, setIsSubscribing] = useState(false);


    const validateEmail = (email: string) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const subscribeUser = async () => {
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        try {
            setIsSubscribing(true)
            const payload = {
                email,
                full_name: 'none',
            };
            const res = await client(Endpoint.subscription, payload, {
                method: 'POST',
            });

            setIsSubscribing(false)
            console.log({ res });

            setFullName('');
            setEmail('');
            setError('');
            setSuccess(true);
        } catch (error: any) {
            console.error('Error sending message:', error);
            setIsSubscribing(false)
            if (error instanceof Error && error.message) {
                try {
                    const errorData = JSON.parse(error.message);
                    if (errorData.message) {
                        setError(errorData.message);
                    } else {
                        setError(
                            'An error occurred while sending the message. Please try again.'
                        );
                    }
                } catch (parseError) {
                    setError(
                        'An error occurred while sending the message. Please try again.'
                    );
                }
            } else {
                setError('An error occurred while sending the message. Please try again.');
            }
        }
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        setError('');
        setSuccess(false);
    };

    const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(event.target.value);
        setError('');
        setSuccess(false);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        subscribeUser();
    };

    return (
        <div className="p-0 md:p-12 bg-gray-100">
            <div className="relative bg-gray-100 w-full h-[390px] md:h-[350px]">
                <div className="absolute bg-[#E0D5DD] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-lg w-4/5 p-5 md:w-1/2 md:h-5/6 lg:w-1/2">
                    <div className="flex flex-col gap-4">
                        <h1 className="Zilla_Slab_700 text-[29px] leading-[34.8px] text-center font-bold m-2">
                            Never miss an update from me
                        </h1>
                        <p className="Montserrat text-[17px] leading-[20.72px] text-center text-sm font-[#0B0B0B]">
                            Know more about the latest industry trends in Artificial Intelligence
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-evenly items-center mt-10 w-full">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-inherit placeholder:text-black placeholder:text-lg md:w-3/4 p-2 mx-2 my-2 md:my-0 border border-[#585151] outline-none rounded-xl"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full bg-inherit placeholder:text-black placeholder:text-sm md:w-3/4 p-2 mx-2 my-2 md:my-0 border border-[#585151] outline-none rounded-xl hidden"
                            value={fullName}
                            onChange={handleFullNameChange}
                        />
                        <button type="submit" className="px-8 py-2 text-white text-[20px] rounded-xl bg-[#585151] md:w-auto">
                            {isSubscribing ? "Subscribing..." : "Subscribe"}
                        </button>
                    </form>
                    {error && <p className="text-red-500 text-[20px] mt-2 text-center">{error}</p>}
                    {success && <p className="text-green-500 text-[20px] mt-2 text-center">Subscription successful!</p>}
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
