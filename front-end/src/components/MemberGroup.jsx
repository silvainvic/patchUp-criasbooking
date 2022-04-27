import React from 'react';
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';

export default function MemberGroup(props) {
  return (
    <div class="w-full px-4 lg:w-1/3 md:w-1/2">
      <h2 class="mb-2 font-bold tracking-widest text-gray-900">{props.name}</h2>
      <ul class="mb-8 space-y-2 text-sm list-none">
        <li className="flex justify-center items-center">
          <FaLinkedin />
          <a href={props.linkedin} class="text-white hover:text-gray-800 ml-1">
            Linkedin
          </a>
        </li>
        <li className="flex justify-center items-center">
          <FaGithub />
          <a href={props.github} class="text-white hover:text-gray-800 ml-1">
            GitHub
          </a>
        </li>
        <li className="flex justify-center items-center">
          <FaMailBulk />
          <a href={props.email} class="text-white hover:text-gray-800 ml-1">
            E-mail
          </a>
        </li>
        <li className="flex justify-center items-center">
          <a href={props.portfolio} class="text-white hover:text-gray-800 ml-1">
            Portfólio
          </a>
        </li>
      </ul>
    </div>
  );
}
