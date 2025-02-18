import { twMerge } from "tailwind-merge";

export function MediasFooter({children, mediasStyle}){
    return(
        <div className={twMerge("lg:w-2/5 w-full flex items-center lg:justify-end justify-center  gap-4", mediasStyle)}>
            {children}
        </div>
    )
}