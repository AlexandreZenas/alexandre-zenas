import { About } from "./about"
import { Benefits } from "./benefits"
import { Contact } from "./contact"
import { Hero } from "./hero"
import { Portfolio } from "./portfolio"

export function Home(){
    return(
        <main className="m-0 pt-24 box-border">
            <Hero />
            <Benefits />
            <About />
            <Portfolio />
            <Contact />
        </main>
    )
}