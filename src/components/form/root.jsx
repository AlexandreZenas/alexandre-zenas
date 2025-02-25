import { twMerge } from "tailwind-merge";
import './index.css'
import emailjs from '@emailjs/browser';
import { InputForm } from "./input";
import { useRef, useState } from "react";
import { TextButton } from "./button";

export function FormRoot ({children, formStyle, formAction}){
    const [boolean, setBoolean] = useState(false)
    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        setBoolean(!boolean)
        emailjs.sendForm(`${'service_alexandrezenas'}`,`${'template_alexandrezeas'}`, form.current, `${'rqU1qvSAGGLwkq47N'}`)
            .then(
                () => {
                console.log('SUCCESS!');
                console.log(form.current)
                },
                (error) => {
                console.log('FAILED...', error.text);
                },
            );
    }
    return(
        <form onSubmit={handleSubmit} className={twMerge(`flex flex-col gap-4 justify-between lg:w-1/2 p-4 bg-[#fff] rounded-sm overflow-auto lg:max-h-[480px]`, formStyle)} action={formAction} ref={form}>
            {children}
            <p className={twMerge(`${boolean ? 'flex' : 'hidden'} transition-all items-center text-sm font-medium leading-[30px] tracking-[2px] text-blue `) }>
                {"mensagem enviada !"}
            </p>
            <TextButton link={'#'} textStyle={`animate-elementInVeryLow ${boolean ? ' hidden' : 'flex'}`} text={'Enviar mensagem'}></TextButton>
        </form>
    )
}