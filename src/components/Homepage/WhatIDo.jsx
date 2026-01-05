import {devIcon, cybersecurityIcon, cloudIcon} from "../../assets/img/homepage"
import {CardWithIcon} from "../common/"
function WhatIDo() {
    const sectionStyle = "flex flex-wrap justify-evenly text-center gap-[2rem] py-[5rem]"
    const pageTitle = "w-full text-[4rem] font-bold";
    const ListOfCardData = {
        SoftDevData: {
            CardIcon: devIcon,
            CardTitle: "Software & Front-End Development",
            CardText: "Java, Python, Vite, Tailwind, TypeScript",
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
    }
    return(
        <section id="" className={sectionStyle}>
            <h1 className={pageTitle}>What I do</h1>
            {Object.values(ListOfCardData).map(card =>
                <CardWithIcon
                key = {card.CardTitle}
                cardData={card}
                />)}
        </section>
    )}

export default WhatIDo;