import {LinkedInCard, OutlookCard, SendEmailDirectCard} from '../../components/contact.js';
import { useEffect } from 'react'
function ContactPage(){
    useEffect(() => {document.title = "Contact | My Portfolio";}, []);

    return (
        <main id='contactPageMain'>
            <h1 id='contactPageTitle'>Contact Page</h1>
            <LinkedInCard/>
            <OutlookCard/>
            <SendEmailDirectCard/>
        </main>
    )
}
export default ContactPage;