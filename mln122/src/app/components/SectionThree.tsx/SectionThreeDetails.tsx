"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface SectionTwoDetailsProps {
  id: number;
  title: string;
  image: string;
  description: string;
  //   link: string;
}

export const SectionThreeDetails = ({
  title,
  image,
  description,
}: //   link,
SectionTwoDetailsProps) => {
  const ref = useRef(null);
  const lines = description.split("\n");
  return (
    <div className="w-full  snap-center flex items-center justify-center mb-10  ">
      <article className="max-w-7xl flex flex-col md:flex-row items-center justify-center gap-4 h-full p-4 mt-12 md:mt-0">
        <figure ref={ref} className="md:flex-1 w-full">
          {title.length < 9 ? (
            <Image
              src={image}
              alt={title}
              width={2200}
              height={2200}
              className="w-full h-full object-cover rounded-md"
            />
          ) : (
            <Image
              src={image}
              alt={title}
              width={800}
              height={800}
              className="w-full h-full object-cover rounded-md"
            />
          )}
        </figure>
        <motion.div className="md:flex-1 flex flex-col items-center md:items-start gap-4 p-2 text-center md:text-start">
          <h3 className="text-4xl lg:text-6xl text-white font-semibold">
            {title}
          </h3>
          <ul>
            {lines.map((line, index) => (
              <p className="text-white text-base lg:text-lg" key={index}>
                <span className="font-bold">+ </span>
                {line}
              </p>
            ))}
          </ul>
        </motion.div>
      </article>
    </div>
  );
};
