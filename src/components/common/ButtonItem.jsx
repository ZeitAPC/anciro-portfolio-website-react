function ButtonItem({buttonData}) {

    // Component to handle individual item for ButtonList component
    const {icon, buttonText, onClick} = buttonData //deconstructing object
    return (
            <li className="my-[1rem]">
                <button className="flex justify-start items-center p-[7px] bg-[#6F4E37] text-[#FFF8E1] rounded-[5px] w-[30rem] cursor-pointer"
                        onClick={onClick}>
                    <figure className="h-[40px] w-[40px] mx-[10px] p-[5px] rounded-[50%] bg-[#D2AF92] flex justify-center items-center">
                        <img src={icon} alt={`${buttonText} icon`}/>
                    </figure>
                    {buttonText}
                </button>
            </li>
    )
}
export default ButtonItem;