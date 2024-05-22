import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLogged } from "../../../redux/logged/loggedSlice";
function Copyright() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLogged.value);

  useEffect(() => {
    if (document.cookie && !isLoggedIn) {
      dispatch(isLogged(true));
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div className="p-4 text-center bg-[#EBEAEA]">
      <p className="text-violet-900 font-semibold ">
        &copy; 2023 <span className="text-orange-600">CropCompass</span> . All
        rights reserved.
      </p>
    </div>
  );
}

export default Copyright;
