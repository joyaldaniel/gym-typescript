import Navbar from "@/pages/Navbar"
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/Type";
import Home from "./pages/home";
import Benfits from "./pages/benfits";
import OurClasses from "./pages/ourClasses";
import ContactUs from "./pages/contactUs";
import Footer from "./pages/footer";


function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfThePage, setIsTopOfThePage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfThePage(true)
        setSelectedPage(SelectedPage.Home)
      } else {
        setIsTopOfThePage(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);
  return (
    <>
      <Navbar isTopOfThePage={isTopOfThePage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <Benfits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </>
  );
}

export default App;
