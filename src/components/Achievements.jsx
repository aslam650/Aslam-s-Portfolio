import React, { useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { gsap } from "gsap";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc"; 

import certImage from "/Users/aslam/Downloads/Layeeq's Portfolio/src/images/cert.png"; 


const achievementsData = [
  {
    title: "Appreciation Award",
    description:"Awarded a Certificate of Appreciation by GIFTY APP SOLUTIONS, INC. in recognition of consistent dedication and hard work demonstrated as a Software Engineer during the 2024-2025 fiscal year.",
    image: certImage,
    source: "Certification Authority",
    link: "#",
  },
];



const AchievementCard = ({ index, title, description, image, source, link }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    // ... (GSAP animation logic remains the same)
    const el = cardRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        delay: index * 0.1, 
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top center", 
          scrub: true,
        },
      }
    );
  }, [index]);

  return (
    <div ref={cardRef}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450, }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div 
          className='relative w-full h-[280px] cursor-pointer overflow-hidden' // Added overflow-hidden
          onClick={() => link && window.open(link, '_blank')}
        >
          <img
            src={image}
            alt={title}
            // --- UPDATED CLASSES FOR HOVER EFFECT ---
            className='w-full h-full object-contain rounded-2xl p-2 transition-transform duration-500 hover:scale-110' 
            // 1. transition-transform: Enables smooth transition
            // 2. duration-500: Sets transition speed to 0.5s
            // 3. hover:scale-110: On hover, scales the image to 110% of its size
          />
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{title}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
      </Tilt>
    </div>
  );
};



const Achievements = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>My Recognition</p>
        <h2 className={`${styles.sectionHeadText}`}>Achievements.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          This certification validates my technical dedication and proficiency in key development areas.
        </p>
      </div>

      <div className="achievement-container mt-20 flex flex-wrap justify-center gap-7">
        {achievementsData.map((achievement, index) => (
          <AchievementCard key={`achievement-${index}`} index={index} {...achievement} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");