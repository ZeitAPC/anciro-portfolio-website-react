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
import SoftwareDevIcon from "../../assets/img/globalImg/softwareDevIcon.svg"
import ToolsIcon from "../../assets/img/globalImg/toolsIcon.svg";
import NetworkingIcon from "../../assets/img/homepage/networkingIcon.svg";
import ButtonList from "../common/ButtonList.jsx"
function MyCredentials() {
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState({
        src: "", 
        caption: ""
    })
    function showModal(src, caption) {
        setModalContent({ src, caption });
        setModal(true);
    }
    const SoftwareDevCertificateData = {
        FoundationsOfAlgorithmicThinking: {icon: SoftwareDevIcon, buttonText: "Foundations of Algorithmic Thinking",onClick: () => showModal(Cert_FoundationsofAlgorithmicThinking, "Foundations of Algorithmic Thinking")},
        FundamentalsofDynamicProgramming: {icon: SoftwareDevIcon, buttonText: "Fundamentals of Dynamic Programming",onClick: () => showModal(Cert_FundamentalsofDynamicProgramming, "Fundamentals of Dynamic Programming")},
        DataStructuresLinkedList: {icon: SoftwareDevIcon, buttonText: "Data Structures: Linked List",onClick: () => showModal(Cert_PythonDataStructuresLinkedLists, "Data Structures: Linked List")},
        DataStructuresStacksQueuesAndDequeue: {icon: SoftwareDevIcon, buttonText: "Data Structures: Stacks, Queues, and Dequeue",onClick: () => showModal(Cert_PythonDataStructuresStacksDequesandQueues, "Data Structures: Stacks, Queues, and Dequeue")},
        DataStructuresTrees: {icon: SoftwareDevIcon, buttonText: "Data Structures: Trees",onClick: () => showModal(Cert_PythonDataStructuresTrees, "Data Structures: Trees")},
        PythonRecursion: {icon: SoftwareDevIcon, buttonText: "Python Recursion",onClick: () => showModal(Cert_PythonRecursion, "Python Recursion")},
    }
    const NetworkingCertificateData = {
        NetworkingBasics:{icon: NetworkingIcon, buttonText: "Networking Basics",onClick: () => showModal(Cert_NetworkingBasics, "Networking Basics")}
    }
    const ToolsCertificateData = {
        MasterMicrosoftTeams:{icon: ToolsIcon, buttonText: "Master Microsoft Teams",onClick: () => showModal(Cert_MasterMicrosoftTeams, "Master Microsoft Teams")}
    }
    return(
            <section className="
            p-[1rem]
            flex
            flex-row
            flex-wrap
            justify-center
            gap-x-[7rem]">

            <h1 className="
            text-[4rem]
            w-[100%]
            text-center
            my-[2rem]">My credentials</h1>

            <h2 className="
            text-[3rem]
            w-[100%]
            text-center
            my-[2rem]">Certifications</h2>
            <ul>
                <li>
                    <h2 className="text-[2rem]">Software Dev</h2>
                </li>
                {Object.values(SoftwareDevCertificateData).map(btn =>
                <ButtonList
                    key={btn.buttonText}
                    buttonData={btn}
                />
                )}
            </ul>
            <ul>
                <li>
                    <h2 className="text-[2rem]">Networking</h2>
                </li>
                {Object.values(NetworkingCertificateData).map(btn =>
                <ButtonList
                    key={btn.buttonText}
                    buttonData={btn}
                />)}

                <li>
                    <h2 className="text-[2rem]">Tools</h2>
                </li>
                {Object.values(ToolsCertificateData).map(btn =>
                <ButtonList
                    key={btn.buttonText}
                    buttonData={btn}
                />
                )}
            </ul>


{modal && (
  <div
    className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-[#3B2F2F]/80 "
    onClick={() => setModal(false)}
  >
    <div
      className="popUpImageWrapper max-w-[90vw] max-h-[80vh] object-contain block my-0 mx-auto"
      onClick={e => e.stopPropagation()}
    >
      <img src={modalContent.src} alt={modalContent.caption} className="max-w-[90vw] max-h-[80vh] object-contain block my-0 mx-auto"/>
    </div>
    <div className="block w-[80%] max-w-[700px] text-center text-[#ccc] py-[10px] size-[20px]">{modalContent.caption}</div>
  </div>
)}
        </section>

)}

export default MyCredentials;