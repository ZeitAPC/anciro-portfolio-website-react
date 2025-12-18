import {WhoIAm, MyPhilosophy, MyCredentials, MyTechnicalExpertise} from '../../components/aboutMe';
import { useEffect } from 'react';
function AboutPage(){
    useEffect(() => {document.title = "About | My Portfolio";}, []);
    return(
    <main>
        <WhoIAm/>
        <MyPhilosophy/>
        <MyCredentials/>
        <MyTechnicalExpertise/>
    </main>
    )
}
export default AboutPage;