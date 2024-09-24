"use client";
import React, { useEffect, useState } from 'react';
import { useSpring, animated } from "@react-spring/web";
import { FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiAxios, SiDjango } from 'react-icons/si';

const skills = [
    { name: 'Python', icon: <FaPython size={40} /> },
    { name: 'Django', icon: <SiDjango size={40} /> },
    { name: 'HTML', icon: <FaHtml5 size={40} /> },
    { name: 'CSS', icon: <FaCss3Alt size={40} /> },
    { name: 'JavaScript', icon: <FaJsSquare size={40} /> },
    { name: 'React', icon: <FaReact size={40} /> },
    { name: 'Next.js', icon: <SiNextdotjs size={40} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} /> },
    { name: 'Axios', icon: <SiAxios size={40} /> },
];

const Page = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true); // Trigger the animations after the component mounts
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#4e4e9f] to-[#1a1a2e] text-white">
            <h1 className="text-4xl font-bold mb-6">Skills</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => {
                    const springProps = useSpring({
                        opacity: show ? 1 : 0, 
                        transform: show ? 'translateY(0)' : 'translateY(20px)', 
                        config: { duration: 500 },
                        delay: index * 100,
                    });

                    return (
                        <animated.div 
                            key={index} 
                            style={springProps} 
                            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        >
                            {skill.icon}
                            <h2 className="mt-2 text-lg font-semibold text-[#f9c74f]">{skill.name}</h2>
                        </animated.div>
                    );
                })}
            </div>
        </div>
    );
}

export default Page;
