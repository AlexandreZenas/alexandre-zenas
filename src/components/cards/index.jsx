import { LinkButton } from "../buttons/linkButton";

export function Card({title, text, link, textLink, imgPath}){
    return(
        <div className="flex lg:w-[360px] xl:w-1/3  gap-4 justify-start items-start bg-[#fff] px-8 py-12 shadow-xl">
            <img src={imgPath} alt="" />
            <div className="flex flex-col h-full justify-between items-start gap-8">
                <div className="flex flex-col gap-4">
                    <h2 className="font-medium xl:text-3xl lg:text-2xl">{title}</h2>
                    <p className="text-gray">{text}</p>
                </div>
                <LinkButton  link={''} textLink={'saiba mais'}/>
            </div>
        </div>
    )
}