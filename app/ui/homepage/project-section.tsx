'use client';

import { heading } from "../fonts";
import ProjectCard from "./project-card";
import { createTheme, ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";

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


export default function ProjectSection() {
    return (
        <ThemeProvider theme={theme}>
            <div className="p-6">
                <h2 className={`${heading.className} text-xl sm:text-2xl md:text-4xl text-center`}>Recent Projects</h2>
                <div className="mt-6">
                    <div className="flex flex-wrap gap-4 items-center justify-center">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                </div>
                    <Button className='block w-[200px] mx-auto mt-6' color="black" variant="contained">
                        View All
                    </Button>
            </div>
        </ThemeProvider>
    );
}