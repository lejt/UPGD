import "./CategoryListPeripherals.css";

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
    }

    let searchQ;
    let categoryDisplay;

    switch (pageCategory) {
        case "allProducts":
            searchQ = categoryLookup.allProducts.searchQuery;
            categoryDisplay = categoryLookup.allProducts.selector;
            break;
        case "peripherals":
            searchQ = categoryLookup.peripherals.searchQuery;
            categoryDisplay = categoryLookup.peripherals.selector;
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