import { Ubuntu } from 'next/font/google'; 
import { Merriweather } from 'next/font/google';

export const heading = Merriweather({ weight: "700", subsets: ['latin'] });
export const subheading = Merriweather({ weight: "300", subsets: ['latin'] });

export const paragraph = Ubuntu({ weight: ['300', '400', '700'], subsets: ['latin'] });
