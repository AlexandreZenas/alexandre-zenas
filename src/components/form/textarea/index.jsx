import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function TextareaForm({inputType, labelTitle, placeholderInput, textareaStyle}){
    const [textareaValue, setTextareaValue] = useState('')    
    return(
        <div className={twMerge("flex flex-col gap-2", textareaStyle)}>
            <label className="text-base leading-6 text-black" htmlFor="">{labelTitle}</label>
            <textarea 
                className="border-[1px] min-h-20 max-h-48 p-2 rounded-md h-20 border-[#bfbfbf] w-full" 
                value={textareaValue}
                name='message'
                onChange={(e) => setTextareaValue(e.target.value)}
                placeholder={placeholderInput} 
                required
            ></textarea>
        </div>

    )
}