import { useEffect } from 'react';
import {MainHeroCard, WhatIDo, CallToAction} from '../../components/index';
import DividerWithIcon from "../../components/common/DividerWithIcon.jsx"
function Homepage(){
    useEffect(() => {document.title = "Home | My Portfolio";}, []);
    const dividerColor ={
        dividerColorOne: "#D2AF92",
        dividerColorTwo: "#f3ebe2",

    }
    return(
        <>
        <MainHeroCard />
        <DividerWithIcon dividerColor={dividerColor.dividerColorTwo}/>
        <WhatIDo />
        <DividerWithIcon dividerColor={dividerColor.dividerColorOne}/>
        <CallToAction />
        </>
    )
}
export default Homepage;