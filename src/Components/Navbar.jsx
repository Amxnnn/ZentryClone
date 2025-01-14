import { useEffect, useRef, useState } from "react"
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";


const navItems = ['Nexus','Vault', 'Prologue','About','Contact'];



const Navbar = () => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);


    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible, setisNavVisible] = useState(true)


    const navContaoinerRef = useRef(null);
    const audioElemntRef = useRef(null);
    const toggleAudioIndicator = () =>{
        setIsAudioPlaying((prev)=>!prev);
        setIsIndicatorActive((prev)=>!prev);
    }

    const {y: currentScrollY } = useWindowScroll();
    useEffect(()=>{
        if(currentScrollY === 0){
            setisNavVisible(true);
            navContaoinerRef.current.classList.remove('floating-nav')
        } else if(currentScrollY>lastScrollY){
            setisNavVisible(false);
            navContaoinerRef.current.classList.add('floating-nav')
        } else if (currentScrollY<lastScrollY){
            setisNavVisible(true);
            navContaoinerRef.current.classList.add('floating-nav')
        }
        setLastScrollY(currentScrollY);
    },[currentScrollY , lastScrollY ])

    //gsap navbar animation
    useEffect(()=>{
        gsap.to(navContaoinerRef.current,{
            y:isNavVisible?0:-100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2
        })

    },[isNavVisible])

    useEffect(()=>{
        if(isAudioPlaying){
            audioElemntRef.current.play();
        }else{
            audioElemntRef.current.pause();
        }
    },[isAudioPlaying])

  return (
    <div ref={navContaoinerRef} className="fixed inset-x-0  top-4 z-50 h-16 border-none transition-all duration-700 sm:insert-x-6 " >
        <header className="absolute top-1/2 w-full -translate-y-1/2 " >
            <nav className="flex size-full items-center justify-between p-4 " >
                <div className="flex items-center gap-7" >
                    <img src="/img/logo.png" alt="logo " className="w-10 " ></img>
                    <Button id="product-button" title="Products" rightIcon={<TiLocationArrow/>}
                    containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1 "/>

                </div>
                <div className="flex h-full items-center " >
                    <div className="hidden md:block  " >
                        {navItems.map((item )=>(
                            <a
                            className="nav-hover-btn" 
                            key={item} 
                            href={`#${item.toLowerCase()}`}
                            >
                                {item}
                            </a>
                        ))}

                    </div>
                    <button onClick={toggleAudioIndicator} className="ml-10 flex items-center space-x-0.5 ">
                        <audio ref={audioElemntRef} className="hidden" src="/audio/loop.mp3" loop />
                        {[1,2,3,4].map((bar)=>(
                            <div key={bar} className={`indicator-line ${isIndicatorActive?'active':''} `}
                             style={{animationDelay:`${bar * 0.1}s`}} />
                        ))}
                    </button>

                </div>

            </nav>

        </header>
      
    </div>
  )
}

export default Navbar
