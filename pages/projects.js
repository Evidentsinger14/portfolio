import Head from "next/head";
import Image from "next/image";

import noLogo from "../public/images/projects/no-logo.png";
import ppLogo from "../public/images/projects/pp-logo.png";
export default function Projects() {
  return (
    <div>
      <Head>
        <title>Evident</title>
        <meta name="description" content="Evident" />
        <link rel="icon" href="../public/images/favicon.ico" />
      </Head>

      {/* NavBar */}
      <main className="px-10 bg-midnight-blue">
        <section className="min-h-screen">
          <nav className="container mx-auto flex flex-wrap flex-col items-center text-white">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4">
              <h1 className="font-akira text-white text-5xl pt-6">Evident</h1>
            </a>
            <div className="flex flex-wrap items-center text-base justify-center">
              <a className=" text-white px-5 py-2 border-none rounded-xl mt-2 ml-4 mr-4" href="./">Home</a>
              <a className="bg-purple text-white px-5 py-2 border-none rounded-xl mt-2 ml-4 mr-4" href="./projects">Projects</a>
              <a className="text-white px-5 py-2 border-none rounded-xl mt-2 ml-4 mr-4" href="https://pastes.dev">Pastebin</a>
            </div>
          </nav>

      {/* Body */}
      <section>
          <div className="text-center p-10 py-10">
            <h2 className="text-3xl pt-7 underline underline-offset-4 text-purple">Projects</h2>
            <p className="text-xl py-2 text-white md:text-2xl">When I'm not at my day job, I'm busy working on a number of different projects</p>
            <p className="text-xl py-2 text-white md:text-2xl">Most of which are Minecraft related - Minecraft Servers, Plugins, Etc.</p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gray-600 flex-1">
              <Image src={noLogo} width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                JinxMC
              </h3>
              <p className="py-2">
                A Minecraft server based around X Version, Complete with X Feature, and X System..
              </p>
              <h4 className="text-2xl py-1 text-violet-500 pb-5">Server Info</h4>
              <p className="py-1 text-white">Version: 1.20.x Natively</p>
              <p className="py-1 text-white">Custom Quests</p>
              <p className="py-1 text-white">Enhanced Enchantment System</p>
              <p className="py-1 text-white">Magical Effects System</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gray-600 flex-1">
              <Image src={ppLogo} width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                PermissionPurge
              </h3>
              <p className="py-2">
                This plugin allows for efficient purging of unused or outdated permissions.
              </p>
              <h4 className="text-2xl py-1 text-violet-500 pb-5">Plugin Info</h4>
              <p className="py-1 text-white">Download at Modrinth</p>
              <p className="py-1 text-white">Easy to use</p>
              <p className="py-1 text-white">LuckPerms Addon</p>
              <p className="py-1 text-white">Supports all versions.</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gray-600 flex-1">
              <Image src={noLogo} width={100} height={100} alt=""/>
              <h3 className="text-lg font-medium pt-8 pb-2 ">MetaTokens</h3>
              <p className="py-2">
                Do you want to give your players the ability to set their own prefix, with a price? Look no further than MetaTokens.
              </p>
              <h4 className="text-2xl py-1 text-violet-500 pb-5">Plugin Info</h4>
              <p className="py-1 text-white">Version: 1.18</p>
              <p className="py-1 text-white">Currency called "Tokens"</p>
              <p className="py-1 text-white">MySQL/MariaDB Support</p>
              <p className="py-1 text-white">(Unreleased)</p>
            </div>
          </div>
        </section>
        </section>
      </main>
    </div>
  );
}
