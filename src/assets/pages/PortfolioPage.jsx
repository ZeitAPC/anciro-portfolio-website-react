import ProjectHistory from "../../components/PortfolioPageComponents/ProjectHistory"
import { useEffect } from "react";
function PortfolioPage(){
    useEffect(() => {document.title = "Portfolio | My Portfolio";}, []);

    return(
        <>
        <main id="portfolioPageMain">
            <ProjectHistory/>
        </main>
        </>
    )
}
export default PortfolioPage;