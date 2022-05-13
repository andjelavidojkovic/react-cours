//import React from "react"; //ne moramo da ukljucimo React jer nema JSX 
import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate', onLocationChange);

        return () => { //ako nekad odlucimo da zelimo da prestanemo da prikazujemo ovu komponentu, zato smo i fju onLocationChange napisali kao posebnu fju 
            window.removeEventListener('popstate', onLocationChange)
        }
    }, []);

    return currentPath === path ? children : null;
};

export default Route;