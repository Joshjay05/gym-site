// import { SelectedPage } from '@/Shared/types'
// import React from 'react'
// import useMediaQuery from '@/Hooks/MediaQuery'
// import ActionButton from '@/Shared/ActionButton'
// import HomePageText from '@/assets/HomePageText.png'
// import HomePageGraphics from '@/assets/HomePageGraphic.png'
// import SponsoredRedBull from '@/assets/SponsorRedBull.png'
// import SponsoredForbes from '@/assets/SponsorForbes.png'
// import SponsorFortune from '@/assets/SponsorFortune.png'
// import AnchorLink from 'react-anchor-link-smooth-scroll'


// type Props = {
//     setSelectedPage:(value:SelectedPage)=>void
// }

// const Home = ({setSelectedPage}: Props) => {
//   const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
//   return (
//     <section id="home" className='gap-16 bg-gray-20 py-10 md:min-h-full md:pb-0 '>

//         {/* Image and Main Header */}
//         <article className='flex-row md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
//             {/* MAIN HEADER */}
//             <div className='z-10 mt-32 md:basis-3/5'>
//                 {/*HEADINGS  */}
//                 <div className='md:-mt-20' >
// <p className='relative'>
//     <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1]  mb:before:content-evolvetext '>
//     <img alt='home-page-txt' src={HomePageText}/>
//     </div>
// </p>
// <p>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, soluta.
// </p>
//                 </div>
//         {/* Actions */}
//                 <p>
// <ActionButton setSelectedPage={setSelectedPage}>
//     Join Now
// </ActionButton>
// <AnchorLink className='text-sm font-bold text-primary-500 underline hover:'
// onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
// href={`#${SelectedPage.ContactUs}`}
// >
// <p>Learn More</p>
// </AnchorLink>
//                 </p>

//                 {/* Image */}
//                 <article>
//                   <img alt='home-pageGaraphic' src={HomePageGraphics}/>  
//                 </article>
//             </div>
//         </article>
//     {/* Sponsors */}
//     {isAboveMediumScreens && (
//         <article>
//             <div>
//                <div>
//                 <img alt='redbull-sponsor' src={SponsoredRedBull}/>
//                  <img alt='forbes-sponsor' src={SponsoredForbes}/>
//                   <img alt='fortune' src={SponsorFortune}/>
//                    {/* <img alt='' src={}/> */}
//                 </div> 
//             </div>
//         </article>
//     )}
//     </section>
//   )
// }

// export default Home;

import useMediaQuery from "@/Hooks/MediaQuery";

import { SelectedPage } from "@/Shared/types";

import ActionButton from "@/Shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/* text-image */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            {/* end-of-img */}
            {/* txt */}
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
            {/* tex-end */}
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
{/* end-of-action */}
        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
        {/* end of the image */}
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="redbull-sponsor" src={SponsorRedBull} />
              <img alt="forbes-sponsor" src={SponsorForbes} />
              <img alt="fortune-sponsor" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
      {/* end */}
    </section>
  );
};

export default Home;