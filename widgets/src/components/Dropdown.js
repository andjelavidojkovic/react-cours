import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(); //we take the ref object and asigned it to one element inside or one element we are returning from this object
    //in our case we want to get a reference from the most parent element that we are return from our component - class ui form 

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) { // .contains is going to see whethere the event.target is in the ref.current, if it is then do nothing
                return;
            }
            setOpen(false);
        };

        //{ capture: true }

        document.body.addEventListener('click', onBodyClick, { capture: true });

        return () => {  // when we return a function from the useEffect, that funtion from return is going to be called 
            //right before the next time that this funtion (useEffect) is called
            //another time this function is going to get called (invoked), and that is whenever we are about to spot showing the entire component on the screen 
            //that is why it's called the cleanup function 
            document.body.removeEventListener('click', onBodyClick, { capture: true });
        };
    }, []); // we need to set up the EventListener only one time! so that is why we write []

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null; // null in react means don't render anything
        }
        return (
            <div
                key={option.value}
                className="item"
                onClick={() => onSelectedChange(option)}>
                {option.label}
            </div>
        )
    })

    //console.log(ref.current);

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label"> {label} </label>
                <div
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;