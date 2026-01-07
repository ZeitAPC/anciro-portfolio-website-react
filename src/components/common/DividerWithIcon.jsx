import {coffeeBeanIcon} from "../../assets/img/global/";
function DividerWithIcon(){

    // This component is for page design only

    // Style moved to variable since it is reused
    const dividerColor = "bg-cream h-[1px] w-[30%] shadow-[0px_0px_10px_2px_#D7CCC8]";
    return (
    <div className="flex justify-center items-center">
        <div className={dividerColor}></div>
        <img src={coffeeBeanIcon} className="mx-[2rem]" alt="Coffee bean icon"/>
        <div className={dividerColor}></div>
    </div>
)
}

export default DividerWithIcon;