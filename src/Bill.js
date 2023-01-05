import React from 'react'
import { useLocation } from 'react-router-dom';

function Bill() {
    const location = useLocation();
    const items = location.state.items;
    const total1 = location.state.total1;
    const total2 = location.state.total2;
    return (
        <div className="bg-gray-200 p-4 rounded m-10">
            <h1 className="text-2xl font-bold mb-4 text-center">Bill</h1>
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
                    <tr>
                        <td colSpan="4" className="text-xl font-bold text-gray-700 text-center p-2 bg-gray-100 border-t border-gray-300">Type 1 Items</td>
                    </tr>
                    {items.items1.map((item, index) => (
                        <tr key={index}>
                            <td className="text-sm p-2 border-t border-gray-300">{item.description}</td>
                            <td className="text-sm p-2 border-t border-gray-300">{item.quantity}</td>
                            <td className="text-sm p-2 border-t border-gray-300">{item.price}</td>
                            <td className="text-sm p-2 border-t border-gray-300">{item.quantity * item.price}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="3" className="text-sm font-semibold p-2 bg-gray-100 border-t border-gray-300">Total:</td>
                        <td className="text-sm font-semibold p-2 bg-gray-100 border-t border-gray-300">{total1}</td>
                    </tr>
                    <tr>
                        <td colSpan="4" className="text-xl font-bold text-gray-700 text-center p-2 bg-gray-100 border-t border-gray-300">Type 2 Items</td>
                    </tr>
                    {items.items2.map((item, index) => (
                        <tr key={index}>
                            <td className="text-sm p-2 border-t border-gray-300">{item.description}</td>
                            <td className="text-sm p-2 border-t border-gray-300">{item.quantity}</td>
                            <td className="text-sm p-2 border-t border-gray-300">{item.price}</td>
                            <td className="text-sm p-2 border-t border-gray-300">{item.quantity * item.price}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="3" className="text-sm font-semibold p-2 bg-gray-100 border-t border-gray-300">Total:</td>
                        <td className="text-sm font-semibold p-2 bg-gray-100 border-t border-gray-300">{total2}</td>
                    </tr>
                    <tr>
                        <td colSpan="3" className="text-sm font-semibold p-2 bg-gray-100 border-t border-gray-300">Grand Total:</td>
                        <td className="text-sm font-semibold p-2 bg-gray-100 border-t border-gray-300">{total1 + total2}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Bill;