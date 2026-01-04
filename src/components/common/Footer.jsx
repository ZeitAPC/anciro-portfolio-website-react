function Footer(){return(
    <section className=" flex flex-col items-center">
        <h1 className="font-bold text-[3rem]">Francis Anciro</h1>

        <div className="flex flex-row items-center">
        <svg xmlns="http://www.w3.org/2000/svg"  height="20" viewBox="0 0 24 24" fill="none" stroke="#ffe9c0"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             className="lucide lucide-copyright-icon lucide-copyright">
            <circle cx="12" cy="12" r="10"/>
            <path d="M14.83 14.83a4 4 0 1 1 0-5.66"/>
        </svg>
            <p className="leading-none">All rights reserved.</p>
        </div>
    </section>
)
}

export default Footer