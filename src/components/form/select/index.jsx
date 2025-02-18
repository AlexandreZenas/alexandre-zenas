import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function SelectForm({ labelTitle, option, children, selectStyle, name}){
    const [selectValue, setSelectValue] = useState('');    
    return(
        <div className={twMerge("flex flex-col gap-2", selectStyle)}>
            <label className="text-base leading-6 text-black" htmlFor="option">{labelTitle}</label>
            <select 
            className="border-[1px] px-2 rounded-md h-12 border-[#bfbfbf] w-full text-base leading-6 text-gray"
            id="option"
            name={name}
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
            required>
                <option value="" hidden>
                    Selecione uma opção ...
                </option>
                {children}
            </select>
        </div>

    )
}