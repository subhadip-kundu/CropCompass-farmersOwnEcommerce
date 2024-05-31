import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { isLogged } from "../../../redux/logged/loggedSlice";
import { address } from "../../../redux/address/addressSlice";

function Copyright() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLogged.value);
  const SERVER_URL = "http://localhost:5000";
  const [addres, setAddres] = useState(null);

  useEffect(() => {
    // Check if the user is logged in by checking cookies
    if (document.cookie && !isLoggedIn) {
      dispatch(isLogged(true));
    }
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    // Fetch the address data when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/api/auth/address`, {
          withCredentials: true, // to send cookies with the request
        });
        setAddres(response.data);
      } catch (error) {
        console.error("Error fetching address:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Dispatch the address data to the store if it is fetched
    if (addres) {
      dispatch(address(addres));
    }
  }, [addres, dispatch]);

  return (
    <div className="p-4 text-center bg-[#EBEAEA]">
      <p className="text-violet-900 font-semibold">
        &copy; 2023 <span className="text-orange-600">CropCompass</span> . All
        rights reserved.
      </p>
    </div>
  );
}

export default Copyright;
