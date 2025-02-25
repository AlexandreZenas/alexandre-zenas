import { twMerge } from "tailwind-merge";

export function LinkButton({link, textLink, target, buttonStyle}){
    function clickAds(){
        return gtag_report_conversion(link);
      }
    return(
    <div className={twMerge(`wrapper-line hover:cursor-pointer`, buttonStyle)}>
        <a 
            className="inline-block text-base font-medium leading-loose text-blue" 
            target={target} 
            onClick={clickAds}
        >
            {textLink}
        </a>
        <img className="inline-block  pl-4" src="icons/cards/arrow.svg" alt="" />
        <div className="w-full h-[2px] bg-[#8ab7f1] rounded-3xl">
            <div className="line w-[0%] h-full bg-blue dark:bg-white rounded-3xl"></div>
        </div>
    </div>
    )
}