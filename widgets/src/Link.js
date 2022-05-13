import React from "react";

const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        if (event.metaKey || event.ctrlKey) { //ako su pritisnuta neka od ova dva tastera, uradi ono sto i obicnno
            return;
        }
        event.preventDefault();
        window.history.pushState({}, '', href); // obezbedili smo da se URL pravilno menja, ali nas ne vodi do trazebe stranice

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent); //sad moramo u Route componet da napisemo kod koji ce slusa ovaj event
    }

    return (
        <a
            onClick={onClick}
            href={href}
            className={className}
        >
            {children}
        </a>
    )
}

export default Link;