import { About } from "./about"
import { Benefits } from "./benefits"
import { Hero } from "./hero"

export function Home(){
    return(
        <main>
            <Hero />
            <Benefits />
            <About />
        </main>
    )
}