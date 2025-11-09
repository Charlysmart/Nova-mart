import backGroundImage from "../assets/images/HERO BG IMAGE.jpg";
import { ArrowUpRight } from "lucide-react";
import Navbar from "../components/navbar";
const HomePage = () => {
    return (
        <div>
            <div className="w-full h-screen relative">
                <img src={backGroundImage} alt="Hero BG Image" className="h-full w-full" />
                <div className="bg-black w-full h-full absolute top-0 left-0 opacity-30"></div>
                <div className="absolute top-0 left-0 w-full">
                    <div className="mt-10 flex justify-center">
                        <Navbar />
                    </div>
                    <div className="flex justify-center items-center w-full h-[85vh] absolute">
                        <div className="flex flex-col items-center">
                            <div className="w-[850px] h-[148px]">
                                <h1 className="font-roman italic text-[64px] leading-18 text-white text-center">Your dream furniture, sized for your reality</h1>
                            </div>
                            <div className="w-[704px] h-[72px]">
                                <p className="font-inter text-[19px] leading-6 font-normal tracking-[2%] text-center text-white px-1">No more guesswork, just pieces that fit perfectly and look great. Get the style you want, scaled for the space you have. We've done the measuring so you don't have to</p>
                            </div>
                            <div>
                                <button className="font-inter flex gap-3 text-[20px] justify-center items-center leading-6 tracking-[2%] font-medium w-[200px] h-[51px] rounded-[30px] border mt-4 bg-white">Find your fit <span className="inlineBlock w-10 h-10 bg-black rounded-full flex justify-center items-center"><ArrowUpRight color="white" size={30} /></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;