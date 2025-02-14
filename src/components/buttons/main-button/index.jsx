import { twMerge } from "tailwind-merge";

export function MainButton({textButton, styleButton, linkButton}){
    return(
        <button className={twMerge("py-4 px-10 text-white font-semibold bg-blue rounded-xl", styleButton)}>
            <a className="" href={linkButton}>{textButton}</a>
        </button>
    )
}