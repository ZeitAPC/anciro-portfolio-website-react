import { useState } from "react";
import {Cert_FoundationsofAlgorithmicThinking, 
        Cert_FundamentalsofDynamicProgramming,
        Cert_MasterMicrosoftTeams,
        Cert_NetworkingBasics,
        Cert_PythonDataStructuresLinkedLists,
        Cert_PythonDataStructuresStacksDequesandQueues,
        Cert_PythonDataStructuresTrees,
        Cert_PythonRecursion,
        Cert_ReactEssentialTraining, Cert_TailwindCSS4EssentialTraining,
} from "../../assets/img/homepage/certifications/index.js";

import Resume from "../../../public/files/Anciro_Resume.pdf";

import {PopUp} from "./";
import {devIcon, toolsIcon, networkingIcon, resumeIcon} from "../../assets/img/homepage/";
import {CardWithIcon, ButtonList} from "../../components/common";

function MyCredentials() {
    // This component shows my certifications per category and my resume

    // controls the visibility of certificates
    const [popUp, setPopUp] = useState(false);

    // for displaying certificate and caption
    const [popUpContent, setPopUpContent] = useState({
        src: "", 
        caption: ""
    })

    // show pop up with image and caption
    function showPopUp(src, caption) {
        setPopUpContent({ src, caption });
        setPopUp(true);
    }

    // Open external links
    function openLink(url){
        window.open(url, "_blank", "noopener,noreferrer"); //noopener and noreferrer for security
    }

    // All certificate data under one object for organization and easy mapping to ButtonList component
    const CertificateData = {
        //Data for Web and Software development certificates
        WebAndSoftwareDevCertificateData: {
            FoundationsOfAlgorithmicThinking: {
                icon: devIcon,
                buttonText: "Foundations of Algorithmic Thinking",
                onClick: () => showPopUp(Cert_FoundationsofAlgorithmicThinking, "Foundations of Algorithmic Thinking")
            },
            FundamentalsofDynamicProgramming: {
                icon: devIcon,
                buttonText: "Fundamentals of Dynamic Programming",
                onClick: () => showPopUp(Cert_FundamentalsofDynamicProgramming, "Fundamentals of Dynamic Programming")
            },
            DataStructuresLinkedList: {
                icon: devIcon,
                buttonText: "Data Structures: Linked List",
                onClick: () => showPopUp(Cert_PythonDataStructuresLinkedLists, "Data Structures: Linked List")
            },
            DataStructuresStacksQueuesAndDequeue: {
                icon: devIcon,
                buttonText: "Data Structures: Stacks, Queues, and Dequeue",
                onClick: () => showPopUp(Cert_PythonDataStructuresStacksDequesandQueues, "Data Structures: Stacks, Queues, and Dequeue")
            },
            DataStructuresTrees: {
                icon: devIcon,
                buttonText: "Data Structures: Trees",
                onClick: () => showPopUp(Cert_PythonDataStructuresTrees, "Data Structures: Trees")
            },
            PythonRecursion: {
                icon: devIcon,
                buttonText: "Python Recursion",
                onClick: () => showPopUp(Cert_PythonRecursion, "Python Recursion")
            },
            React: {
                icon: devIcon,
                buttonText: "React Essential Training",
                onClick: () => showPopUp(Cert_ReactEssentialTraining, "React Essential Training")
            },
            TailwindCSS4EssentialTraining: {
                icon: devIcon,
                buttonText: "Tailwind CSS 4 Essential Training",
                onClick: () => showPopUp(Cert_TailwindCSS4EssentialTraining, "Tailwind CSS 4 Essential Training")
            },
        },

        //data for networking certificates
        NetworkingCertificateData: {
            NetworkingBasics: {
                icon: networkingIcon,
                buttonText: "Networking Basics",
                onClick: () => showPopUp(Cert_NetworkingBasics, "Networking Basics")
            },
        },

        //data for tools certificate
        ToolsCertificateData: {
            MasterMicrosoftTeams:{icon: toolsIcon, buttonText: "Master Microsoft Teams",onClick: () => showPopUp(Cert_MasterMicrosoftTeams, "Master Microsoft Teams")},
        },
    }
    //data for resume
    const ResumeData = {
        Resume: {
        CardIcon: resumeIcon,
        CardTitle:"Resume",
        ButtonText: "Check my Resume",
        ButtonFunction: () => openLink(Resume)},
    }

    // Faded bg image. ::before is used to position it behind the content and achieve the fading effect
    const sectionBGI = "before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[url(https://c4.wallpaperflare.com/wallpaper/619/234/514/coffee-cup-breakfast-cup-still-life-photography-wallpaper-preview.jpg)] before:bg-no-repeat before:bg-cover before:bg-center before:opacity-10";

    // Style moved to variable since it is reused
    const sectionSubtitles = "text-[3rem] w-[100%] text-center my-[2rem] font-semibold";

    return(
        <section className={`p-[1rem] flex flex-row flex-wrap justify-center gap-x-[7rem] mb-[2rem] ${sectionBGI}`}>
            <h1 className="text-[4rem] w-[100%] text-center my-[2rem] font-bold">My credentials</h1>

            <h2 className={sectionSubtitles}>Certifications</h2>

            <ButtonList listTitle="Web and Software Development" buttonData={CertificateData.WebAndSoftwareDevCertificateData}/>

            <article>
                <ButtonList listTitle="Networking" buttonData={CertificateData.NetworkingCertificateData}/>
                <ButtonList listTitle="Tools" buttonData={CertificateData.ToolsCertificateData}/>
            </article>

            <article className="w-full flex items-center flex-col">
                <h2 className={sectionSubtitles}>
                    My Resume
                </h2>
                <CardWithIcon cardData={ResumeData.Resume}/>
            </article>

            {/*Handles the certificate image overlay*/}
            <PopUp
                isOpen={popUp}
                onClose={() => setPopUp(false)}
                src={popUpContent.src}
                caption={popUpContent.caption}
            />
        </section>

)}

export default MyCredentials;