import {CardWithIcon} from "../common/";
import {barangayTaskManagerIcon, directClothingIncIcon, ecoPathFinder, weatherAppIcon} from "../../assets/img/project/";

function ProjectHistory() {
  // All project data under one object for organization and easy mapping to CardWithIcon component
  const ProjectData = {
    //Data for EcoPathFinder card
    EcoPathFinder : {
      CardIcon: ecoPathFinder,
      CardTitle: "EcoPathFinder",
      CardText: "A python app developed to find apps based on fuel efficiency",
      ButtonText: "Download EcoPathFinder app",
      ButtonFunction: () => {window.location.href = "/anciro-portfolio-website-react/files/EcoPathFinder.exe";}
    },

    //Data for Barangay Task Manager card
    BarangayTaskManager : {
      CardIcon: barangayTaskManagerIcon,
      CardTitle: "Barangay Task Manager",
      CardText: "A python app developed to for suggesting and voting on the next barangay project",
      ButtonText: "Download Barangay Task Manager app",
      ButtonFunction: () => {  window.location.href = "/anciro-portfolio-website-react/files/BarangayTaskManager.exe";},
    },

    //Data for Direct Clothing Inc card
    DirectClothingInc : {
      CardIcon: directClothingIncIcon,
      CardTitle: "Direct Clothing Inc",
      CardText: "A java app developed to for Direct Clothing Inc to provide online shopping option",
      ButtonText: "Download DirectClothingInc.zip",
      ButtonFunction: () => {window.location.href = "/anciro-portfolio-website-react/files/com.zip";},
    },
    WeatherApp: {
      CardIcon: weatherAppIcon,
      CardTitle: "Weather App",
      CardText: "A weather app to check the weather of a city",
      ButtonText: "Download WeatherApp",
      ButtonFunction: () => {window.location.href = "/anciro-portfolio-website-react/files/WeatherApp.exe";},
    },
  }
  // Faded bg image. ::before is used to position it behind the content and achieve the fading effect
  const mainBG ="before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[url(https://c4.wallpaperflare.com/wallpaper/598/508/1011/coffee-spoon-cup-bag-wallpaper-preview.jpg)] before:bg-no-repeat before:bg-cover before:bg-center before:opacity-10 before:shadow-[inset_0px_-20px_20px_20px_#2B1E1A]";

  return(
<main className={`flex flex-wrap justify-evenly text-center gap-[2rem] py-[4rem] ${mainBG}`}>
  <h1 className="text-[#FFF1DC] font-bold text-[4rem] w-full">MY PROJECTS</h1>

  {/* Render each card from the data object */}
  {Object.values(ProjectData).map(card =>
      <CardWithIcon
          key = {card.CardTitle} //Needed for react to render element
          cardData={card}// Pass the data to the card component
      />
  )}
</main>
)}
export default ProjectHistory;