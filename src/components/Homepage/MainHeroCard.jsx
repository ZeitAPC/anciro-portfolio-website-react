import {heroSectionDisplayPicture} from "../../assets/img/homepage/"
function MainHeroCard() {
    const sectionStyle = "flex flex-row justify-evenly items-center py-[4rem] relative";
    const bgFigureStyle = " absolute top-0 left-0 w-full h-full flex justify-end items-end z-0";
    const articleStyle = "z-10 relative flex items-end justify-center flex-col";
    const displayPictureContainer = "z-10 relative h-[20rem] w-[20rem] flex flex-wrap justify-center items-center rounded-[50%] bg-cream m-0 shadow-[1px_1px_20px_7px_#6F4E37]";
    return(
        <section className={sectionStyle}>
            <figure className={bgFigureStyle}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 96.84" aria-hidden="true" className="h-[216px] opacity-50">
                    <g>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M31.96,0c14.08,0,26.03,12.61,30.29,30.11c-1.07,0.94-2.12,1.92-3.15,2.95
        c-9.36,9.36-15.11,20.63-16.82,31.26c-1.2,7.41-0.44,14.53,2.38,20.54
        c-2.72,1.63-5.64,2.76-8.69,3.29c5.92-23.37,3.06-34.99-1.37-45.75
        c-4.29-10.42-10.11-21.59-3.54-42.39C31.35,0.01,31.66,0,31.96,0z
        M115.57,26.95c12.48,12.48,8.59,36.61-8.69,53.89c-15.95,15.95-37.73,20.49-50.8,11.29
        c20.71-12.34,26.9-22.58,31.38-33.32c4.33-10.4,8.12-22.42,27.47-32.47
        C115.14,26.53,115.36,26.74,115.57,26.95z
        M53.98,90.46c-0.34-0.3-0.67-0.61-0.99-0.93c-12.48-12.48-8.59-36.61,8.69-53.89
        c16.28-16.28,38.63-20.67,51.6-10.7c-20.75,10.48-26.36,19.28-30.92,30.23
        C78.08,65.43,73.45,78.58,53.98,90.46z
        M33.31,88.46c-0.45,0.03-0.9,0.04-1.35,0.04C14.31,88.5,0,68.69,0,44.25
        C0,21.23,12.7,2.31,28.93,0.2c-7.27,22.08-5.01,32.27-0.5,43.23
        C32.66,53.72,38.68,66.29,33.31,88.46z"
                        />
                    </g>
                </svg>
            </figure>
            <article className={articleStyle}>
                <h1 className="text-[4rem] font-bold">Hi, I'm Francis!</h1>
                <p className="text-right">
                    A Computer Science Undergraduate majoring in Cybersecurity and Forensics
                    <br/>
                    <br/>
                    I combine my skills in cybersecurity, cloud, and programming
                    <br/>
                    to create and deploy secure and efficient services.
                </p>
            </article>
            <figure className={displayPictureContainer}>
                <img src={heroSectionDisplayPicture} id="imageOfMe" alt="" className="h-[90%]"/>
                </figure>
        </section>
    )
}
export default MainHeroCard;