import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function TextButton({text, textStyle, link}){
    const [button, setButton] = useState( false );
    const submit = (e) => { 
        e.preventDefault();
        setButton(!button)
    }
    
    return(
        // <p className={twMerge(" text-base leading-none text-gray", textStyle)}>{text}</p>
        <a className="wrapper-line flex flex-col max-w-44 items-start justify-start w-" href={link} onSubmit={submit}>
            <button className={twMerge(`${button ? 'hidden' : 'flex'}  hover:text-dark-blue transition-all items-center text-sm font-medium leading-[30px] tracking-[2px] text-blue `, textStyle) }>
                {text}
                <img className="inline-block  pl-4" src="icons/cards/arrow.svg" alt="" />
            </button>
            <div className="w-full h-[2px] bg-[#8ab7f1] rounded-3xl">
                <div className="line w-[0%] h-full bg-blue dark:bg-white rounded-3xl"></div>
            </div>           
        </a>
    )
}