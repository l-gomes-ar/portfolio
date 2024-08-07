import { heading, subheading } from '@/app/ui/fonts';

export default function Header() {
    return (
        <div className='p-6 text-center sm:flex sm:content-start gap-4 items-baseline border-b-2 border-black'>
            <h1 className={`${heading.className} text-2xl sm:text-3xl 2xl:text-4xl`}>
                Lucas Gomes Araujo  
            </h1>
            <p className={`${subheading.className} text-sm sm:text-lg 2xl:text-2xl text-gray-600`}>
                Software Developer Student
            </p>
        </div>
    );
}