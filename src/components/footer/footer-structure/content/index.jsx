import { twMerge } from "tailwind-merge";

export function ContentFooter({contentStyle, children}){
    return(
        <div className={twMerge('flex flex-col lg:flex-row items-center gap-8 justify-around ', contentStyle)}>
            {children}
        </div>
    )
}