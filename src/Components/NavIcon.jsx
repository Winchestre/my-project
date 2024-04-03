const NavIcon = ({ label, icons, isOpen }) => {
    return (
        <span className={`flex gap-3 items-center ${isOpen ? 'text-white' : ''}`}>
            <img src={isOpen ? active : icons} alt={label} width="30px" height="30px" className="text-[#9e740b]" />
            {label}
        </span>
    )
}

export default NavIcon