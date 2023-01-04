import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BillGenerator() {
    const navigate = useNavigate();

    const navigateToNextPage = total => {
        navigate('/bill',
            { state: { items: items } });
    };
    const [items, setItems] = useState([{ description: '', quantity: 0, price: 0 }]);

    const handleAddItem = () => {
        setItems([...items, { description: '', quantity: 0, price: 0 }]);
    };

    const handleDeleteItem = index => {
        setItems(items.filter((item, i) => i !== index));
    };

    const handleInputChange = (event, index) => {
        const { name, value } = event.target;
        const newItems = [...items];
        newItems[index][name] = value;
        setItems(newItems);
    };

    const handleGenerateBill = () => {
        let total = 0;
        items.forEach(item => {
            total += item.quantity * item.price;
        });

        // Navigate to the next page and pass the total bill as a prop
        navigateToNextPage(total);
    };

    return (
        <div>
            {items.map((item, index) => (
                <div key={index} className="m-5">
                    <input
                        name="description"
                        value={item.description}
                        onChange={event => handleInputChange(event, index)}
                        className="border-black border-2 rounded m-3"
                    />
                    <input
                        name="quantity"
                        type="number"
                        value={item.quantity}
                        onChange={event => handleInputChange(event, index)}
                        className="border-black border-2 rounded m-3"
                    />
                    <input
                        name="price"
                        type="number"
                        value={item.price}
                        onChange={event => handleInputChange(event, index)}
                        className="border-black border-2 rounded m-3"
                    />
                    <button type="button" onClick={() => handleDeleteItem(index)} className="btn bg-red-500 text-white rounded-full px-4 py-2">
                        Delete
                    </button>
                </div>
            ))}
            <button className='ml-8 btn bg-green-500 text-white rounded-full px-4 py-2' type="button" onClick={handleAddItem}>
                <span className='p-4'>Add Item</span>
            </button>
            <button className='m-2 btn bg-green-500 text-white rounded-full px-4 py-2' type="button" onClick={handleGenerateBill}>
                <span className='p-4'>Generate Bill</span>
            </button>
        </div>
    );
}

export default BillGenerator;