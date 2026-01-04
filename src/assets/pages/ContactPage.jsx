import {SendEmailDirectCard} from '../../components/contact.js';
import { useEffect } from 'react'
import LinkedinIcon from "../img/contact/linkedinIcon.svg";
import OutlookIcon from "../img/contact/outlookIcon.svg";
import GithubIcon from "../img/contact/githubIcon.svg";
import ButtonList from "../../components/common/ButtonList.jsx";
import DividerWithIcon from "../../components/common/DividerWithIcon.jsx";
function ContactPage(){
    useEffect(() => {document.title = "Contact | My Portfolio";}, []);
    const LinkData = {
        LinkedInData:{icon: LinkedinIcon, buttonText: "Message me on Linked in!", onClick: () => openLink("https://www.linkedin.com/in/francis-emmanuel-anciro-949073329/") },
        OutlookData:{icon: OutlookIcon, buttonText: "Send me an email!", onClick: () => openLink("mailto:fdanciro@student.apc.edu.ph") },
        GithubData:{icon: GithubIcon, buttonText: "Check my github!", onClick: () => openLink("https://github.com/francis-anciro") },
    }
    const mainBeforeBG = "before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[url(https://c4.wallpaperflare.com/wallpaper/826/178/391/coffee-beans-hot-cup-coffee-bag-wallpaper-preview.jpg)] before:bg-no-repeat before:bg-cover before:bg-center before:opacity-10";
    const mainStyle = "h-[78vh] w-full overflow-hidden flex flex-wrap justify-evenly content-center items-center text-center gap-[2rem]"
    const mainClass = `${mainBeforeBG} ${mainStyle}`

    const pageTitle = " w-full text-center text-[4rem] font-bold m-0"
    function openLink(url){
        window.open(url, "_blank", "noopener,noreferrer");
    }
    return (
        <>
        <main
            className={mainClass}>
            <h1 id='contactPageTitle' className={pageTitle}>CONTACT ME</h1>
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
    <DividerWithIcon/>
</>
)
}
export default ContactPage;