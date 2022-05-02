import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';

export default function MemberGroup(props) {
  return (
    <div className="w-full px-4 lg:w-1/3 md:w-1/2">
      <h2 className="mb-2 font-bold tracking-widest text-gray-900">{props.name}</h2>
      <ul className="mb-8 space-y-2 text-sm list-none">
        <li className="flex justify-center items-center">
          <FaLinkedin />
          <a
            href={props.linkedin}
            className="text-white hover:text-gray-800 ml-1"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li className="flex justify-center items-center">
          <FaGithub />
          <a
            href={props.github}
            className="text-white hover:text-gray-800 ml-1"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        {/* <li className="flex justify-center items-center">
          <MdWeb />
          <a
            href={props.portfolio}
            className="text-white hover:text-gray-800 ml-1"
            target="_blank"
            rel="noreferrer"
          >
            Portfólio
          </a>
        </li> */}
      </ul>
    </div>
  );
}
