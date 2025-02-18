import { twMerge } from "tailwind-merge";

export function LogoFooter({image, linkLogo, LogoStile}){
    return(
        <div className={twMerge("lg:w-1/5 w-full flex items-center justify-center text-center", LogoStile)}>
            <a href="linkLogo">
                <img src={image} alt="" />
            </a>
        </div>
    )
}