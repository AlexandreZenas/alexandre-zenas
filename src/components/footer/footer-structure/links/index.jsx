import { twMerge } from "tailwind-merge";

export function LinksFooter({children, linksStyle}){
    return(
        <div className={twMerge("lg:w-2/5 w-full flex   items-center lg:justify-start justify-center text-center gap-4 text-white", linksStyle)}>
            {children}
        </div>
    )
}