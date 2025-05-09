import Image from "next/image";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"]
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"]
});


export default function Home() {
  return (
    <>
      <section className="h-screen w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 aspect-video relative">
          <Image
            src="/assets/images/DavidIsAdventurous.webp"
            alt="Picture of David Monterrosa"
            fill
            sizes="(max-width: 768px) 100vw"
            // className="object-cover mask-linear-115 mask-linear-from-55% mask-linear-to-70%"
            className="object-cover md:mask-radial-[100%_100%] md:mask-radial-from-60% md:mask-radial-at-left"
          />
        </div>
        <article className="w-full md:w-1/2 flex items-center justify-center text-center">
          <div className="flex flex-col gap-4 md:pe-10">
            <h1 className={`lg:text-6xl md:text-4xl text-2xl font-bold ${playfairDisplay.className}`}>David Monterrosa</h1>
            <h2 className={`md:text-xl text-lg ${sourceSans3.className}`}>Full-Stack Software Developer and Engineer.</h2>
            <div className="flex justify-center ">
                <Button variant="ghost" aria-label="Open David Monterrosa's Github" className="bg-[00000000] hover:bg-[00000000]">
                  <Link href="https://github.com/davidmonterrosa" target="_blank" rel="noopener noreferrer" className="mt-4 cursor-pointer">
                    <Image
                      className="dark:invert"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                      alt="Github Icon"
                      width={60}
                      height={60}
                    />
                  </Link>
                </Button>

                <Button variant="ghost" aria-label="Open David Monterrosa's LinkedIn" className="bg-[00000000] hover:bg-[00000000]">
                  <Link href="/assets/documents/DavidMonterrosaResume.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 cursor-pointer">
                    <Image
                      className="dark:invert"
                      src="/assets/images/Filetext.svg"
                      alt="File Icon"
                      width={60}
                      height={60}
                    />
                  </Link>
                </Button>

                <Button aria-label="Open David Monterrosa's LinkedIn" className="bg-[00000000] hover:bg-[00000000]">
                  <Link href="https://www.linkedin.com/in/david-monterrosa-dev/" target="_blank" rel="noopener noreferrer" className="mt-4 cursor-pointer">
                    <Image
                      className="dark:invert"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
                      alt="LinkedIn Icon"
                      width={60}
                      height={60}
                    />
                  </Link>
                </Button>

            </div>
          </div>
        </article>
      </section>

      <main id="main-content" className="bg-white dark:bg-black text-foreground px-6 md:px-12 max-w-7xl mx-auto space-y-24 pt-10">

        {/* About Section */}
        <section id="about" className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <h2 className={`text-4xl ${playfairDisplay.className} font-bold`}>About Me</h2>
            <p className="text-lg leading-relaxed">
              I&rsquo;m a software developer and UC Davis alumnus with a background in cognitive science and a passion for building thoughtful, full-stack web applications. With over 1,000 hours of project-based training, I specialize in modern frameworks and tools like React, TypeScript, Next.js, Tailwind CSS, Azure, and Vercel.
            </p>
            <p>
              I focus on creating scalable, accessible, and user-centered solutions—and I&rsquo;m especially interested in the practical use of AI and automation to solve everyday problems and streamline workflows.
              Fluent in English and Spanish
            </p>
          </div>
          <div className="md:w-1/2 flex place-content-center aspect-square ">
            <Image
            src="/icon.jpeg"
            alt="Mountain Rose Logo"
            width={291}
            height={291}
            className="rounded-full shadow-lg object-cover"
          />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-8">
          <h2 className={`text-4xl ${playfairDisplay.className} font-bold text-center`}>
            Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {[
              { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
              { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
              { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
              { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
              { name: 'Github', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
              { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
              { name: 'C Sharp', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
              { name: 'Microsoft SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
              { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
              { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
              { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
              { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
            ].map(({ name, icon }) => (
              <div
                key={name}
                className="group bg-muted rounded-xl p-6 shadow transition-all transform hover:scale-105 hover:bg-accent duration-300"
              >
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Image
                    src={`${icon}`}
                    alt={`${name} icon`}
                    width={60}
                    height={60}
                    className="w-12 h-12 grayscale group-hover:grayscale-0 transition duration-300"
                  />
                  <span className="font-source font-semibold">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Projects Section */}
        <section id="projects" className="space-y-12">
          <h2 className={`text-4xl ${playfairDisplay.className} font-bold text-center`}>
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Study Buddies',
                thumbnail: '/assets/images/StudyBuddiesWebApp.webp',
                description: 'A collaborative study platform with real-time chat. (In Progress)',
                github: 'https://github.com/davidmonterrosa/study-buddies-frontend.git',
                vercel: 'https://study-buddies-frontend-seven.vercel.app/',
              },
              {
                title: 'Weather App',
                thumbnail: '/assets/images/WeatherApp.webp',
                description: 'Built in NextJs uses openweather Api (Side Project)',
                github: 'https://github.com/davidmonterrosa/dm-weather-app.git',
                vercel: 'https://dm-weather-app.vercel.app/',
              },
              {
                title: 'Pokemon API APP',
                thumbnail: '/assets/images/ChronoLog.webp',
                description: 'Upcoming Project to be done using Python used to automate tracking of billable hours and improve workflows.',
                github: 'null',
                vercel: 'null',
              },
              {
                title: 'ChronoLog | Python Time Tracker',
                thumbnail: '/assets/images/ChronoLog.webp',
                description: 'Upcoming Project to be done using Python used to automate tracking of billable hours and improve workflows.',
                github: 'null',
                vercel: 'null',
              },
            ].map((project, index) => (
              <div
                key={index}
                className={`rounded-xl  shadow-lg bg-muted hover:scale-105 transition-transform ${sourceSans3.className}`}
              >
                <Image
                  src={`${project.thumbnail}`}
                  alt={`${project.title} thumbnail`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-48"
                />

                <div className="p-4 flex flex-col h-full">
                  <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex gap-4 mt-4 ">
                  <Button className="p-8 bg-[00000000] hover:bg-[00000000] hover:scale-125 transition-transform">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                      >
                        GitHub
                      </Link>
                    </Button>
                    <Button className="p-8 bg-[00000000] hover:bg-[00000000] hover:scale-125 transition-transform">
                      <Link
                        href={project.vercel}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black px-4 py-2 rounded-md border hover:bg-gray-100 transition-colors"
                      >
                        Live Site
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-muted pt-10 pb-6 text-center text-sm text-muted-foreground">
          <div className="flex justify-center gap-6 mb-4">
            <Link href="https://github.com/davidmonterrosa" aria-label="GitHub" target="_blank" rel="noopener noreferrer">GitHub</Link>
            <Link href="https://www.linkedin.com/in/david-monterrosa-dev/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
            <Link href="mailto:dmonterrosa99@gmail.com" aria-label="Email">Email</Link>
            <Link href="tel:2092927846" aria-label="Phone">Call</Link>
          </div>
          <p>© {new Date().getFullYear()} David Monterrosa. All rights reserved.</p>
        </footer>

      </main>
    </>
  );
}
