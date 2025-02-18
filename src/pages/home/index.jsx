import { About } from "./about"
import { Benefits } from "./benefits"
import { Contact } from "./contact"
import { Hero } from "./hero"
import { Portfolio } from "./portfolio"

export function Home(){
    return(
        <main>
            <Hero />
            <Benefits />
            <About />
            <Portfolio />
            <Contact />
        </main>
    )
}