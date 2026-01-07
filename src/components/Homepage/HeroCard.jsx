import {heroSectionDisplayPicture} from "../../assets/img/homepage/";
function HeroCard() {
    // This component gives a brief introduction of who I am
    return(
        <section className="flex flex-row justify-evenly items-center py-[4rem] relative">
            <article className="flex items-end justify-center flex-col">
                <h1 className="text-[4rem] font-bold">Hi, I'm Francis!</h1>
                <section className="flex flex-col text-right">
                    <p className="text-right mb-4">
                        A Computer Science Undergraduate majoring in Cybersecurity and Forensics
                    </p>
                    <p>
                        I combine my skills in cybersecurity, cloud, and programming <br/>
                        to create and deploy secure and efficient services.
                    </p>
                </section>
            </article>
            <figure className="h-[20rem] w-[20rem] flex flex-wrap justify-center items-center rounded-[50%] bg-cream m-0 shadow-[1px_1px_20px_7px_#6F4E37]">
                <img src={heroSectionDisplayPicture} alt="Display picture" className="h-[90%]"/>
            </figure>
        </section>
    )
}
export default HeroCard;