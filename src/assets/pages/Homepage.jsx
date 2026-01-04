import { useEffect } from 'react';
import {MainHeroCard, WhatIDo, CallToAction} from '../../components/index';
import MyCredentials from "../../components/HomepageComponents/MyCredentials.jsx";
import DividerWithIcon from "../../components/common/DividerWithIcon.jsx"
function Homepage(){
    useEffect(() => {document.title = "Home | My Portfolio";}, []);
    return(
        <>
        <MainHeroCard />
        <DividerWithIcon/>
        <WhatIDo />
        <DividerWithIcon/>
        <MyCredentials />
        </>
    )
}
export default Homepage;