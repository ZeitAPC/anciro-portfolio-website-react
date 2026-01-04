function CardWithIcon({cardData}) {
    const {
        CardIcon,
        CardTitle,
        CardText,
        ButtonFunction,
        ButtonText,
    } = cardData;
    const articleStyle ="flex flex-col justify-center items-center w-[20em] p-5 bg-[var(--color-cream)] text-[var(--color-espresso)] rounded-[2%] shadow-[1px_1px_10px_4px_#6F4E37] text-center";
    const iconContainerClass = "h-80 w-80 rounded-[12.5%] flex items-center justify-center bg-[#D2AF92]";
    const whatIDoIconStyle = "h-70";
    const buttonStyle = "flex justify-start items-center p-[10px] bg-[#6F4E37] text-[#FFF8E1] rounded-[5px] w-[22rem] cursor-pointer"
    return(
    <article className={articleStyle}>
        <figure className={iconContainerClass}>
            <img src={CardIcon} alt="Web development card Icon" className={whatIDoIconStyle}/>
        </figure>
        <article className="card-body">
            <h5 className="text-[2rem]">{CardTitle}</h5>
            <p className="my-[10px]">{CardText}</p>
        </article>
        {ButtonFunction && <button onClick={ButtonFunction} className={buttonStyle}>{ButtonText}</button>}
    </article>
)}

export default CardWithIcon;