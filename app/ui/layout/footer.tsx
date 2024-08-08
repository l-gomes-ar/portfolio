'use client';

import { signature, paragraph } from "../fonts";
import Link from "next/link";
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    return (
        <>
            <div className='text-center sm:flex sm:justify-center sm:items-baseline sm:gap-10 lg:gap-[9rem] mt-10 p-6 border-t-2 border-black text-lg'>
                <p className={`${signature.className} text-2xl`}>Lucas Gomes Araujo</p>
                <div className="mt-4 sm:mt-0 sm:text-start">
                    <p className="font-bold text-xl">About Me</p>
                    <ul className="text-gray-600 font-thin">
                        <li><Link href="#">Summary</Link></li>
                        <li><Link href="#">Resume</Link></li>
                    </ul>    
                </div>
                <div className="mt-4 sm:mt-0 sm:text-start">
                    <p className="font-bold text-xl">Projects</p>
                    <ul className="text-gray-600 font-thin">
                        <li><Link href='#'>Frontend</Link></li>
                        <li><Link href='#'>Backend</Link></li>
                        <li><Link href='#'>Full Stack</Link></li>
                    </ul>
                </div>
                <div className="mt-4 sm:mt-0">
                    <IconButton aria-label="email" onClick={() => open('mailto:lgaraujo022@gmail.com', '_self')}>
                        <EmailIcon className="text-black" fontSize="large" />
                    </IconButton>
                    <IconButton aria-label="linkedin" onClick={() => open('https://www.linkedin.com/in/lucas-gomes-araujo/', '_self')}>
                        <LinkedInIcon className="text-black" fontSize="large" />
                    </IconButton>
                    <IconButton aria-label="github" onClick={() => open('https://github.com/l-gomes-ar', '_self') }>
                        <GitHubIcon className="text-black" fontSize="large" />
                    </IconButton>
                </div>
            </div>
            <p className="text-center pb-6 md:text-lg">
                {`@${new Date().getFullYear()}`} | Lucas G. Araujo
            </p>
        </>
    );
}