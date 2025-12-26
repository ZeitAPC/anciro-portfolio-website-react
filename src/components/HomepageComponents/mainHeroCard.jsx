import heroSectionDisplayPicture from "../../assets/img/homepage/heroSectionDisplayPicture.png"
function MainHeroCard() {
    return(
        <section id="heroSectionContainer">
            <article className="heroSectionText">
                <h1 className="heroSectionTitle">Hi, I'm Francis!</h1>
                <p className="heroSectionSubtext">An all around developer for your needs.</p>            
            </article>
            <figure className="imageOfMeContainer">
                <img src={heroSectionDisplayPicture} id="imageOfMe" alt="" />
            </figure>
        </section>
    )
}
export default MainHeroCard;