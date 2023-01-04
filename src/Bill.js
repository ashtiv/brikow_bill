import React from 'react'
import { useLocation } from 'react-router-dom';

function Bill() {
    const location = useLocation();
    const items = location.state.items;
    return (
        <div className="bg-gray-200 p-4 rounded m-10">
            <h1 className="text-2xl font-bold mb-4">Bill</h1>
            <table className="w-full text-left table-collapse">
                <thead>
                    <tr>
                        <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Description</th>
                        <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Quantity</th>
                        <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Price</th>
                        <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td className="text-sm p-2 border-t border-gray-300">{item.description}</td>
                            <td className="text-sm p-2 border-t border-gray-300">{item.quantity}</td>
                            <td className="text-sm p-2 border-t border-gray-300">{item.price}</td>
                            <td className="text-sm p-2 border-t border-gray-300">{item.quantity * item.price}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="3" className="text-sm font-semibold p-2 bg-gray-100 border-t border-gray-300">Total:</td>
                        <td className="text-sm font-semibold p-2 bg-gray-100 border-t border-gray-300">{items.reduce((total, item) => total + item.quantity * item.price, 0)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Bill