import React from 'react';
import MemberGroup from './MemberGroup';

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
          <MemberGroup name="Ary Barbosa" />
          <MemberGroup name="Grazziano Fagundes" />
          <MemberGroup name="Renata Magno" />
          <MemberGroup name="Sávio Silva" />
        </div>
      </div>
      <div class="flex justify-center -mt-12">
        <p class="text-base text-white">All rights reserved @</p>
      </div>
    </footer>
  );
}
