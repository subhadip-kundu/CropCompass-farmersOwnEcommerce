import React, { useState } from "react";
import farmarImage from "../../assets/InputForrmFarmerMarket.png";

const FarmerInputForm = () => {
    const [itemName, setItemName] = useState("");
    const [quantityType, setQuantityType] = useState("weight");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);
    const [block, setBlock] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!image) {
            setErrorMessage("Please select an image.");
            return;
        }

        // Here you can handle the form submission, for example, by sending the data to a backend API
        console.log("Item Name:", itemName);
        console.log("Quantity:", quantity, quantityType);
        console.log("Price:", price);
        console.log("Block:", block);
        console.log("Image:", image);
        // You can reset the form fields after submission if needed
        setItemName("");
        setQuantity("");
        setPrice("");
        setImage(null);
        setBlock("");
        setErrorMessage("");
    };

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        if (selectedImage && selectedImage.size > 500 * 1024) {
            setErrorMessage("File size exceeds 500 KB limit.");
        } else {
            setImage(selectedImage);
            setErrorMessage("");
        }
    };

    return (
        <div className="flex w-full flex-col md:flex-row items-center justify-center">
            <div className="w-1/2">
                <img src={farmarImage} alt="" />
            </div>
            <div className="max-w-md mx-auto mt-8">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                >
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="item-name"
                        >
                            Item Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="item-name"
                            type="text"
                            placeholder="Enter item name"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="quantity"
                        >
                            Quantity
                        </label>
                        <div>
                            <label className="mr-4">
                                <input
                                    type="radio"
                                    value="weight"
                                    checked={quantityType === "weight"}
                                    onChange={() => setQuantityType("weight")}
                                />
                                By Weight (Kg)
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="count"
                                    checked={quantityType === "count"}
                                    onChange={() => setQuantityType("count")}
                                />
                                By Count
                            </label>
                        </div>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="quantity"
                            type="number"
                            placeholder={quantityType === "weight" ? "Enter weight in Kg" : "Enter count"}
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="price"
                        >
                            Price
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="price"
                            type="number"
                            placeholder="Enter price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="block"
                        >
                            Select Block
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={block}
                            onChange={(e) => setBlock(e.target.value)}
                            required
                        >
                            <option value="">Select Block</option>
                            <option value="Bankura I">Bankura I</option>
                            <option value="Bankura II">Bankura II</option>
                            <option value="Barjora">Barjora</option>
                            <option value="Chhatna">Chhatna</option>
                            <option value="Gangajalghati">Gangajalghati</option>
                            <option value="Mejia">Mejia</option>
                            <option value="Onda">Onda</option>
                            <option value="Saltora">Saltora</option>
                            <option value="Khatra">Khatra</option>
                            <option value="Indpur">Indpur</option>
                            <option value="Hirbandh">Hirbandh</option>
                            <option value="Ranibandh">Ranibandh</option>
                            <option value="Raipur">Raipur</option>
                            <option value="Sarenga">Sarenga</option>
                            <option value="Simlapal">Simlapal</option>
                            <option value="Taldangra">Taldangra</option>
                            <option value="Bishnupur">Bishnupur</option>
                            <option value="Indas">Indas</option>
                            <option value="Joypur">Joypur</option>
                            <option value="Patrasayer">Patrasayer</option>
                            <option value="Kotulpur">Kotulpur</option>
                            <option value="Sonamukhi">Sonamukhi</option>
                        </select>

                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="image"
                        >
                            Item Picture (Max size: 500 KB)
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errorMessage && (
                            <p className="text-red-500 text-xs italic">{errorMessage}</p>
                        )}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FarmerInputForm;
