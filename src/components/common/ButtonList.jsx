function ButtonList({buttonData}) {
    const buttonIconStyle = "h-[40px] w-[40px] mx-[10px] p-[5px] rounded-[50%] bg-[#D2AF92] flex justify-center items-center";
    const {icon, buttonText, onClick} = buttonData
    return (
        <ul>
            <li className="my-[1rem]">
                <button className="flex justify-start items-center p-[7px] bg-[#6F4E37] text-[#FFF8E1] rounded-[5px] w-[35rem] cursor-pointer"
                        onClick={onClick}>
                    <figure className={buttonIconStyle}>
                        <img src={icon} alt=""/>
                    </figure>
                    {buttonText}
                </button>
            </li>
        </ul>
    )
}
export default ButtonList;