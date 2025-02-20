import { useEffect, useRef, useState } from "react"
import { twMerge } from "tailwind-merge";
import { LinkButton } from "../buttons/linkButton";

export function Projects({styleProjects, imagesPath, styleCarousel, title, subTitle, date, textOne, textTwo, textTree, link, textLink, animateImage}){
    
    // função carousel
    const [imagePosition, setimagePosition] = useState(0);
    function NavegationAdvance(){
        if(imagePosition <= 87.5){
            setimagePosition( imagePosition + 12.5)            
        }           
    }
    function NavegationReturn(){
        if(imagePosition >= 12.5 ){
            console.log("click");        
            setimagePosition(imagePosition - 12.5)    
        }    
    }

    // função de scroll
    const rootRef = useRef(null);
    const [boolean, setBoolean] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const positionElementY = rootRef.current?.getBoundingClientRect().top; 
            if(positionElementY < screen.height * 0.7){
                setBoolean(true);  
            }else if(positionElementY > screen.height * 0.7){
                setBoolean(false);            
            }            
        })
    }, []);  
    return(
        <div className="" ref={rootRef}>
            <div className={twMerge(`flex justify-between lg:flex-row py-12  flex-col-reverse lg:gap-16`, styleProjects)} >
                <div className="pl-4 lg:max-w-72 flex flex-col items-start gap-4">
                <h4 className={`${ boolean ? 'animate-slideTop1' : 'opacity-0'} text-xl font-medium text-black`}>{title}</h4>
                    <span className={` ${ boolean ? 'animate-slideTop2' : 'opacity-0'}  font-medium text-sm text-black`}>{subTitle}</span>
                    <span className={` ${ boolean ? 'animate-slideTop2' : 'opacity-0'}  font-medium text-sm text-black`}>{date}</span>
                    <p className={`${ boolean ? 'animate-slideTop3' : 'opacity-0'} font-medium text-sm text-[#575757] pt-4`}>{textOne}</p>
                    <p className={`${ boolean ? 'animate-slideTop4' : 'opacity-0'} font-medium text-sm text-[#575757] pt-4`}>{textTwo}</p>
                    <p className={`${ boolean ? 'animate-slideTop5' : 'opacity-0'} font-medium text-sm text-[#575757] py-4`}>{textTree}</p>
                    <div className={`${ boolean ? 'animate-slideTop6' : 'opacity-0'}`}>
                        <LinkButton
                            target={"_blanc"}
                            textLink={textLink}
                            link={link}
                        />
                    </div>
                </div>
                <div className={twMerge(`${ boolean ? animateImage : 'opacity-0 '}  flex flex-col w-full`, styleCarousel)}>
                    <div className="sm:p-16 p-8 lg:h-[600px] h-64 w-full object-cover bg-dark-blue rounded-3xl">
                        <img 
                        className={`w-full h-full  object-cover  transition=all duration-1000  `} 
                        src={imagesPath} //child
                        alt="" 
                        style={{ objectPosition: `0% ${imagePosition}%` }}
                        />
                    </div>
                    <div className="flex w-full p-4 justify-end">
                        <div className="flex gap-8 ">
                            <img className="hover:cursor-pointer" src="icons/projects/arrow-left.svg" alt="" onClick={NavegationReturn}/>
                            <img className="hover:cursor-pointer" src="icons/projects/arrow-right.svg" alt="" onClick={NavegationAdvance}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}