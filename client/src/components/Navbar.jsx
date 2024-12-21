const Navbar = () =>{
    return(
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            <div>
                <img src="/logo.png" className="w-8 h-8" alt="" />
                <span>Blog</span>
            </div>
            <div className="md:hidden">M</div>
            <div className="hidden md:flex">D</div>

        </div>
    )
}

export default Navbar;