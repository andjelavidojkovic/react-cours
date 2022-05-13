import React, { useState } from "react";
import Accordion from "./components/Accordion"
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Route from "./components/Route";
import Search from "./components/Search";
import Translate from "./components/Translate";

const items = [
    {
        title: 'What is React?',
        content: 'React is a front and javascript framework.'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers.'
    },
    {
        title: 'How do you use React',
        content: 'You use React by creating components.'
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blu'
    }
]

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [selected, setSelected] = useState(options[0]);
    //const [showDropdown, setShowDropdown] = useState(true);

    return (
        /* <div>
             <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Button</button>
             {showDropdown ?
                 <Dropdown
                     selected={selected}
                     onSelectedChange={setSelected}
                     options={options}
                 /> : null
             }
         </div> */
        <div>
            <Header />
            <Route path='/'>
                <Accordion items={items} />
            </Route>
            <Route path='/list'>
                <Search />
            </Route>
            <Route path='/dropdown'>
                <Dropdown
                    label='Select a color'
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
        </div>
    )
};