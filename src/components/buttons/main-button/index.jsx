import { twMerge } from "tailwind-merge";

export function MainButton({textButton, imgPath,imgAlt, styleButton, styleBTN, target, linkButton}){

    function clickAds(){
        return gtag_report_conversion(linkButton);
      }
    return(
            <a 
                className={twMerge("hover:cursor-pointer py-4 px-10 hover:text-gray transition-all text-white font-semibold bg-blue rounded-xl", styleButton)}
                target={target} 
                onClick={clickAds}
            >
                <button className={styleBTN}>
                    <img src={imgPath} alt={imgAlt} />
                    {textButton}
                </button>
            </a>
    )
}