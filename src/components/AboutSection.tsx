"use client";
import Image from "next/image"
import { TextGenerateEffect } from './ui/text-generate-effect';
import { StickyScrollRevealDemo } from './StickyScrollRevealDemo';
const words = `Hello! I'm Vedant Mute, an engineering student with a passion for technology. Proficient in web development, Java programming, and AI enthusiast with expertise in data science. Excited to innovate and create through code. 
`;
const AboutSection = () => {
return (
    <>
    <section className="py-24">
        <div className="heading mx-auto lg:max-w-7xl w-full text-left  my-5 text-5xl py-5 border-b border-gray-700">About Me</div>
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex gap-16 flex-col md:flex-row md:items-center">
            <Image src="/user.png" width={1900} height={1200} alt="happy team work" className="w-full h-auto md:w-1/2 md:h-full object-cover rounded-lg order-2 md:order-1" />
            <div className="space-y-10 md:order-2">
                
               
                <TextGenerateEffect words={words} />
                <section className="py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-6">
            <div className="bg-white dark:bg-gray-950 shadow-lg shadow-gray-200/50 dark:shadow-transparent border border-gray-100/80 dark:border-gray-900/80 p-6 md:p-5 lg:p-6 rounded-lg flex flex-col justify-center gap-0.5 text-center text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white">
                    2yr.
                </span>
                <span>
                    Experience
                </span>
            </div>
            <div className="bg-white dark:bg-gray-950 shadow-lg shadow-gray-200/50 dark:shadow-transparent border border-gray-100/80 dark:border-gray-900/80 p-6 md:p-5 lg:p-6 rounded-lg flex flex-col justify-center gap-0.5 text-center text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white">
                    7+
                </span>
                <span>
                    Projects
                </span>
            </div>
            <div className="bg-white dark:bg-gray-950 shadow-lg shadow-gray-200/50 dark:shadow-transparent border border-gray-100/80 dark:border-gray-900/80 p-6 md:p-5 lg:p-6 rounded-lg flex flex-col justify-center gap-0.5 text-center text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white">
                    5
                </span>
                <span>
                    Deployed
                </span>
            </div>
            <div className="bg-white dark:bg-gray-950 shadow-lg shadow-gray-200/50 dark:shadow-transparent border border-gray-100/80 dark:border-gray-900/80 p-6 md:p-5 lg:p-6 rounded-lg flex flex-col justify-center gap-0.5 text-center text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white">
                    2
                </span>
                <span>
                    Clients
                </span>
            </div>
        </div>
    </section>
            </div>
        </div>
    </section>
    <div className="heading text-left  my-5 text-5xl py-5 border-b mx-auto lg:max-w-7xl w-full border-gray-700">My Skills</div>
      <StickyScrollRevealDemo />
    </>
)
}
 
export default AboutSection