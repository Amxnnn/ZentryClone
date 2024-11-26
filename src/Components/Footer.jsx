import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black ">
      <div className="conatiner mx-auto flex flex-col items-center justify-between px-4 gap-4 md:flex-row" >
        <p className="text-center text-sm md:text-left" >
            ©ZENTRY 2024. ALL RIGHTS RESERVED
        </p>
        <div className="flex justify-center cursor-pointer gap-4 md:justify-start " >
            <a className="text-black transition-colors flex gap-4 duration-500 ease-in-out hover:text-white">
            <FaDiscord/>
            </a>
            <a className="text-black transition-colors flex gap-4 duration-500 ease-in-out hover:text-white">
            <FaTwitter/>
            </a>
           
            <a className="text-black transition-colors flex gap-4 duration-500 ease-in-out hover:text-white">
            <FaGithub/>
            </a>
        
            <a className="text-black transition-colors flex gap-4 duration-500 ease-in-out hover:text-white">
            <FaTwitch/>
            </a>
            
           
        </div>
        <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right" >
            Privacy Policy

        </a>

      </div>
    </footer>
  )
}

export default Footer
