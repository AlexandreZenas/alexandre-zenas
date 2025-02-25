import { twMerge } from "tailwind-merge";

export function MainButton({textButton, imgPath,imgAlt, styleButton, styleBTN, target, linkButton}){
    return(
            <a className={twMerge("py-4 px-10 hover:text-gray transition-all text-white font-semibold bg-blue rounded-xl", styleButton)} target={target} href={linkButton}>
                <button className={styleBTN}>
                    <img src={imgPath} alt={imgAlt} />
                    {textButton}
                </button>
            </a>
    )
}