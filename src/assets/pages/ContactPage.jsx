import {SendEmailDirectCard} from '../../components/contact.js';
import { useEffect } from 'react'
import LinkedinIcon from "../img/contact/linkedinIcon.svg";
import OutlookIcon from "../img/contact/outlookIcon.svg";
import GithubIcon from "../img/contact/githubIcon.svg";
import ButtonList from "../../components/common/ButtonList.jsx";
function ContactPage(){
    useEffect(() => {document.title = "Contact | My Portfolio";}, []);
    const LinkData = {
        LinkedInData:{icon: LinkedinIcon, buttonText: "Message me on Linked in!", onClick: () => openLink("https://www.linkedin.com/in/francis-emmanuel-anciro-949073329/") },
        OutlookData:{icon: OutlookIcon, buttonText: "Send me an email!", onClick: () => openLink("mailto:fdanciro@student.apc.edu.ph") },
        GithubData:{icon: GithubIcon, buttonText: "Check my github!", onClick: () => openLink("https://github.com/francis-anciro") },
    }
    function openLink(url){
        window.open(url, "_blank", "noopener,noreferrer");
    }
    return (
        <main
            className="
    /* 1. CONTAINER SETUP */
    relative z-0                /* Establishes a stacking context */
    bg-[#2B1E1A]                /* The dark color that shows through the faded image */
    h-[93.5vh] w-full
    overflow-hidden

    /* 2. BACKGROUND IMAGE LAYER (The Pseudo-element) */
    before:content-['']         /* Required to create the element */
    before:absolute
    before:inset-0              /* Stretches it to fill the screen */
    before:-z-10                /* Puts it BEHIND your text */
    before:bg-[url(https://c1.wallpaperflare.com/preview/427/745/192/notebook-natural-laptop-macbook.jpg)]
    before:bg-no-repeat
    before:bg-cover
    before:bg-center
    before:opacity-30           /* <--- CONTROL OPACITY HERE (0 to 100) */

    /* 3. CONTENT ALIGNMENT */
    flex flex-wrap
    justify-evenly
    content-center
    items-center
    text-center
    gap-[2rem]
    "

        >
            <h1 id='contactPageTitle' className="
                w-full
                text-center
                text-[4rem]
                font-bold
                m-0
            ">Contact Me</h1>
                <ul>
                    {Object.values(LinkData).map(link =>
                        <ButtonList
                            key={link.buttonText}
                            buttonData={link}
                        />
                    )}
                </ul>
                <SendEmailDirectCard/>
        </main>
    )
}
export default ContactPage;