import Navbar from "@/Scenes/Navbar"
import { useState,useEffect } from "react"
import Home from "./Scenes/Home";

enum SelectedPage{
  Home = 'home',
  Benefits = "benefits",
  OurClasses ="ourclasses",
  ContactUs ="contactus",

}
function App() {
 const [selectedPage,setSelectedPage]=useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className=" app bg-gray-20" >
     <Navbar isTopOfPage={isTopOfPage}
 selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        <Home setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
