import {WhoIAm, MyPhilosophy, MyCredentials, MyTechnicalExpertise} from '../../components/aboutMe.js';
import DividerWithIcon from "../../src/components/common/DividerWithIcon.jsx"
import { useEffect } from 'react';
function AboutPage(){
    useEffect(() => {document.title = "About | My Portfolio";}, []);
    const dividerColor ={
        dividerColorOne: "#D2AF92",
        dividerColorTwo: "#f3ebe2",
    }
    return(
    <main>
        <WhoIAm/>
        <DividerWithIcon dividerColor={dividerColor.dividerColorTwo} />
        {/*<MyPhilosophy/>*/}
        <MyCredentials/>
        <DividerWithIcon dividerColor={dividerColor.dividerColorOne} />
        <MyTechnicalExpertise/>
    </main>
    )
}
export default AboutPage;