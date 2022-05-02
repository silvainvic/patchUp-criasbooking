import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import { MdWeb } from 'react-icons/md';

export default function MemberGroup(props) {
  return (
    <div
      class="
        flex flex-col justify-center items-center
        w-full px-4 lg:w-1/3 md:w-1/2"
        key={props.keyMem}
      >
      <img src={props.image} alt={props.name} className="w-20 h-20 rounded-full"/>
      <div>
        <h2 class="mb-2 font-bold tracking-widest text-gray-900">{props.name}</h2>
        <ul class="mb-8 space-y-2 text-sm list-none">
          <li className="flex justify-center items-center">
            <FaLinkedin />
            <a
              href={props.linkedin}
              class="text-white hover:text-gray-800 ml-1"
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
              class="text-white hover:text-gray-800 ml-1"
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
              class="text-white hover:text-gray-800 ml-1"
              target="_blank"
              rel="noreferrer"
            >
              Portfólio
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
