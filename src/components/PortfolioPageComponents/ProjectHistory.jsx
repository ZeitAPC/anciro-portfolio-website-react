import CardWithIcon from "../common/CardWithIcon.jsx"
import EcoPathFinderIcon from "../../assets/img/projectPage/EcoPathFinder.svg"
import DirectClothingIncIcon from "../../assets/img/projectPage/DirectClothingIncIcon.svg"
import BarangayTaskManagerIcon from "../../assets/img/projectPage/BarangayTaskManagerIcon.svg"
function ProjectHistory() {
  const ProjectData = {
    EcoPathFinder : {
      CardIcon: EcoPathFinderIcon,
      CardTitle: "EcoPathFinder",
      CardText: "A python app developed to find apps based on fuel efficiency",
      ButtonText: "Launch EcoPathFinder app",
      ButtonFunction: () => openLink("https://github.com/francis-anciro")
    },
    DirectClothingInc : {
      CardIcon: DirectClothingIncIcon,
      CardTitle: "Direct Clothing Inc",
      CardText: "A java app developed to for Direct Clothing Inc to provide online shopping option",
      ButtonText: "Launch Direct Clothing Inc app",
      ButtonFunction: () => openLink("https://github.com/francis-anciro")
    },
    BarangayTaskManager : {
      CardIcon: BarangayTaskManagerIcon,
      CardTitle: "Barangay Task Manager",
      CardText: "A python app developed to for suggesting and voting on the next barangay project",
      ButtonText: "Launch Barangay Task Manager app",
      ButtonFunction: () => openLink("https://github.com/francis-anciro")
    },
  }
  function openLink(url){
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return(
<main className="bg-[#2B1E1A]
    flex flex-wrap
    justify-evenly
    text-center
    gap-[2rem] py-[7.47rem]">
  <h1 className="text-[#FFF1DC] font-[font-title] text-[4rem] w-full ">MY PROJECTS</h1>
  {Object.values(ProjectData).map(card =>
      <CardWithIcon
          key = {card.CardTitle}
          cardData={card}
      />
  )}
</main>
)}
export default ProjectHistory;