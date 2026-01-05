import SendEmailDirectCard from '../components/Contact/SendEmailDirectCard.jsx';
import { useEffect } from 'react'
import {LinkedInIcon, OutlookIcon, GithubIcon} from "../assets/img/contact/index.js"
import {ButtonList, DividerWithIcon} from "../components/common/index.js"

function ContactPage(){
    useEffect(() => {document.title = "Contact | My Projects";}, []); //Change the page title
    const LinkData = {
        LinkedInData:{icon: LinkedInIcon, buttonText: "Message me on Linked in!", onClick: () => openLink("https://www.linkedin.com/in/francis-emmanuel-anciro-949073329/") },
        OutlookData:{icon: OutlookIcon, buttonText: "Send me an email!", onClick: () => openLink("mailto:fdanciro@student.apc.edu.ph") },
        GithubData:{icon: GithubIcon, buttonText: "Check my github!", onClick: () => openLink("https://github.com/francis-anciro") },
    }
    const mainBeforeBG = "before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[url(https://c4.wallpaperflare.com/wallpaper/826/178/391/coffee-beans-hot-cup-coffee-bag-wallpaper-preview.jpg)] before:bg-no-repeat before:bg-cover before:bg-center before:opacity-10";
    const mainStyle = "h-[78vh] w-full overflow-hidden flex flex-wrap justify-evenly content-center items-center text-center gap-[2rem]"
    const mainClass = `${mainBeforeBG} ${mainStyle}`
    const openLink = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    } //Open contact links
    return (
        <>
        <main
            className={mainClass}>
            <h1 id='contactPageTitle' className="w-full text-center text-[4rem] font-bold m-0">
                CONTACT ME
            </h1>
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