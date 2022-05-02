import React from 'react';
import { members } from '../data/members';
import MemberGroup from './MemberGroup';
// import ary from '../img/members/ary.png';
// import grazziano from '../img/members/grazziano.jpg';
// import renata from '../img/members/renata.jpg';
// import savio from '../img/members/savio.jpg';

export default function Footer() {
  return (
    <footer className="border-t border-gray-600 bg-green-600 mt-10">
      <div
        className="
          container
          flex flex-col flex-wrap
          px-4
          py-12
          mx-auto
          md:items-center
          lg:items-start
          md:flex-row md:flex-nowrap
        "
      >
        <div class="justify-between w-full mt-4 text-center lg:flex">
          {members.map((ele, index) => {
            return (
              <MemberGroup
                keyMem={index}
                image={ele.image}
                name={ele.name}
                linkedin={ele.linkedin}
                github={ele.github}
                portfolio={ele.portfolio}
              />
            );
          })}
        </div>
      </div>
      <div className="flex justify-center -mt-12">
        <p className="text-base text-white">All rights reserved @</p>
      </div>
    </footer>
  );
}
