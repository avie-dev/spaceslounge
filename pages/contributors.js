import React from "react";
import { motion } from "framer-motion";

import { CONTRIBUTORS } from "../content/Contributors";

import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

export default function ContributorPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-6xl font-semibold text-center mt-40 mb-12">
        Our Contributors
      </div>
      <div className="w-full max-w-[1500px] flex flex-wrap justify-center gap-4">
        {CONTRIBUTORS.map((contributor) => (
          <ContributorCard key={contributor.id} data={contributor} />
        ))}
      </div>
    </div>
  );
}

function ContributorCard({ data }) {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1, delay: 0.05 * data.id }}
      className="relative p-3 h-[353px] w-[265px] rounded-xl dark:bg-white bg-[#2F3F50] border-[#8E8E8E] dark:shadow-xl border-[1px] hover:-translate-y-2 duration-150 opacity-0">
      <img
        src={data.img}
        className="h-[245px] w-[240px] rounded-md object-cover"
      />
      <div className="mt-2 flex justify-between items-center">
        <div>
          <div className="text-2xl font-medium">{data.name}</div>
          <div className="text-sm font-light opacity-50">{data.job}</div>
        </div>
        <div className="flex gap-3">
          <a href={data.github} className="text-2xl">
            <AiFillGithub />
          </a>
          <a href={data.twitter} className="text-2xl">
            <AiOutlineTwitter />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
