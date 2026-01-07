import {copyrightIcon} from "../../assets/img/global/"
function Footer(){return(
    <section className=" flex flex-col items-center">
        <h1 className="font-bold text-[3rem]">Francis Anciro</h1>

        <div className="flex flex-row items-center">
            <img src={copyrightIcon} alt=""/>
            <p className="leading-none">All rights reserved.</p>
        </div>
    </section>
)
}

export default Footer