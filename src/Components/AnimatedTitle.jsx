/* eslint-disable react/prop-types */

import gsap from "gsap";
import { useEffect } from "react";
import { useRef } from "react"

const AnimatedTitle = ({title,containerClass}) => {

    const conatinerRef = useRef(null);
    useEffect(()=>{
        const ctx = gsap.context(()=>{
            const titleAnimation = gsap.timeline({
                scrollTrigger:{
                    trigger: conatinerRef.current,
                    start:'100 bottom',
                    end:'center bottom',
                    toggleActions : 'play none none reverse '
                }
            });
            titleAnimation.to('.animated-word',{
                opacity:1,
                transform:'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
                ease:'power2.inOut',
                stagger:0.02
            })

        },conatinerRef);
        return ()=> ctx.revert()   //clean use effect
    },[]);


  return (
    
    <div ref={conatinerRef} className={`animated-title ${containerClass}`}>
        {title.split('<br/>').map((line , index)=>(
            <div key={index} className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3 " >
                {line.split(' ').map((word,i)=>(
                    <span className="animated-word" key={i} dangerouslySetInnerHTML={{__html:word}} >
                    </span>
                ))}

            </div>
        ))}
    
    </div>
  )
}

export default AnimatedTitle
