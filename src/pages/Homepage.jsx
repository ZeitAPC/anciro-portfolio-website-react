import { useEffect } from 'react';
import {HeroCard, WhatIDo, MyCredentials} from "../components/Homepage";
import {DividerWithIcon} from "../components/common/";
function Homepage(){
    // This component is a wrapper for all other components to be shown on the home page
    useEffect(() => {document.title = "Home | My Projects";}, []);
    return(
        // DividerWithIcon is a just for design
        <>
        <HeroCard />
        <DividerWithIcon/>
        <WhatIDo />
        <DividerWithIcon/>
        <MyCredentials/>
        <DividerWithIcon/>
        </>
    )
}
export default Homepage;