import { twMerge } from "tailwind-merge";

export function FooterRoot({children, containerStyle}) {

    return(
        <footer className={twMerge(` bg-black`)} >
            <div className={twMerge(`max-w-[1280px] mx-auto py-24 gap-16 flex flex-col justify-center `, containerStyle)}>                
                {children}
            </div>
        </footer>
    )
}