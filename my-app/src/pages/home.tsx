import backGroundImage from "../assets/images/HERO BG IMAGE.jpg";
import Package from "../assets/images/package.png";
import settings from "../assets/images/settings-01.png";
import energy from "../assets/images/sustainable-energy.png";
import { ArrowUpRight } from "lucide-react";
import Navbar from "../components/navbar";
import LatestProductComponent from "../components/latestProduct";
import ProductSection from "../components/productSection";
const HomePage = () => {
    return (
        <div>
            {/* Hero section */}
            <section className="w-full h-screen relative">
                <img src={backGroundImage} alt="Hero BG Image" className="h-full w-full object-cover" />
                <div className="bg-black w-full h-full absolute top-0 left-0 opacity-30"></div>
                <div className="absolute top-0 left-0 w-full">
                    <div className="mt-10 flex justify-center">
                        <Navbar />
                    </div>
                    {/* Hero section overlay text */}
                    <div className="flex justify-center items-center w-full h-[85vh] absolute">
                        <div className="flex flex-col items-center">
                            <div className="lg:w-[80%] md:w-[90%] w-full md:mb-1 mb-2  h-[148px]">
                                <h1 className="font-roman italic md:text-[64px] text-[45px] md:leading-18 leading-12 text-white text-center">Your dream furniture, sized for your reality</h1>
                            </div>
                            <div className="lg:w-[53%] md:w-[80%] lg:h-[72px] md:h-[75px]">
                                <p className="font-inter md:text-[19px] text-[13px] md:leading-6 font-normal tracking-[2%] text-center text-white px-1">No more guesswork, just pieces that fit perfectly and look great. Get the style you want, scaled for the space you have. We've done the measuring so you don't have to</p>
                            </div>
                            <div>
                                <button className="font-inter flex gap-3 text-[20px] justify-center items-center leading-6 tracking-[2%] font-medium w-[200px] h-[51px] rounded-[30px] border mt-4 bg-white">Find your fit <span className="inlineBlock w-10 h-10 bg-black rounded-full flex justify-center items-center"><ArrowUpRight color="white" size={30} /></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Rating section */}
            <section className="md:mt-15 mt-5 px-1 py-3 flex justify-center">
                <div className="md:flex justify-between md:h-[158px] lg:w-[90%] md:w-full w-full">
                    <div className="flex flex-col items-center justify-between text-center md:w-1/2 md:h-full">
                        <h1 className="font-inter font-semibold md:text-[64px] text-[40px] md:mb-0 mb-2">20k+</h1>
                        <p className="font-inter md:w-[253px] md:text-[16px] md:mb-0 mb-2 md:h-[75px] w-[300px]">Happy and loyal customers who gave good reviews</p>
                    </div>
                    <div className="flex flex-col items-center justify-between text-center md:w-1/2 md:h-full">
                        <h1 className="font-inter font-semibold md:text-[64px] text-[40px] md:mb-0 mb-2">900+</h1>
                        <p className="font-inter md:w-[253px] w-[300px] md:mb-0 mb-2 md:h-[75px]">Products created and sold on the internet</p>
                    </div>
                    <div className="flex flex-col items-center justify-between text-center md:w-1/2 md:h-full">
                        <h1 className="font-inter font-semibold md:text-[64px] text-[40px] md:mb-0 mb-2">90%</h1>
                        <p className="font-inter md:w-[253px] w-[300px] md:mb-0 mb-2 md:h-[75px]">of customers who purchased for the first time came back to purchase</p>
                    </div>
                </div>
            </section>
            {/* latest product section */}
            <section className="md:mt-15 mt-5 flex flex-col items-center justify-center">
                <div className="text-center">
                    <b className="font-bold md:text-[48px] text-[40px] font-gentium">Latest Products</b>
                    <p className="font-inter md:text-[20px] text-[16px]">Check Out Our Modern furnitures for your Home and Office</p>
                </div>
                <LatestProductComponent />
            </section>
            {/* features section */}
            <section className="mt-15 flex flex-col items-center justify-center">
                <div className="lg:w-[95%] w-full relative lg:h-[425px] md:h-[500px] flex flex-col items-center justify-center">
                    <div className="lg:w-[95%] flex flex-col items-center lg:h-[415px]">
                        <h1 className="lg:w-[70%] font-gentium md:text-[48px] text-[20px] md:leading-15 text-center">Custom-Cratfted Minimalism designed for Modern Living</h1>
                        <div className="flex md:flex-row flex-col w-full md:mt-[50px] mt-[30px] gap-3 md:justify-between items-center">
                            <div className="md:w-1/2 w-[90%] h-[200px] flex flex-col items-center-safe">
                                <img src={energy} className="w-[60px] h-[60px] mb-1" alt="sustainable energy" />
                                <p className="inter font-bold text-[20px] mb-2">Sustainable Materials</p>
                                <p className="font-inter lg:text-[20px] text-[18px] text-center">Sourced from ethical suppliers, these materials are kind to the environment and you</p>
                            </div>
                            <div className="md:w-1/2 w-[90%] h-[200px] flex flex-col items-center-safe">
                                <img src={Package} className="w-[60px] h-[60px] mb-1" alt="package" />
                                <p className="inter font-bold text-[20px] mb-2">Space Saving Design</p>
                                <p className="font-inter lg:text-[20px] text-[18px] text-center">Our pieces adapt to your life, seamlessly blending form, function and flair</p>
                            </div>
                            <div className="md:w-1/2 w-[90%] h-[200px] flex flex-col items-center-safe">
                                <img src={settings} className="w-[60px] h-[60px] mb-1" alt="settings" />
                                <p className="inter font-bold text-[20px] mb-2">Customizable options</p>
                                <p className="font-inter lg:text-[20px] text-[18px] text-center">Dream it, design it, own it, our furniture isnt just bought, it is built for you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <ProductSection />
            </section>
        </div>
    );
}

export default HomePage;