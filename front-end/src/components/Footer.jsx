import React from 'react';
// import { members } from '../data/members';
import MemberGroup from './MemberGroup';
import ary from '../img/members/ary.png';
import grazziano from '../img/members/grazziano.jpg';
import renata from '../img/members/renata.jpg';
import savio from '../img/members/savio.jpg';

export default function Footer() {
  return (
    <footer class="border-t border-gray-600 bg-green-600 mt-10">
      <div
        class="
          container
          flex flex-col flex-wrap
          px-4
          py-16
          mx-auto
          md:items-center
          lg:items-start
          md:flex-row md:flex-nowrap
        "
      >
        <div class="justify-between w-full mt-4 text-center lg:flex">
          <>
            <img
              src={ary}
              className="object-contain h-20 w-20 rounded-full"
              alt=""
            />
            <MemberGroup
              name="Ary Barbosa"
              linkedin="https://www.linkedin.com/in/aryherton-dos-santos-barbosa-202441b8/"
              github="https://github.com/aryherton"
            />
          </>
          <>
            <img
              src={grazziano}
              className="object-contain h-20 w-20 rounded-full"
              alt=""
            />
            <MemberGroup
              name="Grazziano Fagundes"
              linkedin="https://www.linkedin.com/in/grazziano-fagundes/"
              github="https://github.com/Grazziano"
            />
          </>
          <>
            <img
              src={renata}
              className="object-contain h-20 w-20 rounded-full"
              alt=""
            />
            <MemberGroup
              name="Renata Magno"
              linkedin="https://www.linkedin.com/in/renatamagno/"
              github="https://github.com/re-magno"
            />
          </>
          <>
            <img
              src={savio}
              className="object-contain h-20 w-20 rounded-full"
              alt=""
            />
            <MemberGroup
              name="Sávio Silva"
              linkedin="https://www.linkedin.com/in/silvainvic/"
              github="https://github.com/silvainvic"
            />
          </>
          {/* {members.map((ele) => {
            return (
              <MemberGroup
                name={ele.name}
                linkedin={ele.linkedin}
                github={ele.github}
                portfolio={ele.portfolio}
              />
            );
          })} */}
        </div>
      </div>
      <div class="flex justify-center -mt-12">
        <p class="text-base text-white">All rights reserved @</p>
      </div>
    </footer>
  );
}
