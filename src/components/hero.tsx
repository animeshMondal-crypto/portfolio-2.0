"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

function Hero() {
  return (
    <div className="mb-8 flex flex-col items-center gap-6 md:flex-row md:gap-10 md:w-full min-w-[200px] px-4">
      <Image
        src="/pic_gimp_1.png"
        alt="hero"
        height="150"
        width="150"
        className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full border-[3px] border-white hover:border-red-500"
      />

      <div className="flex flex-col items-center md:items-start justify-center gap-3 text-center md:text-left">
        <p className="text-2xl md:text-3xl font-bold text-slate-300">
          <span className="text-white hover:text-yellow-500">
            Hey, I&apos;m Animesh.
          </span>{" "}
          I&apos;m a fullstack developer and designer.
        </p>
        <ul className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-5 font-medium tracking-widest">
          <li>
            <Link
              href="https://twitter.com/ani_Krypto"
              target="_blank"
              className="flex gap-2 items-center text-slate-400 hover:text-white"
            >
              <FaSquareXTwitter className="text-white" /> X
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/animesh.exe/"
              target="_blank"
              className="flex gap-2 items-center text-slate-400 hover:text-red-500"
            >
              <FaInstagram className="text-red-500" />
              Instagram
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/mondal-animesh/"
              target="_blank"
              className="flex gap-2 items-center text-slate-400 hover:text-blue-500"
            >
              <FaLinkedin className="text-blue-500" />
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/animeshMondal-crypto"
              target="_blank"
              className="flex gap-2 items-center text-slate-400 hover:text-white"
            >
              <FaGithub className="text-white" />
              Github
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
