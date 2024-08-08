import Profile from "./ui/homepage/profile";
import ProjectSection from "./ui/homepage/project-section";

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

export default function Home() {
  return (
    <>
      <Profile />
      <div className="mt-2 border-2 border-b-black"></div>
      <ProjectSection />
    </>
  );
}
