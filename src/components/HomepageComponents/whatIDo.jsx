import WebDevIcon from "../../assets/img/homepage/webDevIcon.svg";
import SoftwareDevIcon from "../../assets/img/globalImg/softwareDevIcon.svg";
import CybersecurityIcon from "../../assets/img/homepage/cybersecurityIcon.svg";
import CloudIcon from "../../assets/img/homepage/cloudIcon.svg";
import CardWithIcon from "../common/CardWithIcon.jsx";
function WhatIDo() {

    const ListofCardData = {
        // WebDevData: {CardIcon: WebDevIcon, CardTitle: "Web Development", CardText: "HTML, CSS, JS, React Vite, Bootstrap."},
        SoftDevData: {
            CardIcon: WebDevIcon,
            CardTitle: "Software & Front-End Development",
            CardText: "Java, Python, Vite, Tailwind, TypeScript",
        },
        CybersecData: {
                CardIcon: CybersecurityIcon,
                CardTitle: "Defensive Cybersecurity",
                CardText: "Tools: Firewalls, SIEMs, IDS/IPS, Endpoint Security"
        },
        CloudData: {
            CardIcon: CloudIcon,
            CardTitle: "Cloud Security",
            CardText: "Tools: AWS Security, Azure Security, GCP Security, IAM, CloudFirewalls, SIEM"
        },
    }

    return(
<section id="" className="
    flex flex-wrap
    justify-evenly
    text-center
    gap-[2rem] py-[5rem]
">
        <h1 className="
        w-full
        text-[4rem]
        ">What I do</h1>
    {Object.values(ListofCardData).map(card =>
        <CardWithIcon
        key = {card.CardTitle}
        cardData={card}
        />
    )}


</section>

    )
}

export default WhatIDo;