import { twMerge } from "tailwind-merge";

export function FooterRoot({children, containerStyle}) {

    return(
        <footer className={twMerge(`py-8 bg-black`)} >
            <div className={twMerge(`max-w-[1280px] mx-auto py-16 gap-16 flex flex-col justify-center `, containerStyle)}>                
                {children}
            </div>
        </footer>
    )
}