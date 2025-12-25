import imageOfMe from "../../assets/img/homepage/Me.png"
function MainHeroCard() {
    return(
        <>
        <section className="heroSectionContainer">
            <figure className="imageOfMe">
                <img src={imageOfMe} id="imageOfMe" alt="" />
            </figure>
            <article>
                <h2 className="heroSectionTitle">Hi, I'm Francis!</h2>
                <p className="heroSectionText">An all around developer for your needs.</p>            
            </article>
        </section>
        </>
    )
}
export default MainHeroCard;