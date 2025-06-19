import React from 'react';
import { Container, LogoutBtn, Button, Search } from './index'
import { useLocation, Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getOptimizedImageSources } from '../utils/imageUtils';

import {
    HiHome,
    HiThumbUp,
    HiClock,
    HiVideoCamera,
    HiFolder,
    HiCog,
    HiUsers,
    HiLogin,
    HiUserAdd,
    HiLogout
} from "react-icons/hi";

const Sidebar = ({ className, loggedInUser, isOpen, onClose }) => {
    const location = useLocation();
    const hideLabels = location.pathname.startsWith("/video/");
    const Width = hideLabels ? 'w-25' : 'w-64';



    const navItems = [
        { label: "Home", icon: <HiHome size={28} />, slug: "/" },
        { label: "Liked Videos", icon: <HiThumbUp size={28} />, slug: "/likedvideos" },
        { label: "History", icon: <HiClock size={28} />, slug: "/history" },
        { label: "My content", icon: <HiVideoCamera size={28} />, slug: "/my-content" },
        { label: "playlists", icon: <HiFolder size={28} />, slug: "/playlists" },
        { label: "Subscriptions", icon: <HiUsers size={28} />, slug: "/subscriptions" },
        { label: "Settings", icon: <HiCog size={28} />, slug: "/settings" }
    ];

    const authStatus = useSelector((state) => state.auth.status);


    return (
        <div className={className}>
            <div className="hidden lg:block border-r fixed border-gray-700 z-200 top-[68px] bottom-0 bg-[#18181b]">
                <div className={`h-full text-white flex flex-col ${Width} z-50 pl-3 mr-2  `}>
                    {loggedInUser && (
                        <Link to={`/profile/${loggedInUser.username}`} >
                            <div className="flex items-center mb-6 cursor-pointer p-5 pt-8">
                                <picture>
                                    <source srcSet={getOptimizedImageSources(loggedInUser.avatar).avif} type="image/avif" />
                                    <source srcSet={getOptimizedImageSources(loggedInUser.avatar).webp} type="image/webp" />
                                    <img
                                        src={loggedInUser.avatar}
                                        alt={loggedInUser.fullname}
                                        width={60}
                                        height={60}
                                        loading="lazy"
                                        className="w-15 h-15 rounded-full border-2 border-purple-400"
                                    />
                                </picture>
                                {!hideLabels && (
                                    <div className="ml-3 ">
                                        <div className="font-semibold">{loggedInUser.fullname}</div>
                                        <div className="text-md text-gray-400">@{loggedInUser.username}</div>
                                    </div>
                                )}
                            </div>
                        </Link>
                    )}

                    <div className="space-y-1  flex-col flex gap-3">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.slug;
                            return (
                                <Link key={item.label} to={item.slug}>
                                    <Button
                                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg 
                                              ${isActive
                                                ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 font-semibold"
                                                : "hover:bg-gray-700 text-gray-300 relative  "
                                            }`}
                                    >
                                        {item.icon}
                                        {!hideLabels && <span className='text-[19px]' >{item.label}</span>}
                                    </Button>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div
                className={`fixed inset-0 bg-opacity-50 z-40 transition-opacity duration-300  ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            ></div>
            <div
                className={`fixed top-0 bottom-0 left-0 h-full bg-[#18181b] w-64 z-50 transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden overflow-y-auto modal-scroll z-999`}
            >

                <div className=" text-white flex flex-col pl-3 mr-2  pt-20">
                    {loggedInUser && (
                        <Link to={`/profile/${loggedInUser.username}`} onClick={onClose}>
                            <div className="flex items-center mb-1 cursor-pointer p-5 ">
                                <picture>
                                    <source srcSet={getOptimizedImageSources(loggedInUser.avatar).avif} type="image/avif" />
                                    <source srcSet={getOptimizedImageSources(loggedInUser.avatar).webp} type="image/webp" />
                                    <img
                                        src={loggedInUser.avatar}
                                        alt={loggedInUser.fullname}
                                        width={60}
                                        height={60}
                                        loading="lazy"
                                        className="w-15 h-15 rounded-full border-2 border-purple-400"
                                    />
                                </picture>
                                <div className="ml-3 ">
                                    <div className="font-semibold">{loggedInUser.fullname}</div>
                                    <div className="text-md text-gray-400">@{loggedInUser.username}</div>
                                </div>
                            </div>
                        </Link>
                    )}

                    <ul className="space-y-2 flex flex-col gap-6 pt-5">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.slug;
                            return (
                                <Link key={item.label} to={item.slug} onClick={onClose}>
                                    <Button
                                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg 
                                               ${isActive
                                                ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 font-semibold"
                                                : "hover:bg-gray-700 text-gray-300"
                                            }`}
                                    >
                                        {item.icon}
                                        <span className="text-[16px]">{item.label}</span>
                                    </Button>
                                </Link>
                            );
                        })}

                        {!authStatus ? (
                            <>
                                <Link to="/login" onClick={onClose}>
                                    <Button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700">
                                        <HiLogin size={22} />
                                        <span className="text-[16px]">Login</span>
                                    </Button>
                                </Link>

                                <Link to="/signup" onClick={onClose} className='mb-5'>
                                    <Button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600">
                                        <HiUserAdd size={22} />
                                        <span className="text-[16px]">Sign Up</span>
                                    </Button>
                                </Link>
                            </>
                        ) : (
                            <div className='mb-5'>
                                <LogoutBtn showLabel={true} className="w-full" />

                            </div>


                        )}
                    </ul>


                </div>
            </div>


        </div>
    );
};

export default Sidebar;