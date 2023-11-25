/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md"
import { useState } from "react";
import evident from "../public/images/avatar.png";
import Image from "next/image";
import Link from "next/link";
/* Software Logos */
import IntelliJ from "../public/images/software/IntelliJ.png"
import WebStorm from "../public/images/software/WebStorm.png"
import VSC from "../public/images/software/VSC.png"
import Sublime from "../public/images/software/Sublime.png"
import HTML from "../public/images/software/HTML.png"
import CSS from "../public/images/software/CSS.png"
import JavaScript from "../public/images/software/JavaScript.png"
import NodeJS from "../public/images/software/NodeJS.png"
import Java from "../public/images/software/Java.png"
import Windows from "../public/images/software/Windows.png"
import Ubuntu from "../public/images/software/Ubuntu.png"
import LinuxMint from "../public/images/software/LinuxMint.png"
import Github from "../public/images/software/Github.png"
import Docker from "../public/images/software/Docker.png"

export default function Home() {
  const [darkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Evident</title>
        <meta name="description" content="Evident" />
        <link rel="icon" href="/images/favicon.ico" />
        <meta content="Evident" property="og:title" />
        <meta content="Portfolio Website for Evident" property="og:description" />
        <meta content="https://ev1dent.dev" property="og:url" />
        <meta content="https://avatars.githubusercontent.com/u/46200123" property="og:image" />
        <meta content="#9b51c9" data-react-helmet="true" name="theme-color" />
      </Head>

      {/* NavBar */}
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-steelworks text-5xl">Evident</h1>
            <ul className="flex items-center">
              <li>
                <a className="bg-gradient-to-r from-purple-900 to-violet-500 text-white px-4 py-2 border-none rounded-md ml-8" href="./">Home</a>
              </li>
              <li>
                <a className="bg-gradient-to-r from-purple-900 to-violet-500 text-white px-4 py-2 border-none rounded-md ml-8" href="./projects">Projects</a>
              </li>
              <li>
                <a className="bg-gradient-to-r from-purple-900 to-violet-500 text-white px-4 py-2 border-none rounded-md ml-8" href="https://paste.ev1dent.dev">Pastebin</a>
              </li>
            </ul>
          </nav>

      {/* Body */}
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-violet-500 font-medium text-violet-500 md:text-6xl">
            Hey! 👋
            </h2>
            <h3 className="text-2xl py-2 text-white md:text-3xl">
            I'm Charles, a 22 year old Developer from Pennsylvania, USA.
            </h3>
            <br></br>
            <div className="mx-auto bg-gradient-to-b from-purple-900 to-violet-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={evident} layout="fill" objectFit="cover" alt=""/>
            </div>
            <div className="pt-12">
            <h2 className="text-3xl py-2 underline underline-offset-4 text-violet-500">Linked Accounts</h2>
            <div className="text-5xl flex justify-center gap-16 pt-4 text-gray-400">
              <Link href="https://twitter.com/Evidentsinger14" ><AiFillTwitterCircle /></Link>
              <Link href="https://github.com/Evidentsinger14" ><AiFillGithub/></Link>
              <Link href="https://discord.com/users/412070526081695744" ><BsDiscord /></Link>
              <Link href="mailto:evident@ev1dent.dev"><MdMarkEmailRead /></Link>


            </div>
            </div>
            <br></br>
            <h2 className="text-3xl pt-12 underline underline-offset-4 text-violet-500">Places I Contribute</h2>
            <ul className="text-2xl pt-4 text-white">
              <li>• 🥔 Helper @ <a href="https://github.com/MinecraftOSS" className="text-green-400">MinecraftOSS</a></li>
              <li>• 🧪 Triage @ <a href="https://github.com/EssentialsX/" className="text-red-500">EssentialsX</a></li>
              <li>• 🛠️ Moderator @ <a href="https://github.com/LuckPerms" className="text-lime-500">LuckPerms</a></li>
            </ul>
            <br></br>
            <h2 className="text-3xl pt-12 pb-4 underline underline-offset-4 text-violet-500">Software/Frameworks I use</h2>
            <div>
            <Image height='50' width='50' src={IntelliJ} alt="InteliJ"/>
            <Image height='50' width='50' src={WebStorm} alt="WebStorm"/>
            <Image height='50' width='50' src={VSC} alt="VSC"/>
            <Image height='50' width='50' src={Sublime} alt="Sublime"/>
            <Image height='50' width='50' src={HTML} alt="HTML"/>
            <Image height='50' width='50' src={CSS} alt="CSS"/>
            <Image height='50' width='50' src={JavaScript} alt="JavaScript"/>
            <Image height='50' width='50' src={NodeJS} alt="NodeJS"/>
            <Image height='50' width='50' src={Java} alt="Java"/>
            <Image height='50' width='50' src={Windows} alt="Windows"/>
            <Image height='50' width='50' src={Ubuntu} alt="Ubuntu"/>
            <Image height='50' width='50' src={LinuxMint} alt="LinuxMint"/>
            <Image height='50' width='50' src={Github} alt="Github"/>
            <Image height='50' width='50' src={Docker} alt="Docker"/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
