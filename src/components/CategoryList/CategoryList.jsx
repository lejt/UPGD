import "./CategoryList.css";
import {useState} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export default function CategoryList() {
    const [category1, setCategory1] = useState(false);
    const [category2, setCategory2] = useState(false);
    const [category3, setCategory3] = useState(false);
    const [category4, setCategory4] = useState(false);
    const [category5, setCategory5] = useState(false);
    const [category6, setCategory6] = useState(false);

    function handleCatToggle1() {
        setCategory1(!category1)
    }
    function handleCatToggle2() {
        setCategory2(!category2)
    }
    function handleCatToggle3() {
        setCategory3(!category3)
    }
    function handleCatToggle4() {
        setCategory4(!category4)
    }
    function handleCatToggle5() {
        setCategory5(!category5)
    }
    function handleCatToggle6() {
        setCategory6(!category6)
    }

    return (
        <div className="category_container">
            <h4>Categories</h4>

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
                <li onClick={handleCatToggle3}>
                    Computer Cases
                    {category4 ? <ArrowDropUpIcon/>: <ArrowDropDownIcon/>}
                </li>
                    <div style={category4 ? {display:"block"}: {display:"none"}}>
                        <ul>
                            <li>Intel</li>
                            <li>AMD</li>
                        </ul>
                    </div>
                <li onClick={handleCatToggle3}>
                    Fans & PC Cooling
                    {category5 ? <ArrowDropUpIcon/>: <ArrowDropDownIcon/>}
                </li>
                    <div style={category5 ? {display:"block"}: {display:"none"}}>
                        <ul>
                            <li>Intel</li>
                            <li>AMD</li>
                        </ul>
                    </div>
                <li onClick={handleCatToggle3}>
                    Power Supplies
                    {category6 ? <ArrowDropUpIcon/>: <ArrowDropDownIcon/>}
                </li>
                    <div style={category6 ? {display:"block"}: {display:"none"}}>
                        <ul>
                            <li>Intel</li>
                            <li>AMD</li>
                        </ul>
                    </div>
            
            </ul>


        </div>
    )
}