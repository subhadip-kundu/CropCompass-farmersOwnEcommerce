import React from 'react'

function Footer() {
    return (
        <footer className="bg-white text-green-900 p-8 font-Rubik text-center">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 shadow-sm pr-10 pl-10 p-4">
                {/* Quick Links */}
                <div className="mb-6  flex flex-col items-end text-left">
                    <h2 className="text-xl font-bold mb-4 hover:text-cyan-600" >Quick Links</h2>
                    <ul className="list-none">
                        <li>
                            <a href="#" className="text-violet-900 font-semibold hover:underline ">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-violet-900 font-semibold hover:underline mr-10">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-violet-900 font-semibold hover:underline ">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-violet-900 font-semibold hover:underline ">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-4 hover:text-cyan-600">Contact Us</h2>
                    <p className="text-violet-900 font-semibold mb-2">123 Main Street</p>
                    <p className="text-violet-900 font-semibold mb-2">Bankura, West Bengal 722207</p>
                    <p className="text-violet-900 font-semibold mb-2">Email: SS@agroconnectbazaar.com</p>
                    <p className="text-violet-900 font-semibold">Phone: (+91) 1234567890</p>
                </div>

                {/* Newsletter Subscription */}
                <div className="mb-6 ">
                    <h2 className="text-xl font-bold mb-4 hover:text-cyan-600 ">Subscribe</h2>
                    <p className="text-violet-900 font-semibold mb-2">
                        Subscribe to our newsletter for exclusive offers and updates.
                    </p>
                    <div className="flex items-center border-[1px] rounded-full border-purple-800 w-fit">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="p-2 border border-gray-600 border-none outline-none rounded-l-full pl-5 font-medium capitalize"
                        />
                        <button className="bg-blue-500 text-white p-2 pl-4 pr-5 outline-none rounded-r-full hover:text-blue-500 hover:bg-white hover:border-l-[1px] hover:border-purple-800 ">Subscribe</button>
                    </div>
                </div>

                {/* Site Map */}
                <div className="mb-6 text-left">
                    <h2 className="text-xl font-bold mb-4 hover:text-cyan-600">Site Map</h2>
                    <ul className="list-none">
                        <li>
                            <a href="#" className="text-violet-900 font-semibold hover:underline">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-violet-900 font-semibold hover:underline">
                                Terms and Conditions
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-violet-900 font-semibold hover:underline">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-violet-900 font-semibold hover:underline">
                                Site Map
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 text-center ">
                <p className="text-violet-900 font-semibold">&copy; 2023 <span className='text-orange-600'>AgroConnectBazaar</span> . All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;