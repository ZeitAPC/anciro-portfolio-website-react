import { useEffect } from 'react';
import {MainHeroCard, WhatIDo} from '../../components/index';
function Homepage(){
    useEffect(() => {document.title = "Home | My Portfolio";}, []);
    return(
        <>
        <MainHeroCard />
        <WhatIDo />
        </>
    )
}
export default Homepage;