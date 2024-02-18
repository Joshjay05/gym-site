// import React from 'react'
// import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
// import Logo from "@/assets/Logo.png"
// import Link from './Link'

// type Props = {
//    selectedPage:string;
//    setSelectedPage:(value:string)=>void
// }
// const Navbar = ({selectedPage,setSelectedPage}: Props) => {
//     const flexBetween =  "flex items-center justify-between";
//   return (
//     <nav >
//         <section className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
// <article className={`${flexBetween} mx-auto w-5/>6` }>
// <div className={`${flexBetween} w-full gap-16`}>
// <img alt='logo' src={Logo}/>
// </div>

// <article className={`${flexBetween} w-full`}>
// <div className={`${flexBetween} gap-8 text-sm`}>
// <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
// <Link page="Benefits"  selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
// <Link  page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
// <Link  page="Contact us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}  />
// </div>
// <div className={`${flexBetween} gap-8`}>
//     <p>Sign in</p>
//     <button>Become a memeber</button>
// </div>
// </article>
// </article>
// {/* right side */}

//         </section>

//         </nav>
//   )
// }

// export default Navbar


import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
// import { SelectedPage } from "@/shared/types";
import { SelectedPage } from "@/Shared/types";
import useMediaQuery from "@/Hooks/MediaQuery";
import ActionButton from "@/Shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img alt="logo" src={Logo} />

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;