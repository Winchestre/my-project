import { Link, useLocation } from "react-router-dom";
import { imageArray, menuItems } from "../data";
import NavIcon from "../Components/NavIcon";
import { useState } from "react";
import { profile1, world } from "../assets/icons";

export default function Sidebar() {
    // const pathname = useLocation().pathname;
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = (index) => {
        setIsOpen((prevMenu) => (prevMenu === index ? null : index));
        // console.log(`${index} is open!`)
    }

    return (
        <div className="bg-[--bg-primary] text-white flex flex-col w-[280px] top-0 h-full rounded-r-[30px] uppercase fixed overflow-y-auto side-scrollbar">
            <div className="flex flex-col py-14 bg-[--bg-secondary] text-center gap-1">
                <img src={profile1} alt="profile image" width="80px" height="80px" className="m-auto rounded-full border border-[--color-secondary]" />
                <h2 className="">Alex johnson</h2>
                <span className="text-xs lowercase">alex.johnson@gmail.com</span>
            </div>
            <ul className="flex flex-col gap-1 pl-4 mb-10 pt-8">
                {
                    menuItems.map((menuItem, index) => (
                        <li key={index} className={`pl-4 py-3 rounded-l-3xl text-sm ${isOpen === index ? 'bg-[--bg-light]' : ''} ${isOpen === index ? 'text-black' : 'text-white'}`} onClick={() => toggleMenu(index)}>
                            <Link to={menuItem.path}>
                                <NavIcon label={menuItem.label} icons={menuItem.icon}></NavIcon></Link>
                        </li>
                    ))
                }
            </ul>
            <div className="px-8">
                <h2 className="uppercase text-[--color-secondary] text-sm">Active users</h2>
                <ul className="flex my-6 ml-[10px]">
                    {
                        imageArray.map(image => (
                            <li key={image.id} className="ml-[-10px]">
                                <img src={image.image_url} alt={image.id} width="40px" height="40px" className="rounded-full border border-l-[3px] border-[--bg-primary]" />
                            </li>
                        ))
                    }
                    <span className="rounded-full ml-[-10px] w-[40px] h-[40px] bg-[--color-secondary] text-white text-xs flex items-center justify-center border border-l-[3px] border-[--bg-primary]">+70</span>
                </ul>
                <img src={world} alt="world-map" width="auto" />
            </div>
        </div>
    )
}