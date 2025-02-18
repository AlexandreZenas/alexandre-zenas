import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function InputForm({inputType, labelTitle, placeholderInput, inputStyle, name}){
    // const [inputValue, setValue] = useState('');

    return(
        <div className={twMerge("flex flex-col gap-2", inputStyle)}>
            <label className="text-base leading-6 text-black" htmlFor="">{labelTitle}</label>
            <input 
                className=" border-[1px]  px-2 rounded-md h-12 border-[#bfbfbf] w-full" 
                placeholder={placeholderInput} 
                type={inputType} 
                name={name}
                // value={inputValue} 
                // onChange={(e) => {setValue(e.target.value)}}
                required
            />
        </div>

    )
}