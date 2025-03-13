import React from "react";
import ToggleTheme from "@/components/other/ToggleTheme";
import Image from "next/image";
import Link from "next/link";
import AA from "../../Public/AA.png";
import { Spotlight } from "../ui/Spotlightnew";
import { Spotlightt } from "../ui/Spotlightt";
import { FiBook } from "react-icons/fi";
import Footer from "@/components/other/Footer";
import {
  SiBehance,
  SiCodesandbox,
  SiDevdotto,
  SiDiscord,
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiMedium,
  SiPinterest,
  SiReddit,
  SiSnapchat,
  SiStackoverflow,
  SiSteam,
  SiX,
  SiYoutube,
} from "react-icons/si";

const links = [
  {
    icon: <FiBook className="text-zinc-300 w-6 h-6" />,
    title: "Blog",
    url: "#",
  },
  {
    icon: <SiYoutube className="text-zinc-300 w-6 h-6" />,
    title: "YouTube",
    url: "https://www.youtube.com/@AnshAjayMishraa",
  },
  {
    icon: <SiFacebook className="text-zinc-300 w-6 h-6" />,
    title: "Facebook",
    url: "https://www.facebook.com/ansh1503",
  },
  {
    icon: <SiLinkedin className="text-zinc-300 w-6 h-6" />,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/anshajaymishra",
  },
  {
    icon: <SiSteam className="text-zinc-300 w-6 h-6" />,
    title: "Steam",
    url: "https://steamcommunity.com/id/AnshAjayMishra/",
  },
  {
    icon: <SiInstagram className="text-zinc-300 w-6 h-6" />,
    title: "Instagram",
    url: "https://instagram.com/explore.ansh/",
  },
  {
    icon: <SiSnapchat className="text-zinc-300 w-6 h-6" />,
    title: "Snapchat",
    url: "https://Snapchat.com/AnshAjayMishra/",
  },
  {
    icon: <SiGithub className="text-zinc-300 w-6 h-6" />,
    title: "GitHub",
    url: "https://github.com/AnshAjayMishra",
  },
  {
    icon: <SiDiscord className="text-zinc-300 w-6 h-6" />,
    title: "Discord",
    url: "https://discordapp.com/users/428522595558883348",
  },
  {
    icon: <SiX className="text-zinc-300 w-6 h-6" />,
    title: "X",
    url: "https://x.com/AnshAjayMishra",
  },
  {
    icon: <SiStackoverflow className="text-zinc-300 w-6 h-6" />,
    title: "Stack Overflow",
    url: "https://stackoverflow.com/users/23350365/ansh-ajay-mishra",
  },
  {
    icon: <SiDevdotto className="text-zinc-300 w-6 h-6" />,
    title: "Dev.to",
    url: "https://dev.to/anshajaymishra",
  },
  {
    icon: <SiMedium className="text-zinc-300 w-6 h-6" />,
    title: "Medium",
    url: "https://medium.com/@ajayanshmishra10",
  },
  {
    icon: <SiReddit className="text-zinc-300 w-6 h-6" />,
    title: "Reddit",
    url: "https://www.reddit.com/user/Ansh15032004/",
  },
  {
    icon: <SiPinterest className="text-zinc-300 w-6 h-6" />,
    title: "Pintrest",
    url: "https://pintrest.com/ajayanshmishra10",
  },
  {
    icon: <SiBehance className="text-zinc-300 w-6 h-6" />,
    title: "Behance",
    url: "https://www.behance.net/anshansh15",
  },
  {
    icon: <SiCodesandbox className="text-zinc-300 w-6 h-6" />,
    title: "Code Sand Box",
    url: "https://codesandbox.io/u/AnshAjayMishra",
  },
];

function Page() {
  return (
    
      <div className="overflow-hidden relative h-full w-full bg-white">
        <Spotlight />
        <Spotlightt
          className=" -top-40 left-0 md:left-60 md:-top-50"
          fill="white"
        />

        <div className=" min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
          <div className="min-h-screen relative bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
              {" "}
              <div className="flex items-center justify-center mt-5">
          <ToggleTheme /> 
          </div>
            </div>

            <div className="mx-auto max-w-[30rem] px-2 py-20">
         
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center w-24 h-24 rounded-full overflow-hidden relative border dark:boder-zinc-900">
                  <Image
                    src={AA}
                    alt="Profile Picture"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <header className="mt-4 flex flex-col justify-center items-center">
                <h1 className="text-lg font-semibold">Ansh Ajay Mishra</h1>
                <p className="text-sm font-medium mt-2 text-[#a1a1a1] ">
                  Full Stack Engineer
                </p>
              </header>

              <div className="relative flex items-center justify-center mt-6 space-x-5">
                <Link href="#">
                  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full dark:bg-[#0b0a0a] bg-gray-100 px-8 py-1 text-sm font-medium text-black dark:text-gray-50 backdrop-blur-3xl">
                      Website
                    </span>
                  </button>
                </Link>
                <Link href="mailto:ajayanshmishra10@gmail.com">
                  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full dark:bg-[#0b0a0a] bg-gray-100 px-8 py-1 text-sm font-medium text-black dark:text-gray-50 backdrop-blur-3xl">
                    @anshajaymishra
                    </span>
                  </button>
                </Link>
              </div>

              <section>
                <main className="mt-8">
                  <div className="flex flex-col gap-4 py-3">
                    {links.map((link) => {
                      const { icon, title, url } = link;

                      return (
                        <Link
                          key={url}
                          href={url}
                          className="relative flex h-13 w-full text-sm items-center justify-center rounded-xl border border-zinc-700 dark:bg-[#0b0a0a] bg-gray-100 px-8 py-4 transition-colors duration-300 dark:hover:border-zinc-500 hover:border-zinc-300"
                          target="_blank"
                          rel="noopener, noreferrer"
                        >
                          <div className="absolute left-8 dark:text-zinc-100 text-zinc-900">
                            {icon}
                          </div>
                          <div className="dark:text-zinc-100 text-zinc-900 ">
                            {title}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </main>
              </section>
               <Footer/>
            </div>
           
          </div>
          
        </div>
      
      </div>
    
  );
}

export default Page;
