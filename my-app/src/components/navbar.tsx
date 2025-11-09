import logo from "../assets/images/NOVAMART LOGO.png";
import search from "../assets/images/search-01.png";
import cart from "../assets/images/shopping-cart-01.png";
import user from "../assets/images/user.png";
import "../App.css";
const Navbar = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="w-[1221px] h-[68px] rounded-[30px] border bg-blured border-white backdrop-blur-[100px] flex gap-[190px] px-10 py-[15px]  items-center">
                    <div className="w-[199px] h-[38px] flex items-center z">
                        <img src={logo} alt="" />
                    </div>
                    <ul className="flex text-white font-inter gap-6">
                        <li>Categories</li>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                    </ul>
                    <div className="flex gap-[45px]">
                        <img src={search} alt="Search Icon" className="w-6 h-6" />
                        <img src={cart} alt="Cart Icon" className="w-6 h-6" />
                        <img src={user} alt="User Icon" className="w-6 h-6" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;