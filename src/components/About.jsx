import { About_content } from "../constants"

const About = () => {
    return (
        <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about"  >
            <h2 className="text-center text-xl lg:text-3xl uppercase mx-4 mb-12 tracking-tight " >About</h2>
            <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20" >
                <div className="mb-8 lg:mb-0" >
                    <img src={About_content.image} alt="About image" className="w-full h-auto" />
                </div>
                <p className="text-center text-lg lg:text-3xl font-light lg:text-left max-w-5xl mx-auto mt-8" > {About_content.subtitle} </p>
            </div>
        </section>)
}

export default About