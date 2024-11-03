import data from "../data.js";
import resumePDF from "../assets/Sa-Yoor Headley's Resume.pdf";

export default function Footer() {
  return (
    <footer className="transition-all bg-footer-light dark:bg-footer-dark bg-cover flex flex-col justify-center items-center space-y-4 py-6 bg-lightGray text-black dark:bg-veryDarkGray dark:text-white">
      {/* Title */}
      <a href="#home" className="text-xl font-bold">
        Sa-Yoor Headley
      </a>

      <div className="flex w-3/4 sm:w-1/2 md:w-1/3 text-sm justify-between">
        {/* Page Links */}
        <div className="flex flex-col gap-y-1 text-sm">
          <a className="hover:underline focus:underline" href="#home">
            Home
          </a>
          <a className="hover:underline focus:underline" href="#projects">
            Projects
          </a>
          <a className="hover:underline focus:underline" href="#skills">
            Skills
          </a>
          <a className="hover:underline focus:underline" href="#contact">
            Contact
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-y-1 text-sm items-end">
          {/* Github */}
          <a
            href={data.websites.github}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Github
          </a>

          {/* LinkedIn */}
          <a
            href={data.websites.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>

          {/* Resume Download */}
          <a
            href={resumePDF}
            download
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Download Resume
          </a>

          {/* Resume Link */}
          <a
            href={data.websites.resume}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Resume Link
          </a>
        </div>
      </div>

      {/* Copyright */}
      <small className="text-xs text-black dark:text-lightGray font-light">
        Copyrights © 2022, All rights reserved
      </small>
    </footer>
  );
}
