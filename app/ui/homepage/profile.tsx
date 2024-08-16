'use client'

import Image from "next/image";
import profilePic from '@/public/profile.jpg';
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';
import { heading } from "../fonts";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        black: {
            main: '#000000',
            light: '#222222',
            dark: '#444444',
            contrastText: '#FFFFFF',
        }
    }
});

export default function Profile() {
    return (
        <ThemeProvider theme={theme}>
            <div className="py-2 px-2 sm:px-[5.5rem] sm:py-[5rem] sm:gap-8 sm:flex sm:justify-around sm:items-center">
                <Image
                    className="
                        mx-auto
                        h-auto
                        w-[300px]
                        md:w-[360px]
                        rounded-tl-[30px]
                        rounded-br-[30px]
                        sm:shadow-solid
                    "
                    src={profilePic} 
                    alt="Lucas Gomes Araujo's profile picture"
                />
                <div className="mt-6 sm:mt-0">
                    <h2 className={`${heading.className} text-xl sm:text-2xl md:text-4xl`}>Welcome to my Portfolio!</h2>
                    <p className="md:text-lg pt-2">My name is Lucas Gomes Araujo and I am a dedicated software developer currently pursuing a Bachelor of Science in Software Development at Brigham Young University Idaho. </p>
                    <p className="md:text-lg pt-2">I am excited to apply my knowledge to create exceptional software solutions and contribute my skills to a collaborative environment where I can grow as a developer.</p>
                    <p className="md:text-lg pt-2">Feel free to dive into my portfolio!</p>
                    <div className="pt-4 flex flex-col sm:flex-row gap-2">
                            <Button className="w-full" variant='contained' color="black" onClick={() => open('/about', '_self')}>
                                About Me
                            </Button>
                            <Button className="w-full" variant='outlined' color="black">
                                Experience my Projects
                            </Button>
                            <Button className="w-full" variant="outlined" color="black">
                                Get in Touch
                            </Button>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}