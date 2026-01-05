import ProjectHistory from "../components/Projects/ProjectHistory.jsx"
import { useEffect } from "react";
import DividerWithIcon from "../components/common/DividerWithIcon.jsx";
function ProjectsPage(){
    useEffect(() => {document.title = "Projects | My Projects";}, []);

    return(
        <main>
            <ProjectHistory/>
            <DividerWithIcon/>
        </main>
    )
}
export default ProjectsPage;