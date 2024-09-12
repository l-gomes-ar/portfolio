import { heading } from "../ui/fonts";

export default function Page() {
    return (
        <div className="py-8 sm:px-8">
            <h2 className={`${heading.className} text-xl sm:text-2xl md:text-4xl text-center`}>Contact Me</h2>
            <p className="mt-[2rem] mx-2 text-center text-md sm:text-xl md:text-2xl">
                Feel free to reach out if you'd like to discuss my portfolio, collaborate on a project, or just chat about the finer points of meme culture. I'm always up for a good laugh and a productive conversation. Or, if you're feeling particularly adventurous, you could try sending me a pigeon with a message tied to its leg. I'm not sure how reliable it would be, but it would definitely be a unique way to get in touch.
            </p>
            <div className="mx-2 my-8 p-8 border-2 border-black">
                <div className="mx-auto max-w-fit">
                    <p className="py-2 text-md sm:text-xl md:text-2xl">Email: <a className='font-bold' href="mailto:lgaraujo022@gmail.com">lgaraujo022@gmail.com</a></p>
                    <p className="py-2 text-md sm:text-xl md:text-2xl">Github: <a className='font-bold' href="https://github.com/l-gomes-ar">l-gomes-ar</a></p>
                    <p className="py-2 text-md sm:text-xl md:text-2xl">LinkedIn: <a className='font-bold' href="https://www.linkedin.com/in/lucas-gomes-araujo">lucas-gomes-araujo</a></p>
                </div>
            </div>
        </div>
    );
}