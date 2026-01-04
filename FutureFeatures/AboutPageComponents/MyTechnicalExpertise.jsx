import ToolsIcon from "../../src/assets/img/globalImg/toolsIcon.svg"
import CardWithIcon from "../../src/components/common/CardWithIcon.jsx"
function MyTechnicalExpertise() {

    const ToolsData = {
        CardIcon: ToolsIcon, CardTitle: "My tools", CardText: "Git, Github, Intellij, Pycharm, VirtualBox"
    }

    return(
            <section className="px-[1rem] py-[1rem] flex flex-row flex-wrap justify-center gap-x-[7rem] bg-[#D2AF92]">
            <h1 className="text-[4rem] w-[100%] text-center my-[2rem]">My technical expertise</h1>
            <ul id="programmingLanguages"  className="list-group">
                <li className="listTitle active list-group-item"><h2>Programming language</h2></li>
                <li className="list-group-item">Java</li>
                <li className="list-group-item">Python</li>
                <li className="list-group-item">TypeScript</li>
                <li className="list-group-item">JavaScript</li>
                <li className="list-group-item">HTML & CSS</li>
            </ul>

            <ul id="Tools">
                <li className="listTitle active list-group-item"><h2>Tools</h2></li>       
                <li className="list-group-item">Git</li>
                <li className="list-group-item">GitHub</li>
                <li className="list-group-item">VS Code</li>
                <li className="list-group-item">Intellij</li>
                <li className="list-group-item">PyCharm</li>
                <li className="list-group-item">Cisco Packet Tracer</li>
                <li className="list-group-item">Microsoft Office programs</li>
            </ul>
            <ul id="frameworksAndDatabases">
                <li className="listTitle active list-group-item"><h2>Frameworks</h2></li>
                <li className="list-group-item">Bootstrap</li>
                <li className="listTitle active list-group-item"><h2>Databases</h2></li>
                <li className="list-group-item">MySQL</li>
            </ul>
            <CardWithIcon cardData={ToolsData} />
        </section>
)}
export default MyTechnicalExpertise;