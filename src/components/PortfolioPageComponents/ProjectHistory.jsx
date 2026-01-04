import CardWithIcon from "../common/CardWithIcon.jsx";
import EcoPathFinderIcon from "../../assets/img/projectPage/EcoPathFinder.svg";
import DirectClothingIncIcon from "../../assets/img/projectPage/DirectClothingIncIcon.svg";
import BarangayTaskManagerIcon from "../../assets/img/projectPage/BarangayTaskManagerIcon.svg";
function ProjectHistory() {
  const ProjectData = {
    EcoPathFinder : {
      CardIcon: EcoPathFinderIcon,
      CardTitle: "EcoPathFinder",
      CardText: "A python app developed to find apps based on fuel efficiency",
      ButtonText: "Download EcoPathFinder app",
      ButtonFunction: () => {window.location.href = "/anciro-portfolio-website-react/files/EcoPathFinder.exe";}
    },
    DirectClothingInc : {
      CardIcon: DirectClothingIncIcon,
      CardTitle: "Direct Clothing Inc",
      CardText: "A java app developed to for Direct Clothing Inc to provide online shopping option",
      ButtonText: "Download DirectClothingInc.zip",
      ButtonFunction: () => {window.location.href = "/anciro-portfolio-website-react/files/com.zip";},
    },
    BarangayTaskManager : {
      CardIcon: BarangayTaskManagerIcon,
      CardTitle: "Barangay Task Manager",
      CardText: "A python app developed to for suggesting and voting on the next barangay project",
      ButtonText: "Download Barangay Task Manager app",
      ButtonFunction: () => {  window.location.href = "/anciro-portfolio-website-react/files/BarangayTaskManager.exe";},
    },
  }
  const mainBG ="before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[url(https://c4.wallpaperflare.com/wallpaper/598/508/1011/coffee-spoon-cup-bag-wallpaper-preview.jpg)] before:bg-no-repeat before:bg-cover before:bg-center before:opacity-10";
  const mainStyle = "flex flex-wrap justify-evenly text-center gap-[2rem] py-[4rem]";
  const mainClass = `${mainBG} ${mainStyle}`;

  const pageTitle = "text-[#FFF1DC] font-bold text-[4rem] w-full";
  return(
<main className={mainClass}>
  <h1 className={pageTitle}>MY PROJECTS</h1>
  {Object.values(ProjectData).map(card =>
      <CardWithIcon
          key = {card.CardTitle}
          cardData={card}
      />
  )}
</main>
)}
export default ProjectHistory;