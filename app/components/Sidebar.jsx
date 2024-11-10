'use client'
import { useWindowSize } from '@uidotdev/usehooks';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

const Sidebar = ({ setMobnav, mobnav }) => {
    const [sidebarhover, setSidebarhover] = useState(false)
    console.log(sidebarhover);
    const pathname = usePathname()
    console.log(pathname === '/');
    const { width: windowWidth } = useWindowSize()


    return (
        <div className=' '>
            <div className={`${pathname === '/' && 'w-full a992:!w-[280px]'} w-full a992:w-[64px]`}></div>
            <nav>
                <div className="relative">
                    <ul>
                        <div style={{ width: sidebarhover || pathname === '/' ? (windowWidth >= 992 ? '304px' : '100%') : (windowWidth >= 992 ? '64px' : '100%'), paddingRight: ((sidebarhover || pathname) ? true : true) === '/' && ('24px') }} className={` duration-200 outline-[none] h-min box-border m-0 p-0 block  inset-0 fixed z-[201] `}>
                            <nav onMouseEnter={() => setSidebarhover(true)} onMouseLeave={() => setSidebarhover(false)} className="outline-[none] box-border m-0 md:pt-[16px] md:px-[8px] pb-[24px] flex items-center flex-col overflow-auto  md:overscroll-contain flex-1 md:overflow-hidden  h-screen relative [scrollbar-width:none] bg-[rgb(255,_255,_255)] border-r-[1px_solid_rgb(242,_244,_247)]">
                                <div className="outline-[none] hidden a992:flex box-border m-0 pt-0 px-0 pb-[26px]  items-center [flex-flow:row] w-full text-[white] relative justify-between">
                                    <div className="outline-[none] box-border m-0 p-0 w-[fit-content]">
                                        <li className="outline-[none] box-border m-0 p-0 flex items-center w-full mb-[2px] leading-[0]">
                                            <a href="/independent/home" aria-label="Home" data-radix-collection-item="" className="outline-[none] box-border m-0 p-0 no-underline text-[rgb(20,_23,_31)] cursor-pointer relative flex w-full select-none rounded-[6px] leading-[0]">
                                                <div className="outline-[none] box-border m-0 p-[8px] flex items-center w-[fit-content] rounded-[4px] gap-[8px]">
                                                    <svg fill="none" focusable="false" height="24" role="img" stroke-width="1" viewBox="0 0 60 60" width="24" color="#14171F" className="outline-[none] box-border m-0 p-0">
                                                        <path fill="currentColor" fill-rule="evenodd" d="M32.883.56h-.678v27.255h27.238v-.836C46.493 23.65 36.288 13.485 32.883.56" clip-rule="evenodd" className="outline-[none] box-border m-0 p-0"></path>
                                                        <path fill="currentColor" fill-rule="evenodd" d="M32.765 27.256H58.33C46.124 23.764 36.495 14.303 32.765 2.178zm26.677 1.118H32.203a.56.56 0 0 1-.559-.56V.56c0-.309.25-.559.56-.559h.678a.56.56 0 0 1 .54.417c3.363 12.766 13.386 22.736 26.16 26.02a.56.56 0 0 1 .419.542v.836c0 .308-.25.559-.56.559M59.444 32.864v-.679H32.205v27.256h.835c3.328-12.958 13.486-23.17 26.404-26.577" clip-rule="evenodd" className="outline-[none] box-border m-0 p-0"></path>
                                                        <path fill="currentColor" fill-rule="evenodd" d="M32.765 32.744v25.58a37.6 37.6 0 0 1 25.063-25.58zM33.039 60h-.836a.56.56 0 0 1-.559-.56V32.185c0-.308.25-.558.56-.558h27.238c.308 0 .559.25.559.558v.679a.56.56 0 0 1-.416.54A36.48 36.48 0 0 0 33.58 59.58a.56.56 0 0 1-.541.42M27.12 59.44h.68V32.186H.56v.836c12.95 3.33 23.155 13.493 26.56 26.42" clip-rule="evenodd" className="outline-[none] box-border m-0 p-0"></path>
                                                        <path fill="currentColor" fill-rule="evenodd" d="M1.666 32.744c12.207 3.492 21.836 12.953 25.566 25.078V32.744zM27.796 60h-.677a.56.56 0 0 1-.54-.417C23.216 46.817 13.192 36.847.419 33.563A.56.56 0 0 1 0 33.02v-.835c0-.308.25-.559.559-.559h27.238c.308 0 .558.25.558.56V59.44c0 .31-.25.56-.558.56M.56 27.136v.678H27.8V.56h-.836C23.636 13.517 13.479 23.729.56 27.136" clip-rule="evenodd" className="outline-[none] box-border m-0 p-0"></path>
                                                        <path fill="currentColor" fill-rule="evenodd" d="M2.179 27.255h25.062V1.674A37.6 37.6 0 0 1 2.179 27.255m25.618 1.119H.559a.56.56 0 0 1-.559-.56v-.677c0-.255.17-.477.416-.54A36.48 36.48 0 0 0 26.421.42a.56.56 0 0 1 .54-.42h.836c.308 0 .558.25.558.56v27.255c0 .308-.25.559-.558.559" clip-rule="evenodd" className="outline-[none] box-border m-0 p-0"></path>
                                                    </svg>

                                                    {
                                                        (pathname === '/' || sidebarhover ? true : (!pathname === '/' && sidebarhover) ? true : false) &&
                                                        <svg fill="none" height="20" viewBox="0 0 92 20" width="92"
                                                            xmlns="http://www.w3.org/2000/svg" className="outline-[none] box-border m-0 p-0 opacity-100">
                                                            <path clip-rule="evenodd" d="M14.6009 14.8358C13.7811 17.7365 11.4795 19.5967 8.01128 19.5967C3.56571 19.5967 0.539062 16.5382 0.539062 11.7776C0.539062 6.82759 4.19641 3.26465 9.33551 3.26465C11.3848 3.26465 12.7722 3.70596 13.6236 4.02131L14.0964 8.56157L13.7811 8.6247C11.9524 5.75558 10.2813 3.89535 8.8942 3.89535C7.09709 3.89535 5.6466 6.13377 5.6466 9.72828C5.6466 14.2682 8.04284 16.0341 10.7857 16.0341C12.2993 16.0341 13.6864 15.4981 14.4433 14.7411L14.6009 14.8358Z" fill="#14171F" fill-rule="evenodd" className="outline-[none] box-border m-0 p-0"></path>
                                                            <path clip-rule="evenodd" d="M27.2693 11.4623C27.2693 6.98513 26.2604 3.86379 24.0217 3.86379C21.7517 3.86379 20.7744 6.98513 20.7744 11.4623C20.7744 15.9394 21.7832 18.9976 24.0217 18.9976C26.2604 18.9976 27.2693 15.9394 27.2693 11.4623ZM15.5405 11.4623C15.5405 7.07981 19.387 3.26465 24.0216 3.26465C28.6566 3.26465 32.503 7.07981 32.503 11.4623C32.503 15.8447 28.6566 19.5967 24.0216 19.5967C19.387 19.5967 15.5405 15.8447 15.5405 11.4623Z" fill="#14171F" fill-rule="evenodd" className="outline-[none] box-border m-0 p-0"></path>
                                                            <path clip-rule="evenodd" d="M40.6008 19.1237H34.0112V19.0605C34.5156 17.5157 34.7994 16.2543 34.7994 13.5745L34.7679 10.0116C34.7679 7.67876 34.3265 6.32297 33.1914 4.99873V4.93561L39.7179 3.10693V6.25984L39.8441 6.2914C40.6952 4.96717 42.3348 3.26446 45.1411 3.26446C47.9155 3.26446 49.8701 4.96717 49.8701 7.6472V13.543C49.8701 16.223 50.0911 17.5157 50.6268 19.0605V19.1237H44.0375V19.0605C44.5735 17.5157 44.7941 16.1599 44.7941 13.6061V7.96255C44.7941 6.63831 44.1319 5.62914 42.6186 5.62914C41.4521 5.62914 40.443 6.32297 39.8441 7.17402V13.5745C39.8441 16.1914 40.0963 17.5157 40.6008 19.0605V19.1237Z" fill="#14171F" fill-rule="evenodd" className="outline-[none] box-border m-0 p-0"></path>
                                                            <path clip-rule="evenodd" d="M53.1679 15.2141V4.46274H51.4023V4.17896L57.8972 0.111572H58.2442V3.76892H69.5988V4.46274H58.2442V15.0879C58.2442 16.9797 59.253 17.5788 60.5141 17.5788C61.6177 17.5788 62.2797 17.0744 62.3112 17.0428L62.4056 17.1375C61.7121 18.367 60.0097 19.5966 57.5191 19.5966C54.965 19.5966 53.1679 18.367 53.1679 15.2141Z" fill="#14171F" fill-rule="evenodd" className="outline-[none] box-border m-0 p-0"></path>
                                                            <path clip-rule="evenodd" d="M63.894 19.1235V19.0604C64.3984 17.5155 64.6507 16.2541 64.6507 13.5744V10.0114C64.6507 7.67863 64.7999 5.74789 63.6648 4.42336V4.36053L69.6007 3.7673V6.92197C70.9249 5.56617 72.4698 3.07524 75.1814 3.26433L74.6138 8.56125H74.4563C73.6681 7.48924 71.9654 6.70102 71.1771 6.70102C70.7043 6.70102 70.1685 7.0795 69.7269 7.6155V13.5744C69.7269 16.1913 69.9792 17.5155 70.4836 19.0604V19.1235H63.894Z" fill="#14171F" fill-rule="evenodd" className="outline-[none] box-border m-0 p-0"></path>
                                                            <path clip-rule="evenodd" d="M83.5057 16.5382V11.167C81.2986 11.7658 80.069 13.3222 80.069 14.8043C80.069 16.0338 80.7941 16.8536 82.1815 16.8536C82.6859 16.8536 83.1588 16.7273 83.5057 16.5382ZM83.6001 17.1374C82.7174 18.4301 81.2041 19.5965 79.1861 19.5965C77.263 19.5965 75.6234 18.1973 75.6234 15.8533C75.6234 12.4479 79.9427 11.2614 83.5057 10.5048V8.84511C83.5057 7.01644 82.7174 6.13382 80.4787 6.13382C79.2492 6.13382 77.799 6.38574 76.3801 6.98488L76.2538 6.76452C77.7674 4.93555 80.2581 3.2644 83.6632 3.2644C87.0368 3.2644 88.5819 4.93555 88.5819 7.39492V15.4978C88.5819 16.2545 88.9286 16.9168 89.9374 16.9168C90.2844 16.9168 90.7257 16.8221 91.1357 16.5383L91.1988 16.6642C90.7572 17.705 89.6537 19.5652 86.9739 19.5652C85.0506 19.5652 83.8839 18.556 83.6001 17.1374Z" fill="#14171F" fill-rule="evenodd" className="outline-[none] box-border m-0 p-0"></path>
                                                        </svg>
                                                    }
                                                </div>
                                            </a>
                                        </li>
                                    </div>
                                    {
                                        pathname === '/' &&
                                        <button aria-label="Dock side navigation" tabindex="-1" type="button" className="outline-[none] box-border m-0 p-0 bg-transparent text-[rgb(155,_162,_176)] border-0 cursor-pointer [font-family:inherit] [font-size:inherit] [font-weight:inherit] appearance-none leading-[0] rounded-[4px] [transition:0.2s_ease-in-out]">
                                            <svg fill="currentColor" height="18" viewBox="0 0 18 18" width="18"
                                                xmlns="http://www.w3.org/2000/svg" className="outline-[none] box-border m-0 p-0 h-[18px] w-[18px]">
                                                <path clip-rule="evenodd" d="M16 1.5H6.596C6.5624 1.5 6.5456 1.5 6.53276 1.50654C6.52147 1.51229 6.51229 1.52147 6.50654 1.53276C6.5 1.5456 6.5 1.5624 6.5 1.596V16.404C6.5 16.4376 6.5 16.4544 6.50654 16.4672C6.51229 16.4785 6.52147 16.4877 6.53276 16.4935C6.5456 16.5 6.5624 16.5 6.596 16.5H16C16.2761 16.5 16.5 16.2761 16.5 16V2C16.5 1.72386 16.2761 1.5 16 1.5ZM2 0H5H6.5H16C17.1046 0 18 0.895431 18 2V16C18 17.1046 17.1046 18 16 18H2C0.89543 18 0 17.1046 0 16V2C0 0.89543 0.895431 0 2 0ZM4.904 16.5C4.9376 16.5 4.9544 16.5 4.96724 16.4935C4.97853 16.4877 4.98771 16.4785 4.99346 16.4672C5 16.4544 5 16.4376 5 16.404V1.596C5 1.5624 5 1.5456 4.99346 1.53276C4.98771 1.52147 4.97853 1.51229 4.96724 1.50654C4.9544 1.5 4.9376 1.5 4.904 1.5H2C1.72386 1.5 1.5 1.72386 1.5 2V16C1.5 16.2761 1.72386 16.5 2 16.5H4.904ZM12.3376 5.53755C12.3138 5.51379 12.3019 5.50191 12.2882 5.49746C12.2762 5.49354 12.2632 5.49354 12.2511 5.49746C12.2374 5.50191 12.2255 5.51379 12.2018 5.53755L9.46967 8.26967L9.00722 8.73212C8.98346 8.75588 8.97158 8.76776 8.96713 8.78146C8.96321 8.79351 8.96321 8.80649 8.96713 8.81854C8.97158 8.83224 8.98346 8.84412 9.00722 8.86788L9.46967 9.33033L12.2018 12.0624C12.2255 12.0862 12.2374 12.0981 12.2511 12.1025C12.2632 12.1065 12.2762 12.1065 12.2882 12.1025C12.3019 12.0981 12.3138 12.0862 12.3376 12.0624L13.2624 11.1376C13.2862 11.1138 13.2981 11.1019 13.3025 11.0882C13.3065 11.0762 13.3065 11.0632 13.3025 11.0511C13.2981 11.0374 13.2862 11.0255 13.2624 11.0018L11.1285 8.86788C11.1048 8.84412 11.0929 8.83224 11.0884 8.81854C11.0845 8.80649 11.0845 8.79351 11.0884 8.78146C11.0929 8.76776 11.1048 8.75588 11.1285 8.73212L13.2624 6.59821C13.2862 6.57445 13.2981 6.56257 13.3025 6.54887C13.3065 6.53682 13.3065 6.52384 13.3025 6.51179C13.2981 6.49809 13.2862 6.48621 13.2624 6.46245L12.3376 5.53755Z" fill="currentColor" fill-rule="evenodd" className="outline-[none] box-border m-0 p-0"></path>
                                            </svg>
                                        </button>
                                    }
                                </div>
                                <div class="outline-[none] box-border a992:hidden m-0 pt-0 px-[4px] pb-[26px] flex items-center [flex-flow:row] w-full text-[white] relative justify-between">
                                    <div class="outline-[none] box-border m-0 p-0 w-[fit-content]">
                                        <li class="outline-[none] box-border m-0 p-0 flex items-center w-full mb-[2px] leading-[0]">
                                            <a href="/independent/home" aria-label="Home" data-radix-collection-item="" class="outline-[none] box-border m-0 p-0 no-underline text-[rgb(20,_23,_31)] cursor-pointer relative flex w-full select-none rounded-[6px] leading-[0]">
                                                <div class="outline-[none] box-border m-0 p-[8px] flex items-center w-[fit-content] rounded-[4px] gap-[8px]">
                                                    <svg fill="none" focusable="false" height="24" role="img" stroke-width="1" viewBox="0 0 60 60" width="24" color="#14171F" class="outline-[none] box-border m-0 p-0">
                                                        <path fill="currentColor" fill-rule="evenodd" d="M32.883.56h-.678v27.255h27.238v-.836C46.493 23.65 36.288 13.485 32.883.56" clip-rule="evenodd" class="outline-[none] box-border m-0 p-0"></path>
                                                        <path fill="currentColor" fill-rule="evenodd" d="M32.765 27.256H58.33C46.124 23.764 36.495 14.303 32.765 2.178zm26.677 1.118H32.203a.56.56 0 0 1-.559-.56V.56c0-.309.25-.559.56-.559h.678a.56.56 0 0 1 .54.417c3.363 12.766 13.386 22.736 26.16 26.02a.56.56 0 0 1 .419.542v.836c0 .308-.25.559-.56.559M59.444 32.864v-.679H32.205v27.256h.835c3.328-12.958 13.486-23.17 26.404-26.577" clip-rule="evenodd" class="outline-[none] box-border m-0 p-0"></path>
                                                        <path fill="currentColor" fill-rule="evenodd" d="M32.765 32.744v25.58a37.6 37.6 0 0 1 25.063-25.58zM33.039 60h-.836a.56.56 0 0 1-.559-.56V32.185c0-.308.25-.558.56-.558h27.238c.308 0 .559.25.559.558v.679a.56.56 0 0 1-.416.54A36.48 36.48 0 0 0 33.58 59.58a.56.56 0 0 1-.541.42M27.12 59.44h.68V32.186H.56v.836c12.95 3.33 23.155 13.493 26.56 26.42" clip-rule="evenodd" class="outline-[none] box-border m-0 p-0"></path>
                                                        <path fill="currentColor" fill-rule="evenodd" d="M1.666 32.744c12.207 3.492 21.836 12.953 25.566 25.078V32.744zM27.796 60h-.677a.56.56 0 0 1-.54-.417C23.216 46.817 13.192 36.847.419 33.563A.56.56 0 0 1 0 33.02v-.835c0-.308.25-.559.559-.559h27.238c.308 0 .558.25.558.56V59.44c0 .31-.25.56-.558.56M.56 27.136v.678H27.8V.56h-.836C23.636 13.517 13.479 23.729.56 27.136" clip-rule="evenodd" class="outline-[none] box-border m-0 p-0"></path>
                                                        <path fill="currentColor" fill-rule="evenodd" d="M2.179 27.255h25.062V1.674A37.6 37.6 0 0 1 2.179 27.255m25.618 1.119H.559a.56.56 0 0 1-.559-.56v-.677c0-.255.17-.477.416-.54A36.48 36.48 0 0 0 26.421.42a.56.56 0 0 1 .54-.42h.836c.308 0 .558.25.558.56v27.255c0 .308-.25.559-.558.559" clip-rule="evenodd" class="outline-[none] box-border m-0 p-0"></path>
                                                    </svg>
                                                </div>
                                            </a>
                                        </li>
                                    </div>
                                    <div class="outline-[none] box-border m-0 p-0 leading-[0] absolute right-0 top-0 origin-[center_center] rotate-180">
                                        <button onClick={() => setMobnav(false)} class="outline-[none] box-border m-0 p-[8px] bg-transparent text-[rgb(74,_82,_100)] border-0 cursor-pointer [font-family:inherit] [font-size:inherit] [font-weight:inherit] appearance-none">
                                            <svg fill="none" focusable="false" height="24" role="img" stroke-width="1" viewBox="0 0 24 24" width="24" class="outline-[none] box-border m-0 p-0 h-[24px] w-[24px]">
                                                <path d="M19.8232 5.23742L13.0606 12L19.8232 18.7625L18.7625 19.8232L12 13.0606L5.23742 19.8232L4.17676 18.7625L10.9393 12L4.17676 5.23742L5.23742 4.17676L12 10.9393L18.7625 4.17676L19.8232 5.23742Z" fill="currentColor" class="outline-[none] box-border m-0 p-0"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className='md:h-full md:flex-shrink  overflow-y-auto [scrollbar-width:none] md:overscroll-contain flex items-center flex-col w-full text-white relative pb-[24px]'>
                                    <li className="outline-[none] box-border m-0 p-0 flex items-center w-full mb-[2px] leading-[0]">
                                        <a aria-label="User menu" data-radix-collection-item="" className="outline-[none] box-border m-0 p-0  no-underline text-[rgb(20,_23,_31)] cursor-pointer relative !flex !w-full flex-grow select-none rounded-[6px] leading-[0]">
                                            <div style={{ borderWidth: (pathname === '/' || sidebarhover ? true : (!pathname === '/' && sidebarhover) ? true : false) && '1px' }} aria-label="user menu button" layout="INLINE" role="button" className={`outline-[none] box-border m-0 px-[8px] py-[4px] !w-full rounded-[8px] border-solid border-0 border-[rgb(229,_231,_235)] cursor-pointer min-h-[64px] `}>
                                                <div className="outline-[none] box-border m-0 px-[4px] py-[8px] flex items-center gap-[8px] w-full">
                                                    <div className="outline-[none] box-border m-0 p-0">
                                                        <div aria-label="avatar placeholder" role="presentation" data-label="avatar" height="32" width="32" className="outline-[none] box-border m-0 p-0 rounded-[50%] h-[32px] w-[32px] flex-shrink-0 flex items-center justify-center text-center bg-[rgb(106,_87,_227)]">
                                                            <p color="#FFFFFF" textstyle="subtitleSmall" className="text-[rgb(255,_255,_255)]  font-medium text-[0.875rem] leading-[0] outline-[none] box-border m-0 p-0">SK</p>
                                                        </div>
                                                    </div>
                                                    {
                                                        (pathname === '/' || sidebarhover ? true : (!pathname === '/' && sidebarhover) ? true : false) &&
                                                        <div className="outline-[none] box-border m-0 p-0 flex-grow overflow-hidden">
                                                            <p textstyle="bodySmall" className=" font-normal text-[0.875rem] tracking-[0.15px] leading-[1.42] outline-[none] box-border m-0 p-0 text-[rgb(20,_23,_31)] whitespace-nowrap overflow-hidden overflow-ellipsis">Independent workspace</p>
                                                            <p textstyle="captionRegular" className=" text-[0.75rem] tracking-[0.15px] leading-[1.333] font-normal outline-[none] box-border m-0 p-0 text-[rgb(103,_112,_132)] flex items-center whitespace-nowrap overflow-hidden overflow-ellipsis">Shiva kumar Kamtam</p>
                                                        </div>
                                                    }
                                                    <svg fill="none" focusable="false" height="16" role="img" stroke-width="1" viewBox="0 0 24 24" width="16" className="outline-[none] box-border m-0 p-0 text-[rgb(20,_23,_31)] min-w-[16px]">
                                                        <path d="M8.46973 6.53039L13.9394 12.0001L8.46973 17.4697L9.53039 18.5304L16.0607 12.0001L9.53039 5.46973L8.46973 6.53039Z" fill="currentColor" className="outline-[none] box-border m-0 p-0"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <div className="outline-[none] box-border m-0 p-0 min-h-[16px]"></div>
                                    <li class="outline-[none] a992:hidden flex  box-border m-0 p-0  pl-[4px] pr-[4px] items-center w-full mb-[2px] leading-[0]">
                                        <a href="/independent/discovery" aria-label="Go to 'Discovery'" data-radix-collection-item="" class="outline-[none] box-border m-0 p-0 no-underline text-[rgb(20,_23,_31)] cursor-pointer relative flex w-full select-none rounded-[6px] leading-[0]">
                                            <div class="outline-[none] box-border m-0 px-[12px] py-0 flex items-center w-full h-[40px] relative rounded-[8px] text-[rgb(20,_23,_31)] leading-[0] select-none">
                                                <svg fill="none" focusable="false" height="24" role="img" stroke-width="1" viewBox="0 0 24 24" width="24" class="outline-[none] box-border m-0 p-0 w-[16px] h-[16px] flex-shrink-0">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6926 6.00018H21.7459H22.4959V6.75018V11.8035H20.9959V8.56084L15.4286 14.1281L15.4101 14.1467C15.2281 14.3288 15.0608 14.496 14.9096 14.6243C14.7466 14.7627 14.5536 14.8994 14.3077 14.9793C13.9562 15.0935 13.5776 15.0935 13.2262 14.9793C12.9803 14.8994 12.7873 14.7627 12.6243 14.6243C12.473 14.496 12.3058 14.3288 12.1238 14.1467L12.1052 14.1281L10.1905 12.2133C9.97118 11.9941 9.8391 11.8629 9.73358 11.7737C9.6692 11.7192 9.6376 11.7008 9.62872 11.6962C9.57848 11.6819 9.52501 11.6837 9.47583 11.7013C9.46729 11.7065 9.43698 11.727 9.37635 11.7856C9.27701 11.8816 9.15395 12.0213 8.94973 12.2547L2.62887 19.4785L1.5 18.4908L7.82087 11.2669C7.82688 11.26 7.83287 11.2532 7.83885 11.2463C8.01918 11.0402 8.18385 10.852 8.33395 10.7069C8.49496 10.5513 8.6887 10.395 8.94248 10.2993C9.30316 10.1632 9.69869 10.15 10.0676 10.2618C10.3272 10.3405 10.5309 10.4836 10.7019 10.6281C10.8613 10.7629 11.0382 10.9397 11.2318 11.1334L11.2511 11.1527L13.1659 13.0675C13.3727 13.2742 13.4963 13.397 13.595 13.4808C13.6553 13.532 13.6847 13.5494 13.693 13.5538C13.7412 13.5687 13.7927 13.5687 13.8409 13.5538C13.8492 13.5494 13.8786 13.532 13.9389 13.4808C14.0376 13.397 14.1612 13.2742 14.368 13.0675L19.9353 7.50018H16.6926V6.00018Z" fill="currentColor" class="outline-[none] box-border m-0 p-0"></path>
                                                </svg>
                                                <div justifycontent="flex-start" class="outline-[none] box-border m-0 p-0 flex items-center justify-start ml-[12px] flex-1 opacity-100">
                                                    <p textstyle="bodyRegular" class="outline-[none] box-border m-0 p-0 leading-[0]">0</p>
                                                    <div class="outline-[none] box-border m-0 p-0 leading-[0] ml-[12px]"></div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="outline-[none] a992:hidden  box-border m-0 p-0 flex pl-[4px] pr-[4px] items-center w-full mb-[2px] leading-[0]">
                                        <a href="/pro-guide" aria-label="Go to 'Contra Pro'" data-radix-collection-item="" class="outline-[none] box-border m-0 p-0 no-underline text-[rgb(20,_23,_31)] cursor-pointer relative flex w-full select-none rounded-[6px] leading-[0]">
                                            <div class="outline-[none] box-border m-0 px-[12px] py-0 flex items-center w-full h-[40px] relative rounded-[8px] text-[rgb(20,_23,_31)] leading-[0] select-none">
                                                <svg fill="none" focusable="false" height="24" role="img" viewBox="0 0 24 24" width="24" class="outline-[none] box-border m-0 p-0 w-[16px] h-[16px] flex-shrink-0">
                                                    <g clip-path="url(#em37__clip0_892_53648)" class="outline-[none] box-border m-0 p-0">
                                                        <g filter="url(#em37__filter0_iii_892_53648)" class="outline-[none] box-border m-0 p-0">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.302 0C13.418 0 13.5188 0.0798113 13.5454 0.19274L13.9049 1.72085C14.8822 5.87454 18.1255 9.11775 22.2792 10.0951L23.8073 10.4546C23.9202 10.4812 24 10.582 24 10.698V11.125C24 11.2631 23.8881 11.375 23.75 11.375H12.875C12.7369 11.375 12.625 11.2631 12.625 11.125V0.25C12.625 0.111929 12.7369 0 12.875 0H13.302ZM11.125 11.375C11.2631 11.375 11.375 11.2631 11.375 11.125V0.25C11.375 0.111929 11.2631 0 11.125 0H10.698C10.582 0 10.4812 0.0798113 10.4546 0.19274L10.0951 1.72085C9.11775 5.87454 5.87454 9.11775 1.72085 10.0951L0.19274 10.4546C0.0798112 10.4812 0 10.582 0 10.698V11.125C0 11.2631 0.111929 11.375 0.25 11.375H11.125ZM0.25 12.625C0.111929 12.625 0 12.7369 0 12.875V13.302C0 13.418 0.0798113 13.5188 0.19274 13.5454L1.72085 13.9049C5.87454 14.8822 9.11775 18.1255 10.0951 22.2792L10.4546 23.8073C10.4812 23.9202 10.582 24 10.698 24H11.125C11.2631 24 11.375 23.8881 11.375 23.75V12.875C11.375 12.7369 11.2631 12.625 11.125 12.625H0.25ZM12.625 12.875C12.625 12.7369 12.7369 12.625 12.875 12.625H23.75C23.8881 12.625 24 12.7369 24 12.875V13.302C24 13.418 23.9202 13.5188 23.8073 13.5454L22.2792 13.9049C18.1255 14.8822 14.8822 18.1255 13.9049 22.2792L13.5454 23.8073C13.5188 23.9202 13.418 24 13.302 24H12.875C12.7369 24 12.625 23.8881 12.625 23.75V12.875Z" fill="url(#em37__paint0_linear_892_53648)" class="outline-[none] box-border m-0 p-0"></path>
                                                        </g>
                                                    </g>
                                                    <defs class="outline-[none] box-border m-0 p-0">
                                                        <filter id="em37__filter0_iii_892_53648" x="-0.5" y="-0.5" width="25" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" class="outline-[none] box-border m-0 p-0">
                                                            <feflood flood-opacity="0" result="BackgroundImageFix" class="outline-[none] box-border m-0 p-0"></feflood>
                                                            <feblend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" class="outline-[none] box-border m-0 p-0"></feblend>
                                                            <fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" class="outline-[none] box-border m-0 p-0"></fecolormatrix>
                                                            <feoffset dx="-0.5" dy="0.5" class="outline-[none] box-border m-0 p-0"></feoffset>
                                                            <fegaussianblur stdDeviation="0.25" class="outline-[none] box-border m-0 p-0"></fegaussianblur>
                                                            <fecomposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" class="outline-[none] box-border m-0 p-0"></fecomposite>
                                                            <fecolormatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.9 0 0 0 0 0.943902 0 0 0 1 0" class="outline-[none] box-border m-0 p-0"></fecolormatrix>
                                                            <feblend mode="normal" in2="shape" result="effect1_innerShadow_892_53648" class="outline-[none] box-border m-0 p-0"></feblend>
                                                            <fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" class="outline-[none] box-border m-0 p-0"></fecolormatrix>
                                                            <feoffset dx="0.5" dy="-0.5" class="outline-[none] box-border m-0 p-0"></feoffset>
                                                            <fegaussianblur stdDeviation="0.5" class="outline-[none] box-border m-0 p-0"></fegaussianblur>
                                                            <fecomposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" class="outline-[none] box-border m-0 p-0"></fecomposite>
                                                            <fecolormatrix type="matrix" values="0 0 0 0 0.847059 0 0 0 0 0.333333 0 0 0 0 0.227451 0 0 0 0.6 0" class="outline-[none] box-border m-0 p-0"></fecolormatrix>
                                                            <feblend mode="normal" in2="effect1_innerShadow_892_53648" result="effect2_innerShadow_892_53648" class="outline-[none] box-border m-0 p-0"></feblend>
                                                            <fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" class="outline-[none] box-border m-0 p-0"></fecolormatrix>
                                                            <feoffset class="outline-[none] box-border m-0 p-0"></feoffset>
                                                            <fegaussianblur stdDeviation="0.5" class="outline-[none] box-border m-0 p-0"></fegaussianblur>
                                                            <fecomposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" class="outline-[none] box-border m-0 p-0"></fecomposite>
                                                            <fecolormatrix type="matrix" values="0 0 0 0 0.854152 0 0 0 0 0.17878 0 0 0 0 0.0395814 0 0 0 1 0" class="outline-[none] box-border m-0 p-0"></fecolormatrix>
                                                            <feblend mode="normal" in2="effect2_innerShadow_892_53648" result="effect3_innerShadow_892_53648" class="outline-[none] box-border m-0 p-0"></feblend>
                                                        </filter>
                                                        <lineargradient id="em37__paint0_linear_892_53648" x1="10" y1="6" x2="17.5" y2="18" gradientUnits="userSpaceOnUse" class="outline-[none] box-border m-0 p-0">
                                                            <stop offset="0.0510403" stop-color="#FF9E39" class="outline-[none] box-border m-0 p-0"></stop>
                                                            <stop offset="0.085013" stop-color="#FB7307" class="outline-[none] box-border m-0 p-0"></stop>
                                                            <stop offset="0.209738" stop-color="#FB8832" class="outline-[none] box-border m-0 p-0"></stop>
                                                            <stop offset="0.317708" stop-color="#FFD1D1" class="outline-[none] box-border m-0 p-0"></stop>
                                                            <stop offset="0.510417" stop-color="#FFC0BC" class="outline-[none] box-border m-0 p-0"></stop>
                                                            <stop offset="0.736891" stop-color="#FFC560" class="outline-[none] box-border m-0 p-0"></stop>
                                                            <stop offset="1" stop-color="#FAB029" class="outline-[none] box-border m-0 p-0"></stop>
                                                        </lineargradient>
                                                        <clippath id="em37__clip0_892_53648" class="outline-[none] box-border m-0 p-0">
                                                            <rect width="24" height="24" fill="white" class="outline-[none] box-border m-0 p-0"></rect>
                                                        </clippath>
                                                    </defs>
                                                </svg>
                                                <div class="outline-[none] box-border m-0 p-0 flex items-center justify-between ml-[12px] flex-1 opacity-100">
                                                    <p textstyle="bodyRegular" class="outline-[none] box-border m-0 p-0 leading-[0]">Contra Pro</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="outline-[none] box-border m-0 p-0 flex items-center w-full mb-[2px] leading-[0]">

                                        <a href="/" style={{ backgroundColor: pathname === '/' ? 'rgba(221,216,255,0.48)' : '' }} data-radix-collection-item="" className="outline-[none] box-border m-0 p-0 no-underline text-[rgb(20,_23,_31)] cursor-pointer   relative flex w-full select-none rounded-[6px] leading-[0] ">
                                            <div className="outline-[none] box-border m-0 px-[12px] py-0 flex items-center w-full h-[40px] relative rounded-[8px] text-[rgb(20,_23,_31)] leading-[0] select-none max-w-[256px]">
                                                <svg fill="none" focusable="false" height="24" role="img" stroke-width="1" viewBox="0 0 24 24" width="24" className="outline-[none] box-border m-0 p-0 w-[16px] h-[16px] flex-shrink-0">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9999 9C14.9999 10.6569 13.6567 12 11.9999 12C10.343 12 8.99986 10.6569 8.99986 9C8.99986 7.34315 10.343 6 11.9999 6C13.6567 6 14.9999 7.34315 14.9999 9ZM13.4999 9C13.4999 9.82843 12.8283 10.5 11.9999 10.5C11.1714 10.5 10.4999 9.82843 10.4999 9C10.4999 8.17157 11.1714 7.5 11.9999 7.5C12.8283 7.5 13.4999 8.17157 13.4999 9Z" fill="currentColor" className="outline-[none] box-border m-0 p-0"></path>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.99986 1.25V6.47299L0.17627 7.8234L0.823453 9.1766L2.99986 8.13571V19.75C2.99986 20.4404 2.44022 21 1.74986 21H0.999878L0.999861 22.5H22.9999L22.9999 21H22.2499C21.5595 21 20.9999 20.4404 20.9999 19.75V8.13571L23.1763 9.1766L23.8235 7.8234L12.3271 2.32514L12.3235 2.3234L11.9999 2.16649L11.6777 2.32272L9.35558 3.40635C9.18984 3.4837 8.99986 3.36271 8.99986 3.1798V1.25H2.99986ZM4.49986 5.75559L7.80748 4.17369C7.61516 3.89623 7.49986 3.5568 7.49986 3.1798V2.75H4.49986V5.75559ZM19.7997 21C19.608 20.625 19.4999 20.2001 19.4999 19.75V7.46987L11.9999 3.83351L4.49986 7.46987V19.75C4.49986 20.2001 4.39172 20.625 4.20001 21H8.99986V15.5C8.99986 14.5335 9.78336 13.75 10.7499 13.75H13.2499C14.2164 13.75 14.9999 14.5335 14.9999 15.5V21H19.7997ZM10.4999 15.5V21H13.4999V15.5C13.4999 15.3619 13.3879 15.25 13.2499 15.25H10.7499C10.6118 15.25 10.4999 15.3619 10.4999 15.5Z" fill="currentColor" className="outline-[none] box-border m-0 p-0"></path>
                                                </svg>
                                                {
                                                    //   (pathname === '/' || sidebarhover ? true : (!pathname === '/' && sidebarhover) ? true : false) &&
                                                    (pathname === '/' || sidebarhover ? true : (!pathname === '/' && sidebarhover) ? true : false) &&
                                                    <div className="outline-[none] box-border m-0 p-0 flex items-center justify-between ml-[12px] flex-1 opacity-100">
                                                        <p textstyle="bodySmall" className=" font-normal text-[0.875rem] tracking-[0.15px] leading-[0] outline-[none] box-border m-0 p-0">Dashboard</p>
                                                    </div>
                                                }
                                            </div>
                                        </a>
                                    </li>
                                    <li className="outline-[none] box-border m-0 p-0 flex items-center w-full mb-[2px] leading-[0]">
                                        <a href="/messages" aria-label="Go to messages" data-radix-collection-item="" className="outline-[none] box-border m-0 p-0 no-underline text-[rgb(20,_23,_31)] cursor-pointer relative flex w-full select-none rounded-[6px] leading-[0]">
                                            <div className="outline-[none] box-border m-0 px-[12px] py-0 flex items-center w-full h-[40px] relative rounded-[8px] text-[rgb(20,_23,_31)] leading-[0] select-none max-w-[256px]">
                                                <svg fill="none" focusable="false" height="24" role="img" stroke-width="1" viewBox="0 0 24 24" width="24" className="outline-[none] box-border m-0 p-0 w-[16px] h-[16px] flex-shrink-0">
                                                    <path d="M15.5 10C15.5 10.8284 16.1716 11.5 17 11.5C17.8284 11.5 18.5 10.8284 18.5 10C18.5 9.17157 17.8284 8.5 17 8.5C16.1716 8.5 15.5 9.17157 15.5 10Z" fill="currentColor" className="outline-[none] box-border m-0 p-0"></path>
                                                    <path d="M7 11.5C6.17157 11.5 5.5 10.8284 5.5 10C5.5 9.17157 6.17157 8.5 7 8.5C7.82843 8.5 8.5 9.17157 8.5 10C8.5 10.8284 7.82843 11.5 7 11.5Z" fill="currentColor" className="outline-[none] box-border m-0 p-0"></path>
                                                    <path d="M10.5 10C10.5 10.8284 11.1716 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.1716 8.5 10.5 9.17157 10.5 10Z" fill="currentColor" className="outline-[none] box-border m-0 p-0"></path>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22 9.62791C22 16.6248 16.916 20.5581 13.5 22.3142C12.9467 22.5987 12.4371 22.826 12 23V22.2558C12 21.9672 11.9583 21.6893 11.8812 21.4245C11.5154 20.169 10.3517 19.2077 9.04693 18.7958C5.10165 17.5505 2 13.9167 2 9.62791C2 4.31056 6.76783 0 12 0C17.2322 0 22 4.31056 22 9.62791ZM9.49846 17.3654C6.08567 16.2881 3.5 13.1709 3.5 9.62791C3.5 5.21949 7.51339 1.5 12 1.5C16.4866 1.5 20.5 5.21949 20.5 9.62791C20.5 15.5323 16.375 19.0377 13.2452 20.7536C12.6353 19.025 11.0286 17.8484 9.49846 17.3654Z" fill="currentColor" className="outline-[none] box-border m-0 p-0"></path>
                                                </svg>
                                                {
                                                    (pathname === '/' || sidebarhover ? true : (!pathname === '/' && sidebarhover) ? true : false) &&
                                                    <div justifycontent="flex-start" className="outline-[none] box-border m-0 p-0 flex items-center justify-start ml-[12px] flex-1 opacity-100">
                                                        <p textstyle="bodySmall" className=" font-normal text-[0.875rem] tracking-[0.15px] leading-[0] outline-[none] box-border m-0 p-0">Messages</p>
                                                    </div>
                                                }
                                            </div>
                                        </a>
                                    </li>
                                    <li className="outline-[none] box-border m-0 p-0 flex items-center w-full mb-[2px] leading-[0]">
                                        <a href="/community/recent" data-radix-collection-item="" className="outline-[none] box-border m-0 p-0 no-underline text-[rgb(20,_23,_31)] cursor-pointer relative flex w-full select-none rounded-[6px] leading-[0]">
                                            <div className="outline-[none] box-border m-0 px-[12px] py-0 flex items-center w-full h-[40px] relative rounded-[8px] text-[rgb(20,_23,_31)] leading-[0] select-none max-w-[256px]">
                                                <svg fill="none" focusable="false" height="16" role="img" stroke-width="1" viewBox="0 0 24 24" width="16" className="outline-[none] box-border m-0 p-0 w-[16px] h-[16px] flex-shrink-0">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 6C2.75 4.48122 3.98122 3.25 5.5 3.25C7.01878 3.25 8.25 4.48122 8.25 6C8.25 7.51878 7.01878 8.75 5.5 8.75C3.98122 8.75 2.75 7.51878 2.75 6ZM5.5 4.75C4.80964 4.75 4.25 5.30964 4.25 6C4.25 6.69036 4.80964 7.25 5.5 7.25C6.19036 7.25 6.75 6.69036 6.75 6C6.75 5.30964 6.19036 4.75 5.5 4.75Z" fill="currentColor" className="outline-[none] box-border m-0 p-0"></path>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.25C10.4812 4.25 9.25 5.48122 9.25 7C9.25 8.51878 10.4812 9.75 12 9.75C13.5188 9.75 14.75 8.51878 14.75 7C14.75 5.48122 13.5188 4.25 12 4.25ZM10.75 7C10.75 6.30964 11.3096 5.75 12 5.75C12.6904 5.75 13.25 6.30964 13.25 7C13.25 7.69036 12.6904 8.25 12 8.25C11.3096 8.25 10.75 7.69036 10.75 7Z" fill="currentColor" className="outline-[none] box-border m-0 p-0"></path>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 17.75H0V13.8623C0 13.5896 0 13.3818 0.0996561 13.0217C0.139493 12.8778 0.222332 12.6935 0.284744 12.5643C0.347157 12.4351 0.440071 12.2557 0.528059 12.135C0.610032 12.0226 0.677764 11.9341 0.742484 11.8624C0.821053 11.7753 0.885125 11.7245 0.92679 11.6915L0.928494 11.6901C1.76825 11.0239 3.28491 10.25 5.75 10.25C7.79687 10.25 9.19322 10.7836 10.0924 11.3511C10.6702 11.2864 11.3045 11.25 12 11.25C12.6955 11.25 13.3297 11.2864 13.9076 11.3511C14.8068 10.7836 16.2031 10.25 18.25 10.25C20.7151 10.25 22.2317 11.0239 23.0715 11.6901L23.0732 11.6914C23.1148 11.7245 23.1789 11.7753 23.2575 11.8624C23.3222 11.9341 23.39 12.0226 23.4719 12.135C23.5599 12.2557 23.6528 12.4351 23.7152 12.5643C23.7777 12.6935 23.8605 12.8778 23.9003 13.0217C24 13.3818 24 13.5896 24 13.8623V17.75H19.5V20H4.5V17.75ZM1.86077 12.8652C2.43652 12.4084 3.62494 11.75 5.75 11.75C6.42642 11.75 7.0075 11.8167 7.50378 11.9221C6.45783 12.294 5.7509 12.7621 5.28934 13.1701C5.17248 13.2733 5.10608 13.3678 4.96936 13.5707C4.89216 13.6853 4.80817 13.8612 4.75369 13.982C4.69921 14.1029 4.62303 14.2823 4.5883 14.416C4.50155 14.7501 4.5 14.9226 4.5 15.1567V16.25H1.5V13.8643C1.5 13.6304 1.50024 13.5846 1.5453 13.4219C1.54754 13.4157 1.55421 13.3982 1.56752 13.3664C1.58558 13.3232 1.60921 13.271 1.63538 13.2168C1.66154 13.1627 1.68778 13.1117 1.71038 13.0707C1.72704 13.0405 1.73707 13.0242 1.74052 13.0186C1.80836 12.9256 1.83871 12.8875 1.85141 12.8726L1.86077 12.8652ZM18.7107 13.1701C18.2491 12.7621 17.5422 12.294 16.4962 11.9221C16.9925 11.8167 17.5736 11.75 18.25 11.75C20.375 11.75 21.5635 12.4084 22.1392 12.8652L22.1486 12.8726C22.1613 12.8875 22.1921 12.9258 22.26 13.0188C22.2634 13.0244 22.273 13.0406 22.2896 13.0707C22.3122 13.1117 22.3384 13.1627 22.3646 13.2168C22.3908 13.271 22.4144 13.3232 22.4325 13.3664C22.4458 13.3982 22.4523 13.4162 22.4546 13.4224C22.4996 13.5852 22.5 13.6304 22.5 13.8643V16.25H19.5V15.1567C19.5 14.9226 19.4984 14.7501 19.4117 14.416C19.377 14.2823 19.3008 14.1029 19.2463 13.982C19.1918 13.8612 19.1078 13.6853 19.0306 13.5707C18.8939 13.3678 18.8275 13.2733 18.7107 13.1701ZM6.29116 14.2951L6.30703 14.2727C6.94947 13.7158 8.55041 12.75 12 12.75C15.4496 12.75 17.0505 13.7158 17.693 14.2727L17.7088 14.2951C17.7273 14.3214 17.7522 14.3578 17.7867 14.4089L17.7834 14.4041L17.7849 14.4068C17.7881 14.4125 17.7965 14.4275 17.8103 14.4546C17.8307 14.4948 17.8548 14.5451 17.8788 14.5985C17.9029 14.6518 17.9247 14.7032 17.9412 14.7451C17.9524 14.7734 17.9581 14.7896 17.9602 14.7958L17.9613 14.7986L17.9599 14.7931C17.9854 14.8914 17.9924 14.9387 17.9956 14.9705C17.9994 15.0093 18 15.0481 18 15.1567V18.5H6V15.1567C6 15.0481 6.00063 15.0093 6.00444 14.9705C6.00756 14.9387 6.0146 14.8914 6.04014 14.7931L6.03872 14.7986L6.03975 14.7958C6.04191 14.7896 6.04762 14.7733 6.05877 14.7451C6.07533 14.7032 6.09713 14.6518 6.12117 14.5985C6.14521 14.5451 6.16926 14.4948 6.18971 14.4546C6.20352 14.4275 6.21193 14.4125 6.2151 14.4068L6.21656 14.4041L6.21335 14.4089C6.24776 14.3578 6.27271 14.3214 6.29116 14.2951Z" fill="currentColor" className="outline-[none] box-border m-0 p-0"></path>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 3.25C16.9812 3.25 15.75 4.48122 15.75 6C15.75 7.51878 16.9812 8.75 18.5 8.75C20.0188 8.75 21.25 7.51878 21.25 6C21.25 4.48122 20.0188 3.25 18.5 3.25ZM17.25 6C17.25 5.30964 17.8096 4.75 18.5 4.75C19.1904 4.75 19.75 5.30964 19.75 6C19.75 6.69036 19.1904 7.25 18.5 7.25C17.8096 7.25 17.25 6.69036 17.25 6Z" fill="currentColor" className="outline-[none] box-border m-0 p-0"></path>
                                                </svg>

                                                {
                                                    (pathname === '/' || sidebarhover ? true : (!pathname === '/' && sidebarhover) ? true : false) &&
                                                    <div className="outline-[none] box-border m-0 p-0 flex items-center justify-between ml-[12px] flex-1 opacity-100">
                                                        <p textstyle="bodySmall" className=" font-normal text-[0.875rem] tracking-[0.15px] leading-[0] outline-[none] box-border m-0 p-0">Community</p>
                                                        <div className="flex flex-row items-center justify-center w-[fit-content] h-[fit-content] min-h-[20px] py-[2px] px-[6px]  rounded-[4px] gap-[6px] cursor-pointer bg-[rgb(240,_238,_252)] text-[rgb(106,_87,_227)] [transition:background-color_0.2s_ease-out] outline-[none] box-border m-0 leading-[0] ml-[12px]">
                                                            <p textstyle="overlineRegular" className=" font-semibold text-[10px] leading-[16px] tracking-[1.2px] uppercase whitespace-nowrap outline-[none] box-border m-0 p-0">BETA</p>
                                                        </div>
                                                    </div>

                                                }

                                            </div>
                                        </a>
                                    </li>
                                    <div className="outline-[none] box-border m-0 px-0 py-[8px] flex items-center justify-center w-full gap-[12px] h-[32px] select-none text-[rgb(155,_162,_176)]">
                                        {
                                            (pathname === '/' || sidebarhover ? true : (!pathname === '/' && sidebarhover) ? true : false) &&
                                            <span textstyle="overlineBold" className=" text-[0.625rem] leading-[1.6] uppercase font-semibold tracking-[0.5px] outline-[none] box-border m-0 p-0 whitespace-nowrap">Identity</span>
                                        }
                                        <hr className="outline-[none] box-border mx-0 my-[12px] p-0 h-px w-full border-r-[none] border-b-[none] border-l-[none] [border-image:initial] border-t-[1px_solid_rgb(229,_231,_235)]"></hr>
                                    </div>
                                    <li className="outline-[none] box-border m-0 p-0 flex items-center w-full mb-[2px] leading-[0]">
                                        <a href="/shiva_kumar_kamtam_f7d9jvjh" data-radix-collection-item="" className="outline-[none] box-border m-0 p-0 no-underline text-[rgb(20,_23,_31)] cursor-pointer relative flex w-full select-none rounded-[6px] leading-[0]">
                                            <div className="outline-[none] box-border m-0 px-[12px] py-0 flex items-center w-full h-[40px] relative rounded-[8px] text-[rgb(20,_23,_31)] leading-[0] select-none max-w-[256px]">
                                                <svg fill="none" focusable="false" height="24" role="img" stroke-width="1" viewBox="0 0 24 24" width="24" className="outline-[none] box-border m-0 p-0 w-[16px] h-[16px] flex-shrink-0">
                                                    <g clip-path="url(#ic179__clip0_891_56287)" className="outline-[none] box-border m-0 p-0">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8.5C16 10.7091 14.2091 12.5 12 12.5C9.79086 12.5 8 10.7091 8 8.5C8 6.29086 9.79086 4.5 12 4.5C14.2091 4.5 16 6.29086 16 8.5ZM14.5 8.5C14.5 9.88071 13.3807 11 12 11C10.6193 11 9.5 9.88071 9.5 8.5C9.5 7.11929 10.6193 6 12 6C13.3807 6 14.5 7.11929 14.5 8.5Z" fill="currentColor" className="outline-[none] box-border m-0 p-0"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 13.6126 23.6819 15.1509 23.1051 16.5556L22.5214 17.7752L22.4791 17.8509C20.4286 21.5165 16.5053 24 12 24C11.9008 24 11.802 23.9988 11.7034 23.9964C7.29813 23.8896 3.4813 21.4086 1.48357 17.7843L0.821711 16.6011L0.894941 16.5556C0.318087 15.1509 0 13.6126 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 22.5C13.0873 22.5 14.136 22.3347 15.1224 22.0279C17.2226 21.3747 19.0401 20.0798 20.3457 18.3726C20.4529 18.2324 20.5566 18.0895 20.6568 17.9439C20.8401 17.6774 21.0114 17.4021 21.17 17.1186C21.0065 17.017 20.7817 16.8866 20.4941 16.7406C20.3025 16.6433 20.0831 16.539 19.8353 16.4317C18.3171 15.7738 15.737 15 12 15C8.26297 15 5.68284 15.7738 4.16459 16.4317C3.91688 16.539 3.69744 16.6433 3.50585 16.7406C3.21828 16.8866 2.99345 17.017 2.82998 17.1186C4.01835 19.243 5.92355 20.9121 8.21813 21.7983C9.07255 22.1283 9.98095 22.3498 10.9264 22.4458C11.2794 22.4816 11.6376 22.5 12 22.5ZM12 13.5C17.3419 13.5 20.5403 14.9975 21.8097 15.7522C22.2557 14.587 22.5 13.322 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 13.322 1.74433 14.587 2.19029 15.7522C3.45974 14.9975 6.65807 13.5 12 13.5Z" fill="currentColor" className="outline-[none] box-border m-0 p-0"></path>
                                                    </g>
                                                    <defs className="outline-[none] box-border m-0 p-0">
                                                        <clippath id="ic179__clip0_891_56287" className="outline-[none] box-border m-0 p-0">
                                                            <rect width="24" height="24" fill="white" className="outline-[none] box-border m-0 p-0"></rect>
                                                        </clippath>
                                                    </defs>
                                                </svg>
                                                {
                                                    (pathname === '/' || sidebarhover ? true : (!pathname === '/' && sidebarhover) ? true : false) &&
                                                    <div className="outline-[none] box-border m-0 p-0 flex items-center justify-between ml-[12px] flex-1 opacity-100">
                                                        <p textstyle="bodySmall" className=" font-normal text-[0.875rem] tracking-[0.15px] leading-[0] outline-[none] box-border m-0 p-0">Profile</p>
                                                    </div>
                                                }
                                            </div>
                                        </a>
                                    </li>
                                    <li className="outline-[none] box-border m-0 p-0 flex items-center w-full mb-[2px] leading-[0]">
                                        <a href="/independent/analytics" data-radix-collection-item="" className="outline-[none] box-border m-0 p-0 no-underline text-[rgb(20,_23,_31)] cursor-pointer relative flex w-full select-none rounded-[6px] leading-[0]">
                                            <div className="outline-[none] box-border m-0 px-[12px] py-0 flex items-center w-full h-[40px] relative rounded-[8px] text-[rgb(20,_23,_31)] leading-[0] select-none max-w-[256px]">
                                                <svg fill="none" height="16" viewBox="0 0 16 16" width="16"
                                                    xmlns="http://www.w3.org/2000/svg" className="outline-[none] box-border m-0 p-0 w-[16px] h-[16px] flex-shrink-0">
                                                    <path clip-rule="evenodd" d="M8.50002 2.16675V2.66675V13.3334V13.8334H7.50002V13.3334V2.66675V2.16675H8.50002ZM13.8334 6.16675V6.66675V13.3334V13.8334H12.8334V13.3334V6.66675V6.16675H13.8334ZM3.16669 9.33341V8.83341H2.16669V9.33341V13.3334V13.8334H3.16669V13.3334V9.33341Z" fill="#14171F" fill-rule="evenodd" className="outline-[none] box-border m-0 p-0"></path>
                                                </svg>
                                                {
                                                    (pathname === '/' || sidebarhover ? true : (!pathname === '/' && sidebarhover) ? true : false) &&
                                                    <div className="outline-[none] box-border m-0 p-0 flex items-center justify-between ml-[12px] flex-1 opacity-100">
                                                        <p textstyle="bodySmall" className=" font-normal text-[0.875rem] tracking-[0.15px] leading-[0] outline-[none] box-border m-0 p-0">Analytics</p>
                                                    </div>
                                                }
                                            </div>
                                        </a>
                                    </li>
                                    <div className="outline-[none] box-border m-0 px-0 py-[8px] flex items-center justify-center w-full gap-[12px] h-[32px] select-none text-[rgb(155,_162,_176)]">
                                        {
                                            (pathname === '/' || sidebarhover ? true : (!pathname === '/' && sidebarhover) ? true : false) &&
                                            <span textstyle="overlineBold" className=" text-[0.625rem] leading-[1.6] uppercase font-semibold tracking-[0.5px] outline-[none] box-border m-0 p-0 whitespace-nowrap">Leads</span>
                                        }
                                        <hr className="outline-[none] box-border mx-0 my-[12px] p-0 h-px w-full border-r-[none] border-b-[none] border-l-[none] [border-image:initial] border-t-[1px_solid_rgb(229,_231,_235)]"></hr>
                                    </div>
                                    <li className="outline-[none] box-border m-0 p-0 flex items-center w-full mb-[2px] leading-[0]">
                                        <a style={{ backgroundColor: pathname === '/discover' ? 'rgba(221,216,255,0.48)' : '' }} href="/discover" data-radix-collection-item="" className="outline-[none] box-border m-0 p-0 no-underline text-[rgb(20,_23,_31)] cursor-pointer relative flex w-full select-none rounded-[6px] leading-[0]">
                                            <div className="outline-[none] box-border m-0 px-[12px] py-0 flex items-center w-full h-[40px] relative rounded-[8px] text-[rgb(20,_23,_31)] leading-[0] select-none max-w-[256px]">
                                                <svg fill="none" height="16" viewBox="0 0 16 16" width="16"
                                                    xmlns="http://www.w3.org/2000/svg" className="outline-[none] box-border m-0 p-0 w-[16px] h-[16px] flex-shrink-0">
                                                    <path clip-rule="evenodd" d="M11.9445 3.62219C12.2166 3.51335 12.4866 3.78338 12.3778 4.05548L10.0532 9.86693C10.0192 9.95188 9.95184 10.0191 9.8668 10.0529L4.08174 12.351C3.81008 12.4589 3.54098 12.1898 3.6489 11.9182L5.94708 6.1332C5.98087 6.04816 6.04812 5.98075 6.13307 5.94677L11.9445 3.62219ZM9.2424 9.2424L10.6969 5.3031L6.7576 6.7576L5.33338 10.6665L9.2424 9.2424Z" fill="currentColor" fill-rule="evenodd" className="outline-[none] box-border m-0 p-0"></path>
                                                    <path clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" fill="currentColor" fill-rule="evenodd" className="outline-[none] box-border m-0 p-0"></path>
                                                </svg>
                                                {
                                                    (pathname === '/' || sidebarhover ? true : (!pathname === '/' && sidebarhover) ? true : false) &&
                                                    <div className="outline-[none] box-border m-0 p-0 flex items-center justify-between ml-[12px] flex-1 opacity-100">
                                                        <p textstyle="bodySmall" className=" font-normal text-[0.875rem] tracking-[0.15px] leading-[0] outline-[none] box-border m-0 p-0">Discover</p>
                                                    </div>
                                                }
                                            </div>
                                        </a>
                                    </li>
                                    <li className="outline-[none] box-border m-0 p-0 flex items-center w-full mb-[2px] leading-[0]">
                                        <a style={{ backgroundColor: pathname === '/jobs' ? 'rgba(221,216,255,0.48)' : '' }} href="/jobs" data-radix-collection-item="" className="outline-[none] box-border m-0 p-0 no-underline text-[rgb(20,_23,_31)] cursor-pointer relative flex w-full select-none rounded-[6px] leading-[0]">
                                            <div className="outline-[none] box-border m-0 px-[12px] py-0 flex items-center w-full h-[40px] relative rounded-[8px] text-[rgb(20,_23,_31)] leading-[0] select-none max-w-[256px]">
                                                <svg fill="none" focusable="false" height="24" role="img" stroke-width="1" viewBox="0 0 24 24" width="24" className="outline-[none] box-border m-0 p-0 w-[16px] h-[16px] flex-shrink-0">
                                                    <path d="M15.0001 9.75C13.7031 9.56622 12.6839 8.547 12.5001 7.25H11.5001C11.3163 8.547 10.2971 9.56622 9.00009 9.75V10.75C10.2971 10.9338 11.3163 11.953 11.5001 13.25H12.5001C12.6839 11.953 13.7031 10.9338 15.0001 10.75V9.75Z" fill="currentColor" className="outline-[none] box-border m-0 p-0"></path>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.81651 3.31021C7.2117 2.22344 8.24455 1.5 9.40094 1.5H14.5992C15.7556 1.5 16.7885 2.22344 17.1837 3.31021L17.6163 4.5L18.5805 4.5C19.1147 4.49999 19.5605 4.49998 19.9248 4.52974C20.3046 4.56078 20.6613 4.62789 20.9986 4.79973C21.516 5.06338 21.9367 5.48408 22.2004 6.00153C22.3722 6.33879 22.4393 6.69545 22.4703 7.07533C22.5001 7.43956 22.5001 7.8854 22.5001 8.41955L22.5001 9.14823C22.5002 9.24386 22.5002 9.33687 22.5001 9.42743V17.5805C22.5001 18.1146 22.5001 18.5604 22.4703 18.9247C22.4393 19.3046 22.3722 19.6612 22.2004 19.9985C21.9367 20.5159 21.516 20.9366 20.9986 21.2003C20.6613 21.3721 20.3046 21.4392 19.9248 21.4703C19.5605 21.5 19.1147 21.5 18.5805 21.5H5.41964C4.88549 21.5 4.43965 21.5 4.07542 21.4703C3.69553 21.4392 3.33888 21.3721 3.00161 21.2003C2.48417 20.9366 2.06347 20.5159 1.79982 19.9985C1.62798 19.6612 1.56086 19.3046 1.52983 18.9247C1.50007 18.5604 1.50008 18.1146 1.50009 17.5804V9.42692C1.49996 9.33652 1.5 9.24367 1.50004 9.14822L1.50009 8.41957C1.50008 7.88541 1.50007 7.43956 1.52983 7.07533C1.56086 6.69545 1.62798 6.33879 1.79982 6.00153C2.06347 5.48408 2.48417 5.06338 3.00161 4.79973C3.33888 4.62789 3.69553 4.56078 4.07542 4.52974C4.43965 4.49998 4.88549 4.49999 5.41964 4.5L6.38386 4.5L6.81651 3.31021ZM15.774 3.82282L16.0202 4.5H7.97995L8.2262 3.82282C8.40583 3.32883 8.87531 3 9.40094 3H14.5992C15.1249 3 15.5943 3.32883 15.774 3.82282ZM21.0001 9V8.45C21.0001 7.87757 20.9995 7.49336 20.9753 7.19748C20.9519 6.91035 20.91 6.77307 20.8638 6.68251C20.744 6.44731 20.5528 6.25608 20.3176 6.13624C20.227 6.0901 20.0897 6.04822 19.8026 6.02476C19.5067 6.00058 19.1225 6 18.5501 6H5.45009C4.87766 6 4.49344 6.00058 4.19757 6.02476C3.91044 6.04822 3.77316 6.0901 3.6826 6.13624C3.4474 6.25608 3.25617 6.44731 3.13633 6.68251C3.09019 6.77307 3.0483 6.91035 3.02485 7.19748C3.00067 7.49336 3.00009 7.87757 3.00009 8.45V9C3.00009 10.2924 3.01233 10.7355 3.15131 11.0952C3.29676 11.4717 3.54077 11.802 3.85777 12.0517C4.16069 12.2904 4.58061 12.4324 5.81588 12.8125L10.809 14.3488C11.3587 14.5179 11.5469 14.573 11.7321 14.5952C11.9101 14.6165 12.0901 14.6165 12.2681 14.5952C12.4533 14.573 12.6415 14.5179 13.1911 14.3488L18.1843 12.8125C19.4196 12.4324 19.8395 12.2904 20.1424 12.0517C20.4594 11.802 20.7034 11.4717 20.8489 11.0952C20.9878 10.7355 21.0001 10.2924 21.0001 9ZM3.00009 13.2838V17.55C3.00009 18.1224 3.00067 18.5066 3.02485 18.8025C3.0483 19.0896 3.09019 19.2269 3.13633 19.3175C3.25617 19.5527 3.4474 19.7439 3.6826 19.8638C3.77316 19.9099 3.91044 19.9518 4.19757 19.9752C4.49345 19.9994 4.87766 20 5.45009 20H18.5501C19.1225 20 19.5067 19.9994 19.8026 19.9752C20.0897 19.9518 20.227 19.9099 20.3176 19.8638C20.5528 19.7439 20.744 19.5527 20.8638 19.3175C20.91 19.2269 20.9519 19.0896 20.9753 18.8025C20.9995 18.5066 21.0001 18.1224 21.0001 17.55V13.2838C20.4586 13.683 19.7606 13.8974 18.7671 14.2026L13.5717 15.8011C13.1052 15.9448 12.7821 16.0443 12.4468 16.0845C12.15 16.1201 11.8501 16.1201 11.5534 16.0845C11.218 16.0443 10.895 15.9448 10.4285 15.8012L5.23307 14.2026C4.23958 13.8974 3.54161 13.683 3.00009 13.2838Z" fill="currentColor" className="outline-[none] box-border m-0 p-0"></path>
                                                </svg>
                                                {
                                                    (pathname === '/' || sidebarhover ? true : (!pathname === '/' && sidebarhover) ? true : false) &&
                                                    <div className="outline-[none] box-border m-0 p-0 flex items-center justify-between ml-[12px] flex-1 opacity-100">
                                                        <p textstyle="bodySmall" className=" font-normal text-[0.875rem] tracking-[0.15px] leading-[0] outline-[none] box-border m-0 p-0">Jobs</p>
                                                    </div>
                                                }

                                            </div>
                                        </a>
                                    </li >
                                    <div className="outline-[none] box-border m-0 px-0 py-[8px] flex items-center justify-center w-full gap-[12px] h-[32px] select-none text-[rgb(155,_162,_176)]">
                                        {
                                            (pathname === '/' || sidebarhover ? true : (!pathname === '/' && sidebarhover) ? true : false) &&
                                            <span textstyle="overlineBold" className=" text-[0.625rem] leading-[1.6] uppercase font-semibold tracking-[0.5px] outline-[none] box-border m-0 p-0 whitespace-nowrap">Projects & payments</span>
                                        }
                                        <hr className="outline-[none] box-border mx-0 my-[12px] p-0 h-px w-full border-r-[none] border-b-[none] border-l-[none] [border-image:initial] border-t-[1px_solid_rgb(229,_231,_235)]"></hr>
                                    </div>
                                    <li className="outline-[none] box-border m-0 p-0 flex items-center w-full mb-[2px] leading-[0]">
                                        <a href="/independent/projects" data-radix-collection-item="" className="outline-[none] box-border m-0 p-0 no-underline text-[rgb(20,_23,_31)] cursor-pointer relative flex w-full select-none rounded-[6px] leading-[0]">
                                            <div className="outline-[none] box-border m-0 px-[12px] py-0 flex items-center w-full h-[40px] relative rounded-[8px] text-[rgb(20,_23,_31)] leading-[0] select-none max-w-[256px]">
                                                <svg fill="none" focusable="false" height="24" role="img" stroke-width="1" viewBox="0 0 24 24" width="24" className="outline-[none] box-border m-0 p-0 w-[16px] h-[16px] flex-shrink-0">
                                                    <path d="M8 20.25H16V18.75H8V20.25Z" fill="currentColor" className="outline-[none] box-border m-0 p-0"></path>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 8.28833C3 7.78174 3.19224 7.29403 3.53789 6.92369L9.40699 0.635364C9.78525 0.230093 10.3147 0 10.8691 0H19C20.1046 0 21 0.89543 21 2V22C21 23.1046 20.1046 24 19 24H5C3.89543 24 3 23.1046 3 22V8.28833ZM5 22.5H19C19.2761 22.5 19.5 22.2761 19.5 22V16.5H4.5V22C4.5 22.2761 4.72386 22.5 5 22.5ZM4.5 15H19.5V2C19.5 1.72386 19.2761 1.5 19 1.5H11.75C11.0596 1.5 10.5 2.05964 10.5 2.75V7.5H5.75C5.05964 7.5 4.5 8.05964 4.5 8.75V15ZM9 3.26982L6.45183 6H9V3.26982Z" fill="currentColor" className="outline-[none] box-border m-0 p-0"></path>
                                                </svg>
                                                {
                                                    (pathname === '/' || sidebarhover ? true : (!pathname === '/' && sidebarhover) ? true : false) &&
                                                    <div className="outline-[none] box-border m-0 p-0 flex items-center justify-between ml-[12px] flex-1 opacity-100">
                                                        <p textstyle="bodySmall" className=" font-normal text-[0.875rem] tracking-[0.15px] leading-[0] outline-[none] box-border m-0 p-0">Projects & payments</p>
                                                        <div className="outline-[none] box-border m-0 p-0 leading-[0] ml-[12px]">
                                                            <div className="outline-[none] box-border m-0 p-[12px] flex justify-end rounded-[4px] -mr-[12px] text-[rgb(55,_63,_81)]">
                                                                <svg fill="none" focusable="false" height="24" role="img" stroke-width="1" viewBox="0 0 24 24" width="24" className="outline-[none] box-border m-0 p-0 w-[16px] h-[16px] flex-shrink-0">
                                                                    <path d="M11.25 3V11.25H3V12.75H11.25V21H12.75V12.75H21V11.25H12.75V3H11.25Z" fill="currentColor" className="outline-[none] box-border m-0 p-0"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }


                                            </div>
                                        </a>
                                    </li >
                                    <li className="outline-[none] box-border m-0 p-0 flex items-center w-full mb-[2px] leading-[0]">
                                        <a href="/independent/wallet" data-radix-collection-item="" className="outline-[none] box-border m-0 p-0 no-underline text-[rgb(20,_23,_31)] cursor-pointer relative flex w-full select-none rounded-[6px] leading-[0]">
                                            <div className="outline-[none] box-border m-0 px-[12px] py-0 flex items-center w-full h-[40px] relative rounded-[8px] text-[rgb(20,_23,_31)] leading-[0] select-none max-w-[256px]">
                                                <svg fill="none" focusable="false" height="24" role="img" stroke-width="1" viewBox="0 0 24 24" width="24" className="outline-[none] box-border m-0 p-0 w-[16px] h-[16px] flex-shrink-0">
                                                    <path d="M19.5 13.9167C18.6353 13.7941 17.9559 13.1147 17.8333 12.25H17.1667C17.0441 13.1147 16.3647 13.7941 15.5 13.9167V14.5833C16.3647 14.7059 17.0441 15.3853 17.1667 16.25H17.8333C17.9559 15.3853 18.6353 14.7059 19.5 14.5833V13.9167Z" fill="currentColor" className="outline-[none] box-border m-0 p-0"></path>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.26389 2.5C5.81321 1.88625 6.6115 1.5 7.5 1.5H21C22.6569 1.5 24 2.84315 24 4.5V18.75C24 20.8211 22.3211 22.5 20.25 22.5H3.75C1.67893 22.5 0 20.8211 0 18.75V5C0 3.61929 1.11929 2.5 2.5 2.5H5.26389ZM7.5 3H21C21.8284 3 22.5 3.67157 22.5 4.5V6H6V4.5C6 3.67157 6.67157 3 7.5 3ZM22.5 7.5H2.5C2.14445 7.5 1.80623 7.42578 1.5 7.29198V18.75C1.5 19.9926 2.50736 21 3.75 21H20.25C21.4926 21 22.5 19.9926 22.5 18.75V18.7001C22.125 18.8919 21.7001 19 21.25 19H15.5C13.9812 19 12.75 17.7688 12.75 16.25V12.25C12.75 10.7312 13.9812 9.5 15.5 9.5H21.25C21.9404 9.5 22.5 8.94036 22.5 8.25V7.5ZM4.5 6V4H2.5C1.94772 4 1.5 4.44772 1.5 5C1.5 5.55228 1.94772 6 2.5 6H4.5ZM22.5 16.25C22.5 16.9404 21.9404 17.5 21.25 17.5H15.5C14.8096 17.5 14.25 16.9404 14.25 16.25V12.25C14.25 11.5596 14.8096 11 15.5 11H21.25C21.7001 11 22.125 10.8919 22.5 10.7001V16.25Z" fill="currentColor" className="outline-[none] box-border m-0 p-0"></path>
                                                </svg>
                                                {
                                                    (pathname === '/' || sidebarhover ? true : (!pathname === '/' && sidebarhover) ? true : false) &&
                                                    <div className="outline-[none] box-border m-0 p-0 flex items-center justify-between ml-[12px] flex-1 opacity-100">
                                                        <p textstyle="bodySmall" className=" font-normal text-[0.875rem] tracking-[0.15px] leading-[0] outline-[none] box-border m-0 p-0">Wallet</p>
                                                        <div className="outline-[none] box-border m-0 p-0 leading-[0] ml-[unset] flex justify-end flex-1 text-[rgb(155,_162,_176)]">
                                                            <p color="#677084" textstyle="subtitleSmall" className="text-[rgb(103,_112,_132)]  font-medium text-[0.875rem] leading-[1.42] outline-[none] box-border m-0 p-0">$0.00</p>
                                                        </div>
                                                    </div>
                                                }

                                            </div>
                                        </a>
                                    </li >
                                    <div className="outline-[none] box-border m-0 p-0 mt-auto pt-[24px] w-full">
                                        <div className="outline-[none] box-border m-0 p-0 h-[48px] mt-[8px] w-[48px]"></div>
                                    </div>
                                </div>
                            </nav >
                        </div >
                    </ul >
                </div >
            </nav >
        </div>
    )
}

export default Sidebar
