function MyCredentials() {return(
            <section id="myCredentialsContainer">
            <h1 class="sectionTitle">My credentials</h1>
            <nav id="projectNav">
                <button onclick="certificationFilter('')">All certifications</button>
                <button onclick="certificationFilter('software')">Software Developer</button>
                <button onclick="certificationFilter('networking')">Networking</button>
                <button onclick="certificationFilter('tools')">Tools</button>
            </nav>
            <ul id="listOfCertification">
                <li class="certifications software">
                    <button class="showCertification" onclick="showCertification('../images/certifications/FoundationsofAlgorithmicThinkingwithPython.jpg', 'Foundations of Algorithmic Thinking with Python')">Foundations of Algorithmic Thinking</button>
                </li>
                <li class="certifications software">
                    <button class="showCertification" onclick="showCertification('../images/certifications/FundamentalsofDynamicProgramming.jpg', 'Fundamentals of Dynamic Programming')">Fundamentals of Dynamic Programming</button>
                </li>
                <li class="certifications tools">
                    <button class="showCertification"  onclick="showCertification('../images/certifications/MasterMicrosoftTeams.jpg', 'Master Microsoft Teams')">Master Microsoft Teams</button>
                </li>
                <li class="certifications networking">
                    <button class="showCertification" onclick="showCertification('../images/certifications/NetworkingBasics.jpg', 'Networking Basics')">Networking Basics</button>
                </li>
                <li class="certifications software">
                    <button class="showCertification" onclick="showCertification('../images/certifications/PythonDataStructuresLinkedLists.jpg', 'Data Structures: Linked List')">Data Structures: Linked List</button>
                </li>
                <li class="certifications software">
                    <button class="showCertification" onclick="showCertification('../images/certifications/PythonDataStructuresStacksDequesandQueues.jpg', 'Data Structures: Stacks, Queues, and Dequeue')">Data Structures: Stacks, Queues, and Dequeue</button>
                </li>
                <li class="certifications software">
                    <button class="showCertification" onclick="showCertification('../images/certifications/PythonDataStructuresTrees.jpg', 'Data Structures: Trees')">Data Structures: Trees</button>
                </li>
                <li class="certifications software">
                    <button class="showCertification" onclick="showCertification('../images/certifications/PythonRecursion.jpg', 'Python Recursion')">Python Recursion</button>
                </li>
            </ul>
            <button id="clickToViewCV" target="_blank" onclick="window.open('../pdf/AnciroResume.pdf', '_blank');">Click to view my resume</button>
        </section>
)}
function ShowCertification() {
 return (        <section id="popUpCertification">
            <figure class="popUpContent"></figure>
            <p id="caption"></p>
        </section>)}

export default MyCredentials;
export {ShowCertification};
        