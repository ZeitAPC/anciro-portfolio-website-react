import {devIcon, cybersecurityIcon, cloudIcon} from "../../assets/img/homepage"
import {CardWithIcon} from "../common/"
function WhatIDo() {
    const ListOfCardData = {
        SoftDevData: {
            CardIcon: devIcon,
            CardTitle: "Software & Front-End Development",
            CardText: "HTML, CSS, Vite, Tailwind Java, Python, TypeScript",
        },
        CybersecurityData: {
                CardIcon: cybersecurityIcon,
                CardTitle: "Defensive Cybersecurity",
                CardText: "Tools: Firewalls, SIEMs, IDS/IPS, Endpoint Security"
        },
        CloudData: {
            CardIcon: cloudIcon,
            CardTitle: "Cloud Security",
            CardText: "Tools: AWS Security, Azure Security, GCP Security, IAM, CloudFirewalls, SIEM"
        },
    }    // Object with all the data for card

    return(
        <section className="flex flex-wrap justify-evenly text-center gap-[2rem] py-[5rem]">
            <h1 className="w-full text-[4rem] font-bold">What I do</h1>

            {/* Render each card from the data object */}
            {Object.values(ListOfCardData).map(card =>
                <CardWithIcon
                key = {card.CardTitle} //Needed for react to render element
                cardData={card} //passing the card data
                />)}
        </section>
    )}

export default WhatIDo;