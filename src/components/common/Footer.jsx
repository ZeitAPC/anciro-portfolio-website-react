import {copyrightIcon} from "../../assets/img/global/";
function Footer(){
    // This component is a footer for every page in the website
    return(
    <section className=" flex flex-col items-center">
        <h1 className="font-bold text-[2rem]">Francis Anciro</h1>

        {/*Flexed to align the icon and text*/}
        <div className="flex flex-row items-center">
            <img src={copyrightIcon} alt="Copyright symbol"/>
            <p>All rights reserved.</p>
        </div>
    </section>
)
}

export default Footer;