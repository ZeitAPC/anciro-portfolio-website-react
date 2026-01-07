import ButtonItem from "./ButtonItem.jsx"
function ButtonList({listTitle, buttonData}) {
    // Wrapper component for individual ButtonItem
    return (
        <ul>
            {listTitle && //render title only if argument is passed
                <li>
                    <h2 className="text-[2rem]">{listTitle}</h2>
                </li>
            }

            {buttonData && //render component only if argument is passed

                //Maps data to object
                Object.values(buttonData).map(btn => (
                    <ButtonItem key={btn.buttonText} buttonData={btn} />
            ))}
        </ul>
    )
}
export default ButtonList;