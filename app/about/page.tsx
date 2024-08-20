'use client';

import { heading } from "../ui/fonts";
import Image from "next/image";

import profilePic from '@/public/about/profile.jpg'
import webDevelopmentCertificate from '@/public/about/web-development.jpg'
import webComputerCertificate from '@/public/about/web-computer-programming.jpg'
import cs50Certificate from '@/public/about/CS50x.png';

export default function Page() {
    return (
        <div>
            <div className="py-8 sm:px-8">
                <h2 className={`${heading.className} text-xl sm:text-2xl md:text-4xl text-center`}>About Me</h2>
                <div className="pt-8 sm:flex p-6 sm:justify-between sm:gap-8 sm:items-center">
                    <Image
                        className="
                            mx-auto
                            h-auto
                            w-[300px]
                            md:w-[360px]
                            rounded-tr-[30px]
                            rounded-bl-[30px]
                            filter
                            grayscale
                        "
                        src={profilePic} 
                        alt="Lucas Gomes Araujo's profile picture"
                    />
                    <div>
                        <p className="py-2 md:text-lg">Hello there! Welcome to my corner of the internet. I’m Lucas Gomes Araujo — a Software Development student at Brigham Young University Idaho, currently working towards my Bachelor of Science degree.</p>
                        <p className="py-2 md:text-lg">Originally hailing from the vibrant lands of Brazil, I’ve been calling the UK home since 2021.</p>
                        <p className="py-2 md:text-lg">In 2022, I tied the knot with the most amazing person on Earth (yes, I’m completely biased, but it’s true). Alongside my studies and spending time with my family, I’ve been honing my people skills as a receptionist at a hotel in central London. Before that, I shared my love for music as a tutor at a local music school and helped others master the art of English as a second language.</p>
                        <p className="py-2 md:text-lg">When I’m not knee-deep in code or welcoming guests, you’ll find me lost in a fantasy novel (love to hear some recommendations), jamming out to some tunes, battling it out in video games, or exploring new places with my wife (travel tips are not just welcome, they’re essential!)</p>
                        <p className="py-2 md:text-lg">Feel free to explore my work, and if you fancy a chat, don’t hesitate to reach out!</p>
                    </div>
                </div>
            </div>
            <div className="mt-2 border-2 border-dashed border-b-black"></div>
            <div className="py-8 sm:px-8">
                <h2 className={`${heading.className} pt-6 text-xl sm:text-2xl md:text-4xl text-center`}>Education</h2>
                <div className="pt-8 flex flex-col sm:flex-row p-6 justify-center sm:gap-8 items-center">
                    <div>
                        <h3 className={`${heading.className} text-lg sm:text-xl md:text-2xl`}>Web Development Certificate - Brigham Young University Idaho</h3>
                        <p className="md:text-xl pt-6">Learning Outcomes:</p>
                        <ul className="md:text-lg p-6 list-disc">
                            <li>Demonstrated proficiency in designing and creating relational databases.</li>
                            <li>Implemented data validation (client-side and server-side) in preparation for using relational databases with CRUD operations.</li>
                            <li>Developed, documented, and deployed a secure REST API that performs CRUD operations on a NoSQL database.</li>
                            <li>Designed, tested, and deployed web applications using Next.js, PostgreSQL, and TypeScript.</li>
                            <li>Demonstrated the skills of a productive team member, solving problems, collaborating and communicating clearly, fulfilling assignments, and meeting deadlines.</li>
                        </ul>
                    </div>
                    <Image
                        className="
                        h-auto
                        w-[300px]
                        md:w-[400px]
                        border-black
                        border-[1px]
                        rounded-lg
                        hover:cursor-pointer
                        "
                        src={webDevelopmentCertificate} 
                        alt="Web Development BYUI Certificate"
                        onClick={
                            () => {
                                open(webDevelopmentCertificate.src, '_self')
                            }
                        }
                    />
                </div>
                <div className="flex flex-col-reverse p-6 sm:flex-row sm:gap-8 items-center justify-center">
                    <Image
                        className="
                        h-auto
                        w-[300px]
                        md:w-[400px]
                        border-black
                        border-[1px]
                        rounded-lg
                        hover:cursor-pointer
                        "
                        src={webComputerCertificate} 
                        alt="Web Computer Programming BYUI Certificate"
                        onClick={
                            () => {
                                open(webComputerCertificate.src, '_self')
                            }
                        }
                    />
                    <div className="">
                        <h3 className={`${heading.className} text-lg sm:text-xl md:text-2xl`}>Web and Computer Programming Certificate - Brigham Young University Idaho</h3>
                        <p className="md:text-xl pt-6">Learning Outcomes:</p>
                        <ul className="md:text-lg p-6 list-disc">
                            <li>Exhibited the ability to apply new technology and techniques.</li>
                            <li>Developed proficiency in Python, HTML/CSS, C#, and JavaScript.</li>
                            <li>Effectively converted software requirements into code.</li>
                            <li>Applied principles of programming and design.</li>
                            <li>Honed strong design and problem-solving skills.</li>
                            <li>Demonstrated strong communication and interpersonal skills.</li>
                        </ul>
                    </div>
                    
                </div>
                <div className="flex flex-col sm:flex-row p-6 justify-center sm:gap-8 items-center">
                    <div>
                        <h3 className={`${heading.className} text-lg sm:text-xl md:text-2xl`}>CS50 Introduction to Computer Science Certificate - Harvard Online</h3>
                        <p className="md:text-xl pt-6">Learning Outcomes:</p>
                        <ul className="md:text-lg p-6 list-disc">
                            <li>Honed skills in programming languages such as C, Python, and SQL.</li>
                            <li>Learn how to think algorithmically and solve problems efficiently.</li>
                            <li>Develop knowledge in a variety of topics including abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development.</li>
                        </ul>
                    </div>
                    <Image
                        className="
                        h-auto
                        w-[310px]
                        md:w-[600px]
                        hover:cursor-pointer
                        "
                        src={cs50Certificate} 
                        alt="CS50x Certificate"
                        onClick={
                            () => {
                                open(cs50Certificate.src, '_self')
                            }
                        }
                    />
                </div>
            </div>
        </div>
    );
}