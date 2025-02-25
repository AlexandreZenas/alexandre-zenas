import { twMerge } from "tailwind-merge";
import { LinkButton } from "../buttons/linkButton";
import { useEffect, useRef, useState } from "react";

export function Card({title, text, link, textLink, animateCard, imgPath, cardStyle}){
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
        <div className={twMerge(`${ boolean ? animateCard : ' opacity-0'} flex lg:w-[360px] xl:w-1/3  gap-4 justify-start items-start bg-[#fff] px-8 py-12 shadow-xl`, cardStyle)} ref={rootRef}>
            <img src={imgPath} alt="" />
            <div className="flex flex-col h-full justify-between items-start gap-8">
                <div className="flex flex-col gap-4">
                    <h2 className="font-medium xl:text-3xl lg:text-2xl">{title}</h2>
                    <p className="text-gray">{text}</p>
                </div>
                <LinkButton link={'https://wa.me/5521995983041'} target={'_blank'} textLink={'Solicitar orçamento '}/>
            </div>
        </div>
    )
}