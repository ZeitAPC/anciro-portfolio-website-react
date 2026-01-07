import SendEmailDirectCard from '../components/Contact/SendEmailDirectCard.jsx';
import { useEffect } from 'react';
import {LinkedInIcon, OutlookIcon, GithubIcon} from "../assets/img/contact/index.js";
import {ButtonItem, DividerWithIcon} from "../components/common/index.js";

function ContactPage(){
    // This component is to show various ways to connect with me.
    // Links to my GitHub, LinkedIn, and Outlook
    // And a direct way to email me from the page

    useEffect(() => {document.title = "Contact | My Projects";}, []); //Change the page title when loaded

    // Links for connecting with me under one object for easy mapping to ButtonItem Component
    const LinkData = {
        LinkedInData:{icon: LinkedInIcon, buttonText: "Message me on Linked in!", onClick: () => openLink("https://www.linkedin.com/in/francis-emmanuel-anciro-949073329/") },
        OutlookData:{icon: OutlookIcon, buttonText: "Send me an email!", onClick: () => openLink("mailto:fdanciro@student.apc.edu.ph") },
        GithubData:{icon: GithubIcon, buttonText: "Check my github!", onClick: () => openLink("https://github.com/francis-anciro") },
    }

    // Faded bg image
    const mainBeforeBG = "before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[url(https://c4.wallpaperflare.com/wallpaper/826/178/391/coffee-beans-hot-cup-coffee-bag-wallpaper-preview.jpg)] before:bg-no-repeat before:bg-cover before:bg-center before:opacity-10";

    //Open external links
    const openLink = (url) => {
        window.open(url, "_blank", "noopener,noreferrer"); //noopener and noreferrer are used for security
    }
    return (
    <>
        <main
            className={`h-[78vh] w-full overflow-hidden flex flex-wrap justify-evenly content-center items-center text-center gap-[2rem] ${mainBeforeBG}`}>
            <h1 id='contactPageTitle' className="w-full text-center text-[4rem] font-bold m-0">
                CONTACT ME
            </h1>
                <ul>
                    {Object.values(LinkData).map(link =>
                        <ButtonItem
                            key={link.buttonText}//Needed for react to render element
                            buttonData={link}/>//Pass data to the component
                    )}
                </ul>

            {/*Component for the email form*/}
            <SendEmailDirectCard/>
        </main>
        <DividerWithIcon/>
    </>
)
}
export default ContactPage;