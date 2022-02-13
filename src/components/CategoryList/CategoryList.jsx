import "./CategoryList.css";

export default function CategoryList({pageCategory, searchProducts}) {

    // based on category page, will load corresponding category list 
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
        default:
            break;
    }

    return (
        <div className="category_container">
            <h4><strong>CATEGORIES</strong></h4>
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
        </div>
    )
}