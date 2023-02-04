import Script from 'next/script';
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';

export default function NavMenu() {
    const scrollHandle = (e) => {
        e.preventDefault();
        let href = e.target.href;
        let id = href.indexOf("#") > -1
               ? `#${href.split("#").slice(-1)[0]}`
               : "#";

        let position = document.getElementById(id.replace("#")); //removing extra last - (dash)
        window.location.href = id; // changing the url
        position && position.scrollIntoView({ behavior: "smooth", block: "start" }) //scrolling the page
    }

    return (
        <>
            <nav className="fixed w-full z-30 top-0 gradient">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                    <div className="pl-4 flex items-center">
                        <Link 
                            href="/" 
                            className="cursor-pointer toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                            <ExportedImage
                                src="/images/logo_dark.png"
                                alt="Fungear logo"
                                width={185}
                                height={48}
                            />
                        </Link>
                    </div>
                    <div className="block lg:hidden pr-4">
                        <button id="nav-toggle" className="flex items-center p-1 text-gray-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div id="nav-content" className="gradient w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20">
                        <ul className="list-reset lg:flex justify-end flex-1 items-center">
                            <li className="mr-3">
                                <Link
                                    onClick={scrollHandle}
                                    href="/"
                                    className="cursor-pointer inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                                    關於我們
                                </Link>
                            </li>
                            <li className="mr-3">
                                <Link 
                                    onClick={scrollHandle}
                                    href="/#room" 
                                    className="cursor-pointer inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                                    場地簡介
                                </Link>
                            </li>
                            <li className="mr-3">
                                <Link 
                                    onClick={scrollHandle}
                                    href="/#facility" 
                                    className="cursor-pointer inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                                    場地設施
                                </Link>
                            </li>
                            <li className="mr-3">
                                <Link 
                                    onClick={scrollHandle}
                                    href="/#price-list" 
                                    className="cursor-pointer inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                                    收費
                                </Link>
                            </li>
                        </ul>
                        <button
                            onClick={(e) => toWhatsApp()}
                            className="cursor-pointer mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            立即預約
                        </button>
                    </div>
                </div>
                <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
            </nav>
            <Script>{
                `function toWhatsApp() {
                  let url = "https://wa.me/56220401";
                  window.open(url, '_blank');
                } 
                `
            }</Script>
        </>
    );


}