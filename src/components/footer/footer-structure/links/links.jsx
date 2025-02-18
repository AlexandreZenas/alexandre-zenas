import { twMerge } from "tailwind-merge";

export function LinkFooter({link, textLink, linkStyle}){
    return(
        <a className={twMerge('', linkStyle)} href={link}>{textLink}</a>
    )
}