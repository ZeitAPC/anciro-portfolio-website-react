function CardWithIcon({cardData}) {
    const {
        CardIcon,
        CardTitle,
        CardText,
        ButtonFunction,
        ButtonText,
    } = cardData; //Deconstructing the object

    return(
    <article className="flex flex-col justify-center items-center w-[20em] p-5 bg-cream text-espresso rounded-[2%] shadow-[1px_1px_10px_4px_#6F4E37]">

        <figure className="h-80 w-80 rounded-[12.5%] flex items-center justify-center bg-[#D2AF92]">
            <img src={CardIcon} alt="Web development card Icon" className="h-70"/>
        </figure>

        <article className="card-body">
            <h5 className="text-[2rem]">{CardTitle}</h5>
            {CardText && <p className="my-[10px]">{CardText}</p>} {/*Render only if CardText argument was passed*/}
        </article>

        {/*Render only if ButtonFunction argument was passed*/}
        {ButtonFunction &&
            <button onClick={ButtonFunction} className="flex justify-start items-center p-[10px] bg-accent-secondary text-cream rounded-[5px] w-[22rem] cursor-pointer">
            {ButtonText}
        </button>}

    </article>
)}

export default CardWithIcon;