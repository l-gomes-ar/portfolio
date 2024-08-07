'use client'

import Image from "next/image";
import profilePic from '@/public/profile.jpg';
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';
import { heading } from "../fonts";
import { createTheme, ThemeProvider } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        black: Palette['primary'];
    }

    interface PaletteOptions {
        black?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        black: true;
    }
}

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
        <div className="p-6 sm:gap-8 sm:flex sm:justify-around sm:items-center">
            {/* <Link href='#'> */}
                <Image
                    className="
                        h-auto
                        w-[300px]
                        md:w-[360px]
                        rounded-tr-[30px]
                        rounded-bl-[30px]
                        shadow-solid                    
                    " 
                    src={profilePic} 
                    alt="Lucas Gomes Araujo's profile picture"
                />
            {/* </Link> */}
            <div className="mt-6 sm:mt-0">
                <h2 className={`${heading.className} text-xl sm:text-2xl md:text-4xl`}>Welcome to my Portfolio!</h2>
                <p className="md:text-lg pt-2">My name is Lucas Gomes Araujo and I am a dedicated software developer currently pursuing a Bachelor of Science in Software Development at Brigham Young University Idaho. </p>
                <p className="md:text-lg pt-2">I am excited to apply my knowledge to create exceptional software solutions and contribute my skills to a collaborative environment where I can grow as a developer.</p>
                <p className="md:text-lg pt-2">Feel free to dive into my portfolio!</p>
                <div className="pt-4 flex flex-col sm:flex-row gap-2">
                    <ThemeProvider theme={theme}>
                        <Link href='#'>
                                <Button className="w-full" variant='contained' color="black">
                                    About Me
                                </Button>
                        </Link>
                        <Link href='#'>
                                <Button className="w-full" variant='outlined' color="black">
                                    Experience my Projects
                                </Button>
                        </Link>
                        <Link href='#'>
                            <Button className="w-full" variant="outlined" color="black">
                                Get in Touch
                            </Button>
                        </Link>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    );
}