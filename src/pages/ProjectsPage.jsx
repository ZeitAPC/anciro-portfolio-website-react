import ProjectHistory from "../components/Projects/ProjectHistory.jsx";
import { useEffect } from "react";
import DividerWithIcon from "../components/common/DividerWithIcon.jsx";
function ProjectsPage(){
    // This component is a wrapper for all components to be shown in Projects page
    useEffect(() => {document.title = "Projects | My Projects";}, []); //Used to change page title when loaded
    return(
        <main>
            <ProjectHistory/>
            <DividerWithIcon/>
        </main>
    )
}
export default ProjectsPage;