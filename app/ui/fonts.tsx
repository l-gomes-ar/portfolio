import { Merriweather, Dancing_Script, Ubuntu_Mono } from 'next/font/google';

export const heading = Merriweather({ weight: "700", subsets: ['latin'] });
export const subheading = Merriweather({ weight: "300", subsets: ['latin'] });

export const paragraph = Ubuntu_Mono({ weight: ['400', '700'], subsets: ['latin'] });

export const signature = Dancing_Script({ weight: '700', subsets: ['latin'] });
