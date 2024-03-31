// DropdownIfLoggedOut.js
import React from 'react';
import { Link } from 'react-router-dom';

function DropdownIfLoggedOut({ onLogout }) {
    return (
        <div className="absolute right-1 mt-8 w-48 bg-white rounded-md shadow-lg z-10 border-2 border-blue-100 text-center font-medium">
            <Link to="/Contact-us" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={onLogout}>Profile</Link>
            <a href="#" className="block  px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={onLogout}>Log Out</a>
        </div>
    );
}

export default DropdownIfLoggedOut;
