import { useEffect, useRef, useState } from "react"
import { twMerge } from "tailwind-merge";

export function Projects({children, styleProjects, imagesPath}){
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

    return(
        <div className={twMerge("flex justify-between lg:flex-row py-12  flex-col-reverse lg:gap-16", styleProjects)}>
            <div className="pl-4 lg:max-w-72 flex flex-col items-start gap-4">
                {children}
            </div>
            <div className="flex flex-col w-full">
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
    )
}