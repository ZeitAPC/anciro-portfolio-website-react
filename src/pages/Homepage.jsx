import { useEffect } from 'react';
import {MainHeroCard, WhatIDo, MyCredentials} from "../components/Homepage"
import {DividerWithIcon} from "../components/common/"
function Homepage(){
    useEffect(() => {document.title = "Home | My Projects";}, []);
    return(
        <>
        <MainHeroCard />
        <DividerWithIcon/>
        <WhatIDo />
        <DividerWithIcon/>
        <MyCredentials/>
        <DividerWithIcon/>
        </>
    )
}
export default Homepage;