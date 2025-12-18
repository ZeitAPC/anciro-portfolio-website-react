import { useState } from "react";
import {Cert_FoundationsofAlgorithmicThinking, 
        Cert_FundamentalsofDynamicProgramming,
        Cert_MasterMicrosoftTeams,
        Cert_NetworkingBasics,
        Cert_PythonDataStructuresLinkedLists,
        Cert_PythonDataStructuresStacksDequesandQueues,
        Cert_PythonDataStructuresTrees,
        Cert_PythonRecursion,
} from "../AboutPageComponents/ListOfCredentials"
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
    return(
        <>
            <section id="myCredentialsContainer">
            <h1 className="sectionTitle">My credentials</h1>
            <ul id="listOfCertification">
                <li><h2>Software Dev</h2></li>
                <li className="certifications software ">
                    <button className="showCertification btn btn-primary btn-lg" 
                    onClick={() => showModal(Cert_FoundationsofAlgorithmicThinking,
                    "Foundations of Algorithmic Thinking")}>
                    Foundations of Algorithmic Thinking</button>
                </li>
                <li className="certifications software ">
                    <button className="showCertification btn btn-primary btn-lg" 
                    onClick={() => showModal(Cert_FundamentalsofDynamicProgramming,
                    "Fundamentals of Dynamic Programming")}>
                    Fundamentals of Dynamic Programming</button>
                </li>

                <li className="certifications software ">
                    <button className="showCertification btn btn-primary btn-lg" 
                    onClick={() => showModal(Cert_PythonDataStructuresLinkedLists,
                    "Data Structures: Linked List")}>
                    Data Structures: Linked List</button>
                </li>
                <li className="certifications software ">
                    <button className="showCertification btn btn-primary btn-lg" 
                    onClick={() => showModal(Cert_PythonDataStructuresStacksDequesandQueues,
                    "Data Structures: Stacks, Queues, and Dequeue")}>
                    Data Structures: Stacks, Queues, and Dequeue</button>
                </li>
                <li className="certifications software ">
                    <button className="showCertification btn btn-primary btn-lg" 
                    onClick={() => showModal(Cert_PythonDataStructuresTrees,
                    "Data Structures: Trees")}>
                    Data Structures: Trees</button>
                </li>
                <li className="certifications software ">
                    <button className="showCertification btn btn-primary btn-lg" 
                    onClick={() => showModal(Cert_PythonRecursion,
                    "Python Recursion")}>
                    Python Recursion</button>
                </li>
            </ul>
            <ul>
                <li><h2>Networking</h2></li>
                <li className="certifications networking ">
                    <button className="showCertification btn btn-primary btn-lg"
                    onClick={() => showModal(Cert_NetworkingBasics,
                    "Networking Basics")}>
                    Networking Basics</button>
                </li>
                <li><h2>Tools</h2></li>
                <li className="certifications tools ">
                    <button className="showCertification btn btn-primary btn-lg" 
                    onClick={() => showModal(Cert_MasterMicrosoftTeams,
                    "Master Microsoft Teams")}>
                    Master Microsoft Teams</button>
                </li>

            </ul>
        </section>
{modal && (
  <div
    className="popUpCertification"
    onClick={() => setModal(false)}
  >
    <div
      className="popUpImageWrapper"
      onClick={e => e.stopPropagation()} // only stops clicks on the image
    >
      <img src={modalContent.src} alt={modalContent.caption} />
    </div>
    <div className="popUpCaption">{modalContent.caption}</div>
  </div>
)}


        </>
)}

export default MyCredentials;
            // <nav id="projectNav">
            //     <button onclick="certificationFilter('')">All certifications</button>
            //     <button onclick="certificationFilter('software')">Software Developer</button>
            //     <button onclick="certificationFilter('networking')">Networking</button>
            //     <button onclick="certificationFilter('tools')">Tools</button>
            // </nav>
                            // <button id="clickToViewCV" target="_blank" onclick="window.open('../pdf/AnciroResume.pdf', '_blank');">Click to view my resume</button>
