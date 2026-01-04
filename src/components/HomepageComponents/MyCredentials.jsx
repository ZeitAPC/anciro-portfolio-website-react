import { useState } from "react";
import {Cert_FoundationsofAlgorithmicThinking, 
        Cert_FundamentalsofDynamicProgramming,
        Cert_MasterMicrosoftTeams,
        Cert_NetworkingBasics,
        Cert_PythonDataStructuresLinkedLists,
        Cert_PythonDataStructuresStacksDequesandQueues,
        Cert_PythonDataStructuresTrees,
        Cert_PythonRecursion,
} from "../../assets/img/aboutpage/certifications/ExportCertifications.js"

import CardWithIcon from "../common/CardWithIcon.jsx";
import PopUp from "../HomepageComponents/PopUp.jsx";
import SoftwareDevIcon from "../../assets/img/globalImg/softwareDevIcon.svg"
import ToolsIcon from "../../assets/img/globalImg/toolsIcon.svg";
import NetworkingIcon from "../../assets/img/homepage/networkingIcon.svg";
import ResumeIcon from "../../assets/img/homepage/resumeIcon.svg";
import Resume from "../../../public/files/Anciro_Resume.pdf"
import ButtonList from "../common/ButtonList.jsx"
function MyCredentials() {
    const [popUp, setPopUp] = useState(false);
    const [popUpContent, setPopUpContent] = useState({
        src: "", 
        caption: ""
    })
    function showPopUp(src, caption) {
        setPopUpContent({ src, caption });
        setPopUp(true);
    }
    function openLink(url){
        window.open(url, "_blank", "noopener,noreferrer");
    }
    const SoftwareDevCertificateData = {
        FoundationsOfAlgorithmicThinking: {icon: SoftwareDevIcon, buttonText: "Foundations of Algorithmic Thinking",onClick: () => showPopUp(Cert_FoundationsofAlgorithmicThinking, "Foundations of Algorithmic Thinking")},
        FundamentalsofDynamicProgramming: {icon: SoftwareDevIcon, buttonText: "Fundamentals of Dynamic Programming",onClick: () => showPopUp(Cert_FundamentalsofDynamicProgramming, "Fundamentals of Dynamic Programming")},
        DataStructuresLinkedList: {icon: SoftwareDevIcon, buttonText: "Data Structures: Linked List",onClick: () => showPopUp(Cert_PythonDataStructuresLinkedLists, "Data Structures: Linked List")},
        DataStructuresStacksQueuesAndDequeue: {icon: SoftwareDevIcon, buttonText: "Data Structures: Stacks, Queues, and Dequeue",onClick: () => showPopUp(Cert_PythonDataStructuresStacksDequesandQueues, "Data Structures: Stacks, Queues, and Dequeue")},
        DataStructuresTrees: {icon: SoftwareDevIcon, buttonText: "Data Structures: Trees",onClick: () => showPopUp(Cert_PythonDataStructuresTrees, "Data Structures: Trees")},
        PythonRecursion: {icon: SoftwareDevIcon, buttonText: "Python Recursion",onClick: () => showPopUp(Cert_PythonRecursion, "Python Recursion")},
    }
    const NetworkingCertificateData = {
        NetworkingBasics:{icon: NetworkingIcon, buttonText: "Networking Basics",onClick: () => showPopUp(Cert_NetworkingBasics, "Networking Basics")}
    }
    const ToolsCertificateData = {
        MasterMicrosoftTeams:{icon: ToolsIcon, buttonText: "Master Microsoft Teams",onClick: () => showPopUp(Cert_MasterMicrosoftTeams, "Master Microsoft Teams")}
    }
    const ResumeData = {
        Resume: {
        CardIcon: ResumeIcon,
        CardTitle:"Resume",
        ButtonText: "Check my Resume",
        ButtonFunction: () => openLink(Resume)}
    }

    const sectionStyle = "p-[1rem] flex flex-row flex-wrap justify-center gap-x-[7rem] mb-[2rem]";
    const sectionBGI = "before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[url(https://c4.wallpaperflare.com/wallpaper/619/234/514/coffee-cup-breakfast-cup-still-life-photography-wallpaper-preview.jpg)] before:bg-no-repeat before:bg-cover before:bg-center before:opacity-10";
    const sectionClass = `${sectionBGI} ${sectionStyle}`

    const sectionTitle = "text-[4rem] w-[100%] text-center my-[2rem] font-bold";
    const sectionSubtitles = "text-[3rem] w-[100%] text-center my-[2rem] font-semibold"


    return(
        <section className={sectionClass}>
            <h1 className={sectionTitle}>
                My credentials
            </h1>

            <h2 className={sectionSubtitles}>
                Certifications
            </h2>
            <ul>
                <li>
                    <h2 className="text-[2rem]">Software Dev</h2>
                </li>
                {Object.values(SoftwareDevCertificateData).map(btn =>
                <ButtonList
                    key={btn.buttonText}
                    buttonData={btn}/>)}
            </ul>
            <ul>
                <li>
                    <h2 className="text-[2rem]">Networking</h2>
                </li>
                {Object.values(NetworkingCertificateData).map(btn =>
                <ButtonList
                    key={btn.buttonText}
                    buttonData={btn}/>)}

                <li>
                    <h2 className="text-[2rem]">Tools</h2>
                </li>
                {Object.values(ToolsCertificateData).map(btn =>
                <ButtonList
                    key={btn.buttonText}
                    buttonData={btn}/>)}
            </ul>
            <article className="w-full flex items-center flex-col">
                <h2 className={sectionSubtitles}>
                    My Resume
                </h2>
                <CardWithIcon cardData={ResumeData.Resume}/>
            </article>
            <PopUp
                isOpen={popUp}
                onClose={() => setPopUp(false)}
                src={popUpContent.src}
                caption={popUpContent.caption}
            />
        </section>

)}

export default MyCredentials;