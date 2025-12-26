function WhatIDo() {
    return(
<section id="whatIDoContainer">
        <h1 className="whatIDoContainerTitle">What I do</h1>
    <article className="webDevSection cardContainer">
        <figure className="iconContainer">
            <svg xmlns="http://www.w3.org/2000/svg" width="216" height="216" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                 className="lucide lucide-chevrons-left-right-ellipsis-icon lucide-chevrons-left-right-ellipsis mainIcon">
                <path d="M12 12h.01"/>
                <path d="M16 12h.01"/>
                <path d="m17 7 5 5-5 5"/>
                <path d="m7 7-5 5 5 5"/>
                <path d="M8 12h.01"/>
            </svg>
        </figure>
        <article className="card-body">
            <h5 className="card-title">Web Development</h5>
            <p className="card-text">HTML, CSS, JS, React Vite, Bootstrap.</p>
        </article>
    </article>

    <article className="softwareDevSection cardContainer">
        <figure className="iconContainer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                 className="lucide lucide-folder-code-icon lucide-folder-code mainIcon">
                <path d="M10 10.5 8 13l2 2.5"/>
                <path d="m14 10.5 2 2.5-2 2.5"/>
                <path
                    d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"/>
            </svg>
        </figure>
        <div className="card-body">
            <h5 className="card-title">Software Development</h5>
            <p className="card-text">Java, Python</p>
        </div>
    </article>

    <article className="cyberSecuritySection cardContainer">
        <figure className="iconContainer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
             className="lucide lucide-brick-wall-shield-icon lucide-brick-wall-shield mainIcon">
            <path d="M12 9v1.258"/>
            <path d="M16 3v5.46"/>
            <path d="M21 9.118V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5.75"/>
            <path
                d="M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z"/>
            <path d="M3 15h7"/>
            <path d="M3 9h12.142"/>
            <path d="M8 15v6"/>
            <path d="M8 3v6"/>
        </svg>
        </figure>
        <div className="card-body">
            <h5 className="card-title">Cybersecurity</h5>
            <p className="card-text">Kali Linux</p>
        </div>
    </article>
    <article className="cloudServiceSection cardContainer">
        <figure className="iconContainer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
             className="lucide lucide-cloud-icon lucide-cloud mainIcon">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
        </svg>
        </figure>
        <div className="card-body">
            <h5 className="card-title">Cloud</h5>
            <p className="card-text">AWS</p>
        </div>

    </article>

</section>

    )
}

export default WhatIDo;