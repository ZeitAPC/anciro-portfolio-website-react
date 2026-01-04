import ProjectHistory from "../../components/PortfolioPageComponents/ProjectHistory"
import { useEffect } from "react";
import DividerWithIcon from "../../components/common/DividerWithIcon.jsx";
function PortfolioPage(){
    useEffect(() => {document.title = "Portfolio | My Portfolio";}, []);

    return(
        <main>
            <ProjectHistory/>
            <DividerWithIcon/>
        </main>
    )
}
export default PortfolioPage;