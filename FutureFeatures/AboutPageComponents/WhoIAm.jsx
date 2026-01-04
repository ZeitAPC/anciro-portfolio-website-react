import DisplayPicture from "../../src/assets/img/homepage/heroSectionDisplayPicture.png"
function WhoIAm() {return(
        <section className="px-[1rem] flex flex-row flex-wrap justify-center gap-x-[7rem]
        bg-gradient-to-b
from-[#D2AF92]
to-[#F3EBE2]
        ">
            <h1 className="text-[4rem] w-[100%] text-center my-[2rem]">Who am I</h1>
            <article className="flex justify-center">
                <figure className="
                flex flex-wrap items-center justify-center
                h-[20rem] w-[20rem] m-[0]
                rounded-[50%]
                shadow-[1px_1px_20px_7px_#6F4E37]
                bg-[#FFF8E1]
                ">
                    <img src={DisplayPicture} alt="" className="h-[90%]"/>
                </figure>
                <p className="px-[100px] w-[50%]">
                    I'm Francis, a second-year Computer Science student specializing in Cybersecurity and Digital Forensics, <br />and your future partner in building meaningful, high-quality projects.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, id. <br/> <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur, autem beatae hic inventore nisi nulla omnis quidem sit soluta!
                </p>
            </article>
        </section>
)}
export default WhoIAm;