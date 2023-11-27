/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
// import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
// import { BsDiscord } from "react-icons/bs";
// import { MdMarkEmailRead } from "react-icons/md"
import evident from "../public/images/avatar.png";
import Image from "next/image";
/* Software Logos */
import IntelliJ from "../public/images/software/IntelliJ.png"
import WebStorm from "../public/images/software/WebStorm.png"
import VSC from "../public/images/software/VSC.png"
import Sublime from "../public/images/software/Sublime.png"
import JavaScript from "../public/images/software/JavaScript.png"
import NodeJS from "../public/images/software/NodeJS.png"
import Java from "../public/images/software/Java.png"
import Windows from "../public/images/software/Windows.png"
import Ubuntu from "../public/images/software/Ubuntu.png"
import Github from "../public/images/software/Github.png"
import Docker from "../public/images/software/Docker.png"

export default function Home() {
  return (
    <div>
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
      <main className=" bg-white px-10 dark:bg-midnight-blue">
        <section className="min-h-screen">
          <nav className="container mx-auto flex flex-wrap flex-col items-center dark:text-white">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4">
              <h1 className="font-akira text-white text-5xl pt-6">Evident</h1>
            </a>
            <div className="flex flex-wrap items-center text-base justify-center">
              <a className="bg-purple text-white px-5 py-2 border-none rounded-xl mt-2 ml-4 mr-4" href="./">Home</a>
              <a className="text-white px-5 py-2 border-none rounded-xl mt-2 ml-4 mr-4" href="./projects">Projects</a>
              <a className="text-white px-5 py-2 border-none rounded-xl mt-2 ml-4 mr-4" href="https://pastes.dev">Pastebin</a>
            </div>
          </nav>

      {/* Body */}
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-purple font-medium text-violet-500 md:text-6xl">Hey! 👋</h2>
            <div>
            <h3 className="text-2xl py-2 text-white md:text-3xl">I'm Charles, a 23 year old Developer from Pennsylvania, USA.</h3>
              <div className="pt-7">
                <Image src={evident} height="250" width="200" alt=""/>
              </div>
            </div>
            {/*Will be made into a menu at some point?*/}
            {/*<div className="pt-12">*/}
            {/*<h2 className="text-3xl py-2 underline underline-offset-4 text-violet-500">Linked Accounts</h2>*/}
            {/*<div className="text-5xl flex justify-center gap-16 pt-4 text-gray-400">*/}
            {/*  <Link href="https://twitter.com/Evidentsinger14" ><AiFillTwitterCircle /></Link>*/}
            {/*  <Link href="https://github.com/Evidentsinger14" ><AiFillGithub/></Link>*/}
            {/*  <Link href="https://discord.com/users/412070526081695744" ><BsDiscord /></Link>*/}
            {/*  <Link href="mailto:evident@ev1dent.dev"><MdMarkEmailRead /></Link>*/}
            {/*</div>*/}
            {/*</div>*/}
            <br></br>
            <h2 className="text-3xl pt-7 underline underline-offset-4 text-purple">Where you can find me!</h2>
            <ul className="text-2xl pt-4 text-white">
              <li>• 🥔 Helper @ <a href="https://github.com/MinecraftOSS" className="text-transparent bg-clip-text bg-gradient-to-r from-minecraftoss-100 to-minecraftoss-200">MinecraftOSS</a></li>
              <li>• 🧪 Triage @ <a href="https://github.com/EssentialsX/" className="text-transparent bg-clip-text bg-gradient-to-r from-essentialsx-100 via-essentialsx-200 to-essentialsx-300">EssentialsX</a></li>
              <li>• 🛠️ Moderator @ <a href="https://github.com/LuckPerms" className="text-luckperms">LuckPerms</a></li>
            </ul>
            <br></br>
            <h2 className="text-3xl pt-7 pb-2 underline underline-offset-4 text-purple">Software/Frameworks I use</h2>
              <h3 className="text-2xl text-white pt-4 mb-2 underline">• IDEs</h3>
            <div className="flex flex-row gap-3 justify-center">
            <Image height='50' width='50' src={IntelliJ} alt="InteliJ"/>
            <Image height='50' width='50' src={WebStorm} alt="WebStorm"/>
            <Image height='50' width='50' src={VSC} alt="VSC"/>
            <Image height='50' width='50' src={Sublime} alt="Sublime"/>
            </div>
            <h3 className="text-2xl text-white pt-4 mb-2 underline">• Dev Languages</h3>
            <div className="flex flex-row gap-3 justify-center">
            <Image height='50' width='50' src={JavaScript} alt="JavaScript"/>
            <Image height='50' width='50' src={NodeJS} alt="NodeJS"/>
            <Image height='50' width='50' src={Java} alt="Java"/>
            </div>
            <h3 className="text-2xl text-white pt-4 mb-2 underline">• Other Software</h3>
            <div className="flex flex-row gap-3 justify-center">
            <Image height='50' width='50' src={Windows} alt="Windows"/>
            <Image height='50' width='50' src={Ubuntu} alt="Ubuntu"/>
            <Image height='50' width='50' src={Github} alt="Github"/>
            <Image height='50' width='50' src={Docker} alt="Docker"/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
