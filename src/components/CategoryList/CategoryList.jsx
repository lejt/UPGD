import "./CategoryList.css";
import {useState} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export default function CategoryList({pageCategory, searchProducts}) {

    const categoryLookup = {
        allProducts : 
            {
                searchQuery: ['CPU', 'Video', 'Motherboard', 'Case', 'Fan', 'Power'],
                selector : ['CPU', 'GPU', 'Motherboards', 'Computer Case', 'Fans & PC Cooling', 'Power Supplies'],
            },
        peripherals :
            {
                searchQuery: ['Mouse', 'Keyboard', 'Headphones', 'Microphone', 'Webcam'],
                selector : ['Mice', 'Keyboard', 'Headphones', 'Ext. Microphones', 'Webcams'],
            },
        accessories :
            {
                searchQuery: ['mat', 'router', 'cable', 'adapter', 'paste'],
                selector : ['Mouse Pad/ Desk Mat', 'Router', 'Cables', 'Adapters', 'Thermal Paste'],
            },
    }

    let searchQ;
    let categoryDisplay;

    switch (pageCategory) {
        case "all Products":
            searchQ = categoryLookup.allProducts.searchQuery;
            categoryDisplay = categoryLookup.allProducts.selector;
            break;
        case "peripherals":
            searchQ = categoryLookup.peripherals.searchQuery;
            categoryDisplay = categoryLookup.peripherals.selector;
            break;
        case "accessories":
            searchQ = categoryLookup.accessories.searchQuery;
            categoryDisplay = categoryLookup.accessories.selector;
            break;
    }



    return (
        <div className="category_container">
            <h4><strong>CATEGORIES</strong></h4>

            {/* <div className={category ? "dropdown is-active": "dropdown" }> 
                <div className="dropdown-trigger" onClick={handleCatToggle}>
                        
                            <span>Click me</span>
                            <FontAwesomeIcon icon={faAngleDown} />
    
                </div>
                <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                    <div className="dropdown-content">
                        <hr className="dropdown-divider" />
                    </div>
                </div>
            </div> */}

            <ul>
                {searchQ.map((s,idx) => {
                        return (
                            <li onClick={()=> searchProducts(s)}>
                                {categoryDisplay[idx]}
                            </li>
                        )
                    }
                )}
            </ul>


            {/* <ul>
                <li onClick={handleCatToggle1}>
                    CPU
                    {category1 ? <ArrowDropUpIcon/>: <ArrowDropDownIcon/>}
                </li>
                    <div style={category1 ? {display:"block"}: {display:"none"}}>
                        <ul>
                            <li>Intel</li>
                            <li>AMD</li>
                        </ul>
                    </div>
                <li onClick={handleCatToggle2}>
                    GPU
                    {category2 ? <ArrowDropUpIcon/>: <ArrowDropDownIcon/>}
                </li>
                    <div style={category2 ? {display:"block"}: {display:"none"}}>
                        <ul>
                            <li>Intel</li>
                            <li>AMD</li>
                        </ul>
                    </div>
                <li onClick={handleCatToggle3}>
                    Motherboards
                    {category3 ? <ArrowDropUpIcon/>: <ArrowDropDownIcon/>}
                </li>
                    <div style={category3 ? {display:"block"}: {display:"none"}}>
                        <ul>
                            <li>Intel</li>
                            <li>AMD</li>
                        </ul>
                    </div>
                <li onClick={handleCatToggle4}>
                    Computer Cases
                    {category4 ? <ArrowDropUpIcon/>: <ArrowDropDownIcon/>}
                </li>
                    <div style={category4 ? {display:"block"}: {display:"none"}}>
                        <ul>
                            <li>Intel</li>
                            <li>AMD</li>
                        </ul>
                    </div>
                <li onClick={handleCatToggle5}>
                    Fans & PC Cooling
                    {category5 ? <ArrowDropUpIcon/>: <ArrowDropDownIcon/>}
                </li>
                    <div style={category5 ? {display:"block"}: {display:"none"}}>
                        <ul>
                            <li>Intel</li>
                            <li>AMD</li>
                        </ul>
                    </div>
                <li onClick={handleCatToggle6}>
                    Power Supplies
                    {category6 ? <ArrowDropUpIcon/>: <ArrowDropDownIcon/>}
                </li>
                    <div style={category6 ? {display:"block"}: {display:"none"}}>
                        <ul>
                            <li>Intel</li>
                            <li>AMD</li>
                        </ul>
                    </div>
            
            </ul> */}


        </div>
    )
}