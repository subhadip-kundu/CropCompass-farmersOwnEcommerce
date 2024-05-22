import React, { useState } from "react";
import { firestore, storage } from "../FireBase/Firebase";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import farmarImage from "../../assets/InputForrmFarmerMarket.png"; // Importing farmarImage from assets folder
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";

const FarmerInputForm = () => {
  const [loading, setLoading] = useState(false);
  const [itemName, setItemName] = useState("");
  const [quantityType, setQuantityType] = useState("weight");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [block, setBlock] = useState("");
  const [category, setCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [image, setImage] = useState();
  const [image2, setImage2] = useState();
  const [number, setNumber] = useState("");
  const navigate = useNavigate();
  const path = `/Success`;

  // const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     if (!itemName || !quantity || !price || !block || !category || !image || !image2 ) {
  //         setErrorMessage("Please fill out all fields and select an image.");
  //         return;
  //     }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !itemName ||
      !quantity ||
      !price ||
      !block ||
      !category ||
      !image ||
      !image2 ||
      !number
    ) {
      setErrorMessage("* Please fill out all fields and select an image.");
      return;
    }
    if (number.length !== 10) {
      setErrorMessage("* Contact number must be exactly 10 digits.");
      return;
    }
    setLoading(true);
    try {
      // For Images
      const photoRef = ref(
        storage,
        `CropCompassDb/${Date.now()}-${image.name}`
      );
      // Upload photo to Firebase Storage
      await uploadBytes(photoRef, image);
      // Get download URL for the uploaded photo
      const imageUrl = await getDownloadURL(photoRef);

      const photoRef2 = ref(
        storage,
        `CropCompassDb/${Date.now()}-${image2.name}`
      );
      // Upload photo to Firebase Storage
      await uploadBytes(photoRef2, image2);
      // Get download URL for the uploaded photo
      const image2Url = await getDownloadURL(photoRef2);

      // Store form data along with image URLs in Firebase Firestore
      try {
        const docRef = await addDoc(
          collection(firestore, "CropCompassFarmerInputFormContainData"),
          {
            itemName: itemName,
            quantityType: quantityType,
            quantity: quantity,
            price: price,
            block: block,
            category: category,
            imageUrl: imageUrl, // Store the image URL in Firestore
            image2Url: image2Url,
            number: number,
          }
        );
        console.log("Document written with ID: ", docRef.id);
        setLoading(false);

        //Navigate to the success page
        navigate(path);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      // Reset form fields after successful submission
      setItemName("");
      setQuantity("");
      setPrice("");
      setBlock("");
      setCategory("");
      setImage(null); // Reset image state
      setImage2(null); // Reset image state
      setNumber("");

      // setErrorMessage("");
    } catch (error) {
      console.error("Error storing data in Firestore: ", error);
      setErrorMessage("Error storing data in Firestore");
    }
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

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className="flex w-full flex-col md:flex-row items-center justify-between">
      <div className="w-5/12">
        <img src={farmarImage} alt="hut" />
      </div>
      <div className="min-w-md max-w-[52%] mx-auto mt-8 flex bg-white shadow-lg rounded px-8 pt-6 pb-3 mb-4 flex-col">
        <div className="flex">
          <div className="w-1/2 pr-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 "
                  htmlFor="item-name"
                >
                  Item Name
                </label>
                <input
                  className=" capitalize shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  htmlFor="category"
                >
                  Item category
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Rice">Rice</option>
                  <option value="Wheat">Wheat</option>
                  <option value="Nuts">Nuts</option>
                  <option value="Sugar">Sugar</option>
                  <option value="Spices">Spices</option>
                  <option value="Fruits">Fruits</option>
                  <option value="Vegetables">Vegetables</option>
                  <option value="Pulses">Pulses</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="quantity"
                >
                  Quantity(In Kg)
                </label>
                <div></div>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="quantity"
                  type="number"
                  placeholder="Enter weight in Kg"
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
            </form>
          </div>
          <div className="w-1/2 pl-4">
            <div className="mb-3">
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
            <div className="mb-2.5">
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
              {/* {errorMessage && <p className="text-red-500 text-xs italic">{errorMessage}</p>} */}
            </div>
            <div className=" mb-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="image2"
              >
                Certificate (Max size: 500 KB)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage2(e.target.files[0])}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2 "
                htmlFor="image2"
              >
                Contact No (Without Country Code)
              </label>
              <input
                type="number"
                onChange={(e) => setNumber(e.target.value)}
                className="appearance-none shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-2 flex-col">
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-14  rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
          {errorMessage && (
            <p className="text-red-500 text-xs italic py-4">{errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FarmerInputForm;
