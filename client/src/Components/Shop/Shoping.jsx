import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../FireBase/Firebase";
import LoadingSpinner from "../LoadingSpinner";
import PleaseLogin from "../PleaseLogin";

const Shoping = () => {
  const categories = useSelector((state) => state.category.value);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isLoggedIn = useSelector((state) => state.isLogged.value);

  useEffect(() => {
    if (!isLoggedIn) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(firestore, "CropCompassFarmerInputFormContainData")
        );
        const fetchedProducts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Error fetching products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isLoggedIn]);

  if (loading) {
    return <LoadingSpinner />; // Display a loading indicator while data is being fetched
  }

  if (error) {
    return <div>{error}</div>; // Display an error message if there's an error fetching data
  }

  if (!isLoggedIn) {
    return <PleaseLogin />; // Display a login prompt if the user is not logged in
  }

  const filteredProducts = categories
    ? products.filter((product) => product.category === categories)
    : products;

  return (
    <div className="min-h-screen p-5 bg-green-50 w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default Shoping;
