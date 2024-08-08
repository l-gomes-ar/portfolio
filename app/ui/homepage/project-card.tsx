'use client';

import Image from "next/image";
import Button from "@mui/material/Button";
import placehold from '@/public/placehold.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { heading } from "../fonts";

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

export default function ProjectCard() {
    return (
        <ThemeProvider theme={theme}>
            <div className="
                w-[250px]
                sm:w-[324px]
                p-4
                sm:p-6
                flex
                flex-col
                gap-4
                justify-around
                items-center
                border-[2px]
                rounded-[10px]
                border-grey
            ">
                <Image 
                    className="
                        w-[150px]
                        h-[100px]
                        sm:w-[300px]
                        sm:h-[200px]
                    "
                    src={placehold}
                    alt="[project_name_here]"
                />
                <h3 className={`${heading.className} text-lg sm:text-xl md:text-2xl text-center`}>Project_Title_Here</h3>
                <p className="md:text-lg">
                    project_description_here
                </p>
                    <Button variant="outlined" color="black">
                        View Project
                    </Button>
            </div>
        </ThemeProvider>
    );
}