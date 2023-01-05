import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BillGenerator() {
    const navigate = useNavigate();

    const navigateToNextPage = (total1, total2) => {
        navigate('/bill', { state: { items: { items1: items1, items2: items2 }, total1: total1, total2: total2 } });
    };
    const [items1, setItems1] = useState([{ description: '', quantity: 0, price: 0 }]);
    const [items2, setItems2] = useState([{ description: '', quantity: 0, price: 0 }]);

    const handleAddItem1 = () => {
        setItems1([...items1, { description: '', quantity: 0, price: 0 }]);
    };

    const handleAddItem2 = () => {
        setItems2([...items2, { description: '', quantity: 0, price: 0 }]);
    };

    const handleDeleteItem1 = index => {
        setItems1(items1.filter((item, i) => i !== index));
    };

    const handleDeleteItem2 = index => {
        setItems2(items2.filter((item, i) => i !== index));
    };

    const handleInputChange1 = (event, index) => {
        const { name, value } = event.target;
        const newItems = [...items1];
        newItems[index][name] = value;
        setItems1(newItems);
    };

    const handleInputChange2 = (event, index) => {
        const { name, value } = event.target;
        const newItems = [...items2];
        newItems[index][name] = value;
        setItems2(newItems);
    };

    const handleGenerateBill = () => {
        let total1 = 0;
        items1.forEach(item => {
            total1 += item.quantity * item.price;
        });

        let total2 = 0;
        items2.forEach(item => {
            total2 += item.quantity * item.price;
        });

        // Navigate to the next page and pass the total bill for each type of item as a prop
        navigateToNextPage(total1, total2);
    };

    return (
        <div>
            <h3 class="text-xl font-bold text-gray-700 m-8 uppercase">Type 1 Items</h3>
            {items1.map((item, index) => (
                <div key={index} className="m-5">
                    <label className='form-label ml-3'>Description</label>
                    <input
                        name="description"
                        value={item.description}
                        onChange={event => handleInputChange1(event, index)}
                        className="border-black border-2 rounded m-3"
                    />
                    <label className='form-label'>Quantity</label>
                    <input
                        name="quantity"
                        type="number"
                        value={item.quantity}
                        onChange={event => handleInputChange1(event, index)}
                        className="border-black border-2 rounded m-3"
                    />
                    <label className='form-label'>Price</label>
                    <input
                        name="price"
                        type="number"
                        value={item.price}
                        onChange={event => handleInputChange1(event, index)}
                        className="border-black border-2 rounded m-3"
                    />
                    <button type="button" onClick={() => handleDeleteItem1(index)} className="btn bg-red-500 text-white rounded-full px-4 py-2">
                        Delete
                    </button>
                </div>
            ))}
            <button className='ml-8 btn bg-green-500 text-white rounded-full px-4 py-2' type="button" onClick={handleAddItem1}>
                <span className='p-4'>Add Item</span>
            </button>
            <h3 class="text-xl font-bold text-gray-700 uppercase m-8">Type 2 Items</h3>
            {items2.map((item, index) => (
                <div key={index} className="m-5">
                    <label className='form-label ml-3'>Description</label>
                    <input
                        name="description"
                        value={item.description}
                        onChange={event => handleInputChange2(event, index)}
                        className="border-black border-2 rounded m-3"
                    />
                    <label className='form-label'>Quantity</label>
                    <input
                        name="quantity"
                        type="number"
                        value={item.quantity}
                        onChange={event => handleInputChange2(event, index)}
                        className="border-black border-2 rounded m-3"
                    />
                    <label className='form-label'>Price</label>
                    <input
                        name="price"
                        type="number"
                        value={item.price}
                        onChange={event => handleInputChange2(event, index)}
                        className="border-black border-2 rounded m-3"
                    />
                    <button type="button" onClick={() => handleDeleteItem2(index)} className="btn bg-red-500 text-white rounded-full px-4 py-2">
                        Delete
                    </button>
                </div>
            ))}
            <button className='ml-8 btn bg-green-500 text-white rounded-full px-4 py-2' type="button" onClick={handleAddItem2}>
                <span className='p-4'>Add Item</span>
            </button>
            <button className='m-2 btn bg-green-500 text-white rounded-full px-4 py-2' type="button" onClick={handleGenerateBill}>
                <span className='p-4'>Generate Bill</span>
            </button>
        </div>
    );
}

export default BillGenerator;