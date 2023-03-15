// Footer Component for the Website

import React from "react";

const Footer = () => {
    return (
        <footer className="p-4 sm:p-6 bg-white">
            <div>
                <a href="/contact" className="mx-auto md:hidden">
                    <span className="self-center text-3xl font-semibold whitespace-nowrap text-slate-700 mb-7">Let's Chat</span>
                </a>
                <hr className="my-4 border-gray-800 sm:mx-auto md:hidden" />
            </div>
            <div className="max-w-7xl mx-auto flex justify-center md:justify-between">
                <div>
                    <a href="/contact" className="mx-auto hidden md:block">
                        <span className="self-center text-3xl font-semibold whitespace-nowrap text-slate-700">Let's Chat</span>
                    </a>
                </div>
                <div className="grid gap-8 sm:gap-10 grid-cols-2">
                    <a href="/meditationcircle" className="mt-1.5 text-sm font-semibold text-slate-700 uppercase border-b-2 border-transparent hover:text-slate-900 hover:border-violet-800">
                        <h2>Meditation Circle</h2>
                    </a>
                    <a href="/contact" className="mt-1.5 text-sm font-semibold text-slate-700 uppercase border-b-2 border-transparent hover:text-slate-900 hover:border-violet-800">
                        <h2>Contact</h2>
                    </a>
                </div>
            </div>
            <hr className="my-4 border-gray-800 sm:mx-auto" />
            <div className="max-w-7xl mx-auto sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-600 sm:text-center">© 2023 <a href="#" className="hover:underline hover:text-slate-900 text-slate-700">Surbhi Sarna™</a>. All Rights Reserved.
                </span>
                <div className="flex mt-4 space-x-6 justify-center sm:mt-0">
                    <a href="https://www.facebook.com/wiseskillsforchildren" target={"_blank"} className="text-gray-600 hover:text-gray-900">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                        <span className="sr-only">Facebook page</span>
                    </a>
                    <a href="https://www.instagram.com/sarna_surbhi/" target={"_blank"} className="text-gray-600 hover:text-gray-900">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                        <span className="sr-only">Instagram page</span>
                    </a>
                    <a href="https://www.youtube.com/@wiseskills8643" target={"_blank"} className="text-gray-600 hover:text-gray-900">
                    <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="800" width="1200" viewBox="-35.20005 -41.33325 305.0671 247.9995"><path d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.747-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.554 7.652 7.602 15.655 4.904 25.817 0 44.237 0 82.667 0 82.667s0 38.43 4.904 56.85c2.698 10.162 10.65 18.164 20.747 20.881 18.3 4.935 91.682 4.935 91.682 4.935s73.383 0 91.683-4.935c10.097-2.717 18.048-10.72 20.747-20.88 4.904-18.422 4.904-56.851 4.904-56.851s0-38.43-4.904-56.85" /><path d="M93.333 117.558l61.334-34.89-61.334-34.893z" fill="#fff"/></svg>
                        <span className="sr-only">Youtube page</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
