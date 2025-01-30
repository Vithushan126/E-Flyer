import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, Globe } from 'lucide-react';
import ContactImg from "../../assets/contact/contact.png";

const ContactPage = () => {
    const openingHours = [
        { day: 'Mon', hours: '9 : 00 AM - 11 : 00 PM' },
        { day: 'Tue', hours: '9 : 00 AM - 11 : 00 PM' },
        { day: 'Wed', hours: '9 : 00 AM - 11 : 00 PM' },
        { day: 'Thu', hours: '9 : 00 AM - 11 : 00 PM' },
        { day: 'Fri', hours: '9 : 00 AM - 11 : 00 PM' },
        { day: 'Sat', hours: '9 : 00 AM - 11 : 00 PM' },
        { day: 'Sun', hours: 'Closed', isClosed: true }
    ];

    return (
        <div>
            {/* Hero Image Section */}
            <div className="absolute inset-0 z-0 bg-opacity-5 h-[600px] w-full">
                <img
                    src={ContactImg}
                    alt="Luxury Pool"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>

            {/* Contact Information Section */}
            <div className="flex justify-center pt-[600px] bg-white">
                <div className="max-w-6xl w-full px-4">
                    <h1 className="text-[30px] font-medium text-[#004679] mt-8">Contact</h1>
                    <p className="text-[16px] text-[smokyGray] mt-4 mb-8">
                        This is how you get in touch with us
                    </p>

                    <div>
                        <h2 className="text-[20px] font-medium text-[smokyGray] mb-6">
                            Internet - Travel shop EFly
                        </h2>
                        <div className="text-[16px] text-[lightGray] space-y-2 mb-6 ">
                            <p className='hover:text-red'>Langstrasse 214, 8005 Zurich</p>
                            <p className='hover:text-red'>info@efly.ch</p>
                            <p className='hover:text-red'>+41 44 666 0606</p>
                        </div>

                        <div className=" flex flex-cols space-x-3 mb-8">
                            <h3 className="text-[16px] text-[smokyGray] mb-4">Opening Hours :</h3>
                            <div className="space-y-4">
                                {openingHours.map((item, index) => (
                                    <div key={index} className="flex items-center text-[smokyGray]">
                                        <span className="text-[16px] w-20 ">{item.day}</span>
                                        <span className={`"text-[16px] hover:text-red `}>{item.hours}</span>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div>
                            <h2 className="text-[20px] font-medium text-[smokyGray] mb-6">
                                Sri Lanka Telephone Service
                            </h2>
                            <p className="text-[16px] text-[lightGray] mb-8">
                                Langstrasse 214, 8005 Zurich
                            </p>

                            <div>
                                <h3 className="text-[20px] font-medium text-[smokyGray] mb-4">
                                    Social Media
                                </h3>
                                <div className="flex gap-[30px] text-socialmedia">
                                    <Facebook className="w-6 h-6 " />
                                    <Twitter className="w-6 h-6 ]" />
                                    <Youtube className="w-6 h-6 " />
                                    <Instagram className="w-6 h-6 " />
                                    <Globe className="w-6 h-6 " strokeWidth={1.5} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;