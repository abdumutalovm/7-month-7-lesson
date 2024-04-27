import { useContext } from "react"
import { ThemeContext } from "../App"
function About() {
    const theme = useContext(ThemeContext);
    return (

        <div className="w-[1106px] mx-auto">
            <div className='flex items-center gap-6 mx-auto pt-20 justify-center'>
                <h1 className={`text-4xl font-bold leading-none tracking-tight sm:text-6xl ${theme.theme == 'light' ? ' text-text1' : 'text-zinc-300'}`}>We love </h1>
                <span className={`text-4xl rounded-xl py-4 tracking-widest px-6 font-bold ${theme.theme == 'light' ? 'bg-headerLogo text-zinc-200' : 'bg-hdLogo  text-bgLogin'}`}>comfy</span>
            </div>
            <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!</p>
        </div>

    )
}

export default About