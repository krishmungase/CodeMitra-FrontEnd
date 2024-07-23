// Footer.jsx
import React from 'react';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { Link } from "react-router-dom";
import CodeMitra from "/assets/images/LogoCodeMitra.png";

const Footer = () => {
    return (
        <div className="bg-[#161D29]">
            <div className="container mx-auto">
                <footer className="bg-[#161D29] text-[#6E727F] py-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                            <div className="col-span-3 lg:col-span-1">
                                <div>
                                    <Link to="/">
                                        <img src={CodeMitra} alt="Logo" height={32} width={180} loading="lazy" />
                                    </Link>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                                <ul className="space-y-2">
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Affiliates</a></li>
                                </ul>
                                <div className="flex space-x-4 mt-4">
                                    <FaFacebook href='#' className='text-white text-2xl cursor-pointer' />
                                    <FaGoogle href='#' className='text-white text-2xl cursor-pointer' />
                                    <IoLogoTwitter href='#' className='text-white text-2xl cursor-pointer' />
                                    <FaYoutube href='#' className='text-white text-2xl cursor-pointer' />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
                                <ul className="space-y-2">
                                    <li><a href="#">Articles</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Chart Sheet</a></li>
                                    <li><a href="#">Code challenges</a></li>
                                    <li><a href="#">Docs</a></li>
                                    <li><a href="#">Projects</a></li>
                                    <li><a href="#">Videos</a></li>
                                    <li><a href="#">Workspaces</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">Plans</h3>
                                <ul className="space-y-2">
                                    <li><a href="#">Paid memberships</a></li>
                                    <li><a href="#">For students</a></li>
                                    <li><a href="#">Business solutions</a></li>
                                </ul>
                                <h3 className="text-lg font-semibold text-white mb-4 mt-6">Community</h3>
                                <ul className="space-y-2">
                                    <li><a href="#">Forums</a></li>
                                    <li><a href="#">Chapters</a></li>
                                    <li><a href="#">Events</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">Subjects</h3>
                                <ul className="space-y-2">
                                    <li><a href="#">AI</a></li>
                                    <li><a href="#">Cloud Computing</a></li>
                                    <li><a href="#">Code Foundations</a></li>
                                    <li><a href="#">Computer Science</a></li>
                                    <li><a href="#">Cybersecurity</a></li>
                                    <li><a href="#">Data Analytics</a></li>
                                    <li><a href="#">Data Science</a></li>
                                    <li><a href="#">Data Visualization</a></li>
                                    <li><a href="#">Developer Tools</a></li>
                                    <li><a href="#">DevOps</a></li>
                                    <li><a href="#">Game Development</a></li>
                                    <li><a href="#">IT</a></li>
                                    <li><a href="#">Machine Learning</a></li>
                                    <li><a href="#">Math</a></li>
                                    <li><a href="#">Mobile Development</a></li>
                                    <li><a href="#">Web Design</a></li>
                                    <li><a href="#">Web Development</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">Languages</h3>
                                <ul className="space-y-2">
                                    <li><a href="#">Bash</a></li>
                                    <li><a href="#">C</a></li>
                                    <li><a href="#">C++</a></li>
                                    <li><a href="#">C#</a></li>
                                    <li><a href="#">Go</a></li>
                                    <li><a href="#">HTML & CSS</a></li>
                                    <li><a href="#">Java</a></li>
                                    <li><a href="#">JavaScript</a></li>
                                    <li><a href="#">Kotlin</a></li>
                                    <li><a href="#">PHP</a></li>
                                    <li><a href="#">Python</a></li>
                                    <li><a href="#">R</a></li>
                                    <li><a href="#">Ruby</a></li>
                                    <li><a href="#">SQL</a></li>
                                    <li><a href="#">Swift</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">Career Building</h3>
                                <ul className="space-y-2">
                                    <li><a href="#">Career paths</a></li>
                                    <li><a href="#">Career services</a></li>
                                    <li><a href="#">Interview prep</a></li>
                                    <li><a href="#">Professional certification</a></li>
                                    <li><a href="#">Full Catalog</a></li>
                                    <li><a href="#">Beta Content</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center">
                            <div className="text-sm">
                                <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Cookie Policy</a> | <a href="#" className="hover:underline">Terms</a>
                            </div>
                            <div className="text-sm mt-4 sm:mt-0">
                                Made with <span className="text-red-500">❤️</span> by Krish © 2024 CodeMitra
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
