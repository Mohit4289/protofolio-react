"use client";
import React, { useEffect, useState } from 'react';
import { useSpring, animated } from "@react-spring/web";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactMe = () => {
    const [isVisible, setIsVisible] = useState(false);

    const springProps = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 500 },
    });

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <animated.div
            style={springProps}
            className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#4e4e9f] to-[#1a1a2e] text-white p-6  shadow-lg"
        >
            <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
            <div className="text-lg mb-4 text-center">
                <p>If you have any questions or want to connect, feel free to reach out!</p>
            </div>
            <div className="space-y-4">
                <div className="flex items-center">
                    <FaEnvelope className="mr-2 text-blue-400" />
                    <strong>Email:</strong>
                    <a href="mailto:srttiwari4289@gmail.com" className="text-blue-400 ml-2 hover:underline">srttiwari4289@gmail.com</a>
                </div>
                <div className="flex items-center">
                    <FaPhoneAlt className="mr-2 text-blue-400" />
                    <strong>Phone:</strong>
                    <span className="text-blue-400 ml-2">918855079554</span>
                </div>
                <div className="flex items-center">
                    <FaLinkedin className="mr-2 text-blue-400" />
                    <strong>LinkedIn:</strong>
                    <a href="https://www.linkedin.com/in/mohit-tiwari-1967b32a5" className="text-blue-400 ml-2 hover:underline" target="_blank" rel="noopener noreferrer">mohit-tiwari-1967b32a5</a>
                </div>
                <div className="flex items-center">
                    <FaGithub className="mr-2 text-blue-400" />
                    <strong>GitHub:</strong>
                    <a href="https://github.com/Mohit4289" className="text-blue-400 ml-2 hover:underline" target="_blank" rel="noopener noreferrer">github.com/Mohit4289</a>
                </div>
            </div>
        </animated.div>
    );
}

export default ContactMe;
