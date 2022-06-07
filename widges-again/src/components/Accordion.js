import React, { useState } from "react";

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClicked = (index) => {
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
            <React.Fragment key={item.title}>
                <div
                    className={`title ${active}`} //we want to call that function at some point of time 
                    onClick={() => onTitleClicked(index)} // we still have the arrow function, because if we write only {onTitleClicked(index)}, that function is going to be envoked the instant that our list of items is rendered 
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p> {item.content} </p>
                </div>
            </React.Fragment>
        )
    });
    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    );
};

export default Accordion;