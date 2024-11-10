'use client'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { useWindowSize } from '@uidotdev/usehooks'
import Sidebar from './Sidebar'

const Navbar = () => {
    const [mobnav, setMobnav] = useState(false)
    const pathname = usePathname()
    const { width: windowWidth } = useWindowSize()
    return (
        <>
            <nav className='md:border-b border-[#f2f4f7] w-full sticky top-0 z-[100] bg-[#fff]  '>

                <div className=" mx-[auto] my-0 py-2 px-4  md:px-[32px] md:py-[8px] flex items-center justify-between w-full relative">
                    {
                        windowWidth > 992 ?
                            <>
                                <div className=" m-0 p-0 flex items-center">
                                    <div open="" className={` m-0 p-0 [transition:width_250ms_cubic-bezier(0.4,_0.9,_0.2,_1)] block ${pathname === '/' && 'a992:!w-[280px]'} a992:w-[64px]`}></div>
                                    <p textstyle="fifthLevelHeadline" className=" text-[1.4375rem] font-semibold tracking-[-0.25px] leading-[1.4]  m-0 p-0">{pathname === '/' ? 'Dashboard' : 'Discover'}</p>
                                </div>
                                <div className=" m-0 p-0 flex items-center gap-[2px]">
                                    <div className=" m-0 p-0 flex items-center gap-[8px]">
                                        <a href="/independent/discovery" className=" m-0 px-[16px] py-0 no-underline text-[rgb(103,_112,_132)] cursor-pointer relative flex items-center gap-[6px] h-[42px] text-[14px] font-normal leading-[20px] text-center mr-[8px] bg-[rgb(255,_255,_255)] [transition:background-color_0.125s_ease-out] rounded-[99px]">
                                            <svg fill="none" focusable="false" height="18" role="img" stroke-width="1" viewBox="0 0 24 24" width="18" className=" m-0 p-0">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6926 6.00018H21.7459H22.4959V6.75018V11.8035H20.9959V8.56084L15.4286 14.1281L15.4101 14.1467C15.2281 14.3288 15.0608 14.496 14.9096 14.6243C14.7466 14.7627 14.5536 14.8994 14.3077 14.9793C13.9562 15.0935 13.5776 15.0935 13.2262 14.9793C12.9803 14.8994 12.7873 14.7627 12.6243 14.6243C12.473 14.496 12.3058 14.3288 12.1238 14.1467L12.1052 14.1281L10.1905 12.2133C9.97118 11.9941 9.8391 11.8629 9.73358 11.7737C9.6692 11.7192 9.6376 11.7008 9.62872 11.6962C9.57848 11.6819 9.52501 11.6837 9.47583 11.7013C9.46729 11.7065 9.43698 11.727 9.37635 11.7856C9.27701 11.8816 9.15395 12.0213 8.94973 12.2547L2.62887 19.4785L1.5 18.4908L7.82087 11.2669C7.82688 11.26 7.83287 11.2532 7.83885 11.2463C8.01918 11.0402 8.18385 10.852 8.33395 10.7069C8.49496 10.5513 8.6887 10.395 8.94248 10.2993C9.30316 10.1632 9.69869 10.15 10.0676 10.2618C10.3272 10.3405 10.5309 10.4836 10.7019 10.6281C10.8613 10.7629 11.0382 10.9397 11.2318 11.1334L11.2511 11.1527L13.1659 13.0675C13.3727 13.2742 13.4963 13.397 13.595 13.4808C13.6553 13.532 13.6847 13.5494 13.693 13.5538C13.7412 13.5687 13.7927 13.5687 13.8409 13.5538C13.8492 13.5494 13.8786 13.532 13.9389 13.4808C14.0376 13.397 14.1612 13.2742 14.368 13.0675L19.9353 7.50018H16.6926V6.00018Z" fill="currentColor" className=" m-0 p-0"></path>
                                            </svg>
                                            <p className=" m-0 p-0">0</p>
                                            <div className=" m-0 p-0 relative ml-[2px] w-[8px] h-[8px] rounded-[50%] bg-[rgb(255,_90,_94)]"></div>
                                        </a>
                                        <button aria-label="open contra pro guide" type="button" id="radix-:r23:" aria-haspopup="menu" aria-expanded="false" data-state="closed" className="contra-btn  contra-btn-after">
                                            <svg fill="none" focusable="false" height="24" role="img" viewBox="0 0 24 24" width="24" className=" m-0 p-0 w-[16px] h-[16px]">
                                                <g clip-path="url(#em37__clip0_892_53648)" className=" m-0 p-0">
                                                    <g filter="url(#em37__filter0_iii_892_53648)" className=" m-0 p-0">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.302 0C13.418 0 13.5188 0.0798113 13.5454 0.19274L13.9049 1.72085C14.8822 5.87454 18.1255 9.11775 22.2792 10.0951L23.8073 10.4546C23.9202 10.4812 24 10.582 24 10.698V11.125C24 11.2631 23.8881 11.375 23.75 11.375H12.875C12.7369 11.375 12.625 11.2631 12.625 11.125V0.25C12.625 0.111929 12.7369 0 12.875 0H13.302ZM11.125 11.375C11.2631 11.375 11.375 11.2631 11.375 11.125V0.25C11.375 0.111929 11.2631 0 11.125 0H10.698C10.582 0 10.4812 0.0798113 10.4546 0.19274L10.0951 1.72085C9.11775 5.87454 5.87454 9.11775 1.72085 10.0951L0.19274 10.4546C0.0798112 10.4812 0 10.582 0 10.698V11.125C0 11.2631 0.111929 11.375 0.25 11.375H11.125ZM0.25 12.625C0.111929 12.625 0 12.7369 0 12.875V13.302C0 13.418 0.0798113 13.5188 0.19274 13.5454L1.72085 13.9049C5.87454 14.8822 9.11775 18.1255 10.0951 22.2792L10.4546 23.8073C10.4812 23.9202 10.582 24 10.698 24H11.125C11.2631 24 11.375 23.8881 11.375 23.75V12.875C11.375 12.7369 11.2631 12.625 11.125 12.625H0.25ZM12.625 12.875C12.625 12.7369 12.7369 12.625 12.875 12.625H23.75C23.8881 12.625 24 12.7369 24 12.875V13.302C24 13.418 23.9202 13.5188 23.8073 13.5454L22.2792 13.9049C18.1255 14.8822 14.8822 18.1255 13.9049 22.2792L13.5454 23.8073C13.5188 23.9202 13.418 24 13.302 24H12.875C12.7369 24 12.625 23.8881 12.625 23.75V12.875Z" fill="url(#em37__paint0_linear_892_53648)" className=" m-0 p-0"></path>
                                                    </g>
                                                </g>
                                                <defs className=" m-0 p-0">
                                                    <filter id="em37__filter0_iii_892_53648" x="-0.5" y="-0.5" width="25" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" className=" m-0 p-0">
                                                        <feflood flood-opacity="0" result="BackgroundImageFix" className=" m-0 p-0"></feflood>
                                                        <feblend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" className=" m-0 p-0"></feblend>
                                                        <fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" className=" m-0 p-0"></fecolormatrix>
                                                        <feoffset dx="-0.5" dy="0.5" className=" m-0 p-0"></feoffset>
                                                        <fegaussianblur stdDeviation="0.25" className=" m-0 p-0"></fegaussianblur>
                                                        <fecomposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" className=" m-0 p-0"></fecomposite>
                                                        <fecolormatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.9 0 0 0 0 0.943902 0 0 0 1 0" className=" m-0 p-0"></fecolormatrix>
                                                        <feblend mode="normal" in2="shape" result="effect1_innerShadow_892_53648" className=" m-0 p-0"></feblend>
                                                        <fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" className=" m-0 p-0"></fecolormatrix>
                                                        <feoffset dx="0.5" dy="-0.5" className=" m-0 p-0"></feoffset>
                                                        <fegaussianblur stdDeviation="0.5" className=" m-0 p-0"></fegaussianblur>
                                                        <fecomposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" className=" m-0 p-0"></fecomposite>
                                                        <fecolormatrix type="matrix" values="0 0 0 0 0.847059 0 0 0 0 0.333333 0 0 0 0 0.227451 0 0 0 0.6 0" className=" m-0 p-0"></fecolormatrix>
                                                        <feblend mode="normal" in2="effect1_innerShadow_892_53648" result="effect2_innerShadow_892_53648" className=" m-0 p-0"></feblend>
                                                        <fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" className=" m-0 p-0"></fecolormatrix>
                                                        <feoffset className=" m-0 p-0"></feoffset>
                                                        <fegaussianblur stdDeviation="0.5" className=" m-0 p-0"></fegaussianblur>
                                                        <fecomposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" className=" m-0 p-0"></fecomposite>
                                                        <fecolormatrix type="matrix" values="0 0 0 0 0.854152 0 0 0 0 0.17878 0 0 0 0 0.0395814 0 0 0 1 0" className=" m-0 p-0"></fecolormatrix>
                                                        <feblend mode="normal" in2="effect2_innerShadow_892_53648" result="effect3_innerShadow_892_53648" className=" m-0 p-0"></feblend>
                                                    </filter>
                                                    <lineargradient id="em37__paint0_linear_892_53648" x1="10" y1="6" x2="17.5" y2="18" gradientUnits="userSpaceOnUse" className=" m-0 p-0">
                                                        <stop offset="0.0510403" stop-color="#FF9E39" className=" m-0 p-0"></stop>
                                                        <stop offset="0.085013" stop-color="#FB7307" className=" m-0 p-0"></stop>
                                                        <stop offset="0.209738" stop-color="#FB8832" className=" m-0 p-0"></stop>
                                                        <stop offset="0.317708" stop-color="#FFD1D1" className=" m-0 p-0"></stop>
                                                        <stop offset="0.510417" stop-color="#FFC0BC" className=" m-0 p-0"></stop>
                                                        <stop offset="0.736891" stop-color="#FFC560" className=" m-0 p-0"></stop>
                                                        <stop offset="1" stop-color="#FAB029" className=" m-0 p-0"></stop>
                                                    </lineargradient>
                                                    <clippath id="em37__clip0_892_53648" className=" m-0 p-0">
                                                        <rect width="24" height="24" fill="white" className=" m-0 p-0"></rect>
                                                    </clippath>
                                                </defs>
                                            </svg>Contra Pro
                                        </button>
                                    </div>
                                    <button type="button" variant="V2Link" aria-label="Copy profile link to clipboard" className="relative text-center normal-case inline-block [transition:150ms_ease-out] overflow-hidden cursor-pointer h-[40px] pl-0 pr-0 rounded-[50%] min-w-[unset] w-[40px] border-0 border-solid border-transparent bg-none bg-transparent [color:inherit]  m-0 p-0 [font-family:inherit] [font-size:inherit] [font-weight:inherit] appearance-none">
                                        <span className="flex items-center justify-center gap-[8px] h-full opacity-100  m-0 p-0 leading-none">
                                            <span textstyle="subtitleRegular" variant="V2Link" className=" font-medium text-[1rem] leading-none  m-0 p-0">
                                                <svg fill="none" focusable="false" height="20" role="img" stroke-width="1" viewBox="0 0 24 24" width="20" className=" m-0 p-0 leading-none block">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.75 2C15.9551 2 14.5 3.45507 14.5 5.25C14.5 5.55888 14.5431 5.8577 14.6236 6.14076L8.52018 9.67432C7.93438 9.10241 7.13335 8.75 6.25 8.75C4.45507 8.75 3 10.2051 3 12C3 13.7949 4.45507 15.25 6.25 15.25C7.12925 15.25 7.92695 14.9008 8.51201 14.3336L14.6141 17.8932C14.5397 18.1662 14.5 18.4534 14.5 18.75C14.5 20.5449 15.9551 22 17.75 22C19.5449 22 21 20.5449 21 18.75C21 16.9551 19.5449 15.5 17.75 15.5C16.7908 15.5 15.9286 15.9155 15.3338 16.5764L9.32025 13.0685C9.43671 12.7339 9.5 12.3743 9.5 12C9.5 11.6297 9.43806 11.2738 9.32398 10.9422L15.3572 7.44931C15.9512 8.09523 16.8033 8.5 17.75 8.5C19.5449 8.5 21 7.04493 21 5.25C21 3.45507 19.5449 2 17.75 2ZM16 5.25C16 4.2835 16.7835 3.5 17.75 3.5C18.7165 3.5 19.5 4.2835 19.5 5.25C19.5 6.2165 18.7165 7 17.75 7C16.7835 7 16 6.2165 16 5.25ZM16 18.75C16 17.7835 16.7835 17 17.75 17C18.7165 17 19.5 17.7835 19.5 18.75C19.5 19.7165 18.7165 20.5 17.75 20.5C16.7835 20.5 16 19.7165 16 18.75ZM6.25 10.25C5.2835 10.25 4.5 11.0335 4.5 12C4.5 12.9665 5.2835 13.75 6.25 13.75C7.2165 13.75 8 12.9665 8 12C8 11.0335 7.2165 10.25 6.25 10.25Z" fill="currentColor" className=" m-0 p-0 leading-none"></path>
                                                </svg>
                                            </span>
                                        </span>
                                    </button>
                                    <li className=" m-[unset] p-0 block">
                                        <div className=" m-0 p-0 inline-block">
                                            <div tabindex="-1" className=" m-0 p-0 cursor-pointer relative">
                                                <a aria-label="Messages" variant="default" href="/messages" className=" m-0 p-0 no-underline [color:inherit] cursor-pointer flex flex-row items-center [transition:0.3s_ease-in-out] border-t-[0px] rounded-[50%]">
                                                    <div className=" m-0 p-0 grid relative w-[48px] h-[48px] mr-[unset] [cursor:inherit]">
                                                        <svg fill="none" focusable="false" height="24" role="img" stroke-width="1" viewBox="0 0 24 24" width="24" className=" m-auto p-0 text-[rgb(74,_82,_100)]">
                                                            <path d="M15.5 10C15.5 10.8284 16.1716 11.5 17 11.5C17.8284 11.5 18.5 10.8284 18.5 10C18.5 9.17157 17.8284 8.5 17 8.5C16.1716 8.5 15.5 9.17157 15.5 10Z" fill="currentColor" className=" m-0 p-0"></path>
                                                            <path d="M7 11.5C6.17157 11.5 5.5 10.8284 5.5 10C5.5 9.17157 6.17157 8.5 7 8.5C7.82843 8.5 8.5 9.17157 8.5 10C8.5 10.8284 7.82843 11.5 7 11.5Z" fill="currentColor" className=" m-0 p-0"></path>
                                                            <path d="M10.5 10C10.5 10.8284 11.1716 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.1716 8.5 10.5 9.17157 10.5 10Z" fill="currentColor" className=" m-0 p-0"></path>
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 9.62791C22 16.6248 16.916 20.5581 13.5 22.3142C12.9467 22.5987 12.4371 22.826 12 23V22.2558C12 21.9672 11.9583 21.6893 11.8812 21.4245C11.5154 20.169 10.3517 19.2077 9.04693 18.7958C5.10165 17.5505 2 13.9167 2 9.62791C2 4.31056 6.76783 0 12 0C17.2322 0 22 4.31056 22 9.62791ZM9.49846 17.3654C6.08567 16.2881 3.5 13.1709 3.5 9.62791C3.5 5.21949 7.51339 1.5 12 1.5C16.4866 1.5 20.5 5.21949 20.5 9.62791C20.5 15.5323 16.375 19.0377 13.2452 20.7536C12.6353 19.025 11.0286 17.8484 9.49846 17.3654Z" fill="currentColor" className=" m-0 p-0"></path>
                                                        </svg>
                                                    </div>
                                                    <label className=" m-0 p-0 hidden [cursor:inherit]">Messages</label>
                                                </a>
                                            </div>
                                            <div data-popper-reference-hidden="false" data-popper-escaped="false" data-popper-placement="bottom" className=" m-0 p-0 fixed pointer-events-none w-auto [transform:translate3d(1159.33px,_64px,_0px)]"></div>
                                        </div>
                                    </li>
                                    <button aria-label="Notifications" type="button" id="radix-:r26:" aria-haspopup="menu" aria-expanded="false" data-state="closed" className=" m-0 p-[12px] bg-transparent border-0 cursor-pointer [font-family:inherit] [font-size:inherit] [font-weight:inherit] appearance-none relative [transition:background-color_0.3s_ease-in-out] flex items-center justify-center rounded-[52px]">
                                        <svg fill="none" focusable="false" height="22" role="img" stroke-width="1" viewBox="0 0 24 24" width="22" className=" m-0 p-0 block">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.03862 3.10732L9.15385 2.83077C9.20609 2.70539 9.23094 2.57807 9.27154 2.3701C9.28133 2.31991 9.29205 2.265 9.30429 2.20432C9.55779 0.94701 10.6675 0 12 0C13.3325 0 14.4422 0.94701 14.6957 2.20432C14.7079 2.26497 14.7187 2.31982 14.7284 2.36999C14.769 2.57797 14.7939 2.70539 14.8462 2.83077L14.9614 3.10732C17.6308 4.25576 19.5 6.9096 19.5 10V11.2505C19.5001 12.9299 20.4891 14.4521 22.0238 15.1343L24 16.0126V16.7298C24 17.1944 24 17.5879 23.9737 17.9105C23.946 18.2487 23.8857 18.5745 23.7275 18.885C23.4878 19.3554 23.1054 19.7378 22.635 19.9775C22.3245 20.1357 21.9987 20.196 21.6605 20.2237C21.3379 20.25 20.9445 20.25 20.4799 20.25H17C16.6188 20.25 16.1648 20.6006 15.8926 21.25C15.2561 22.7682 13.7891 24 12 24C10.2109 24 8.74388 22.7682 8.1074 21.25C7.83515 20.6006 7.38115 20.25 7 20.25H3.52022C3.05558 20.25 2.66208 20.25 2.33953 20.2237C2.00133 20.196 1.67555 20.1357 1.36502 19.9775C0.894619 19.7378 0.512168 19.3554 0.272484 18.885C0.114264 18.5745 0.0539654 18.2487 0.0263337 17.9105C-2.18768e-05 17.5879 -1.18634e-05 17.1944 5.34358e-07 16.7298V16.0126L1.97592 15.1344C3.5106 14.4523 4.49995 12.9302 4.5 11.2508V10C4.5 6.9096 6.36915 4.25576 9.03862 3.10732ZM10.7747 2.50079C10.8898 1.92976 11.3956 1.5 12 1.5C12.6044 1.5 13.1102 1.92976 13.2253 2.50079C13.2315 2.5314 13.238 2.56565 13.245 2.60287C12.8401 2.53521 12.4242 2.5 12 2.5C11.5758 2.5 11.1599 2.53521 10.755 2.60287C10.762 2.56565 10.7685 2.5314 10.7747 2.50079ZM12 4C8.68629 4 6 6.68629 6 10V11.2505C5.99993 13.5227 4.6618 15.5821 2.58547 16.505L1.50024 16.9873C1.50108 17.3347 1.50483 17.5861 1.52135 17.7883C1.5414 18.0338 1.57648 18.1402 1.60899 18.204C1.70487 18.3922 1.85785 18.5451 2.04601 18.641C2.10983 18.6735 2.21624 18.7086 2.46168 18.7286C2.71587 18.7494 3.04758 18.75 3.55 18.75H20.45C20.9524 18.75 21.2841 18.7494 21.5383 18.7286C21.7838 18.7086 21.8902 18.6735 21.954 18.641C22.1422 18.5451 22.2951 18.3922 22.391 18.204C22.4235 18.1402 22.4586 18.0338 22.4786 17.7883C22.4952 17.5861 22.4989 17.3347 22.4998 16.9873L21.4149 16.5051C19.3385 15.5822 18.0001 13.523 18 11.2508V10C18 6.68629 15.3137 4 12 4ZM9.49075 20.6701C9.43307 20.5325 9.36367 20.3909 9.28274 20.25H14.7173C14.6363 20.3909 14.5669 20.5325 14.5093 20.6701C14.0575 21.7476 13.0675 22.5 12 22.5C10.9325 22.5 9.9425 21.7476 9.49075 20.6701Z" fill="currentColor" className=" m-0 p-0"></path>
                                        </svg>
                                    </button>
                                </div>
                            </>
                            :
                            <>
                                <div onClick={() => setMobnav(true)} class="outline-[none] self-center box-border m-0 p-0 flex items-center">
                                    <button data-testid="mobileMenuButton" type="button" class="outline-[none] box-border m-0 p-0 bg-transparent [color:inherit] border-0 cursor-pointer [font-family:inherit] [font-size:inherit] [font-weight:inherit] appearance-none">
                                        <svg fill="none" height="40" tabindex="0" viewBox="0 0 24 24" width="40" class="outline-[none] box-border m-0 p-[8px] cursor-pointer">
                                            <path d="M 0 7 L 24 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform-origin="12px 7px" class="outline-[none] box-border m-0 p-0 transform-none origin-[12px_7px]"></path>
                                            <path d="M 0 17 L 24 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform-origin="12px 17px" class="outline-[none] box-border m-0 p-0 transform-none origin-[12px_17px]"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div class="outline-[none] self-center box-border m-0 px-[8px] py-0 absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 flex items-center">
                                    <a aria-label="to home" role="banner" href="/" class="outline-[none] box-border m-0 p-[4px] no-underline [color:inherit] cursor-pointer rounded-[8px] [transition:background-color_0.2s_ease-in-out]">
                                        <div class="outline-[none] box-border m-0 p-0">
                                            <svg fill="none" height="40" viewBox="0 0 160 40" width="160"
                                                xmlns="http://www.w3.org/2000/svg" class="outline-[none] box-border m-0 p-0">
                                                <path clip-rule="evenodd" d="M58.2511 24.7945C57.2263 28.4204 54.3494 30.7457 50.0141 30.7457C44.4571 30.7457 40.6738 26.9225 40.6738 20.9718C40.6738 14.7842 45.2455 10.3306 51.6694 10.3306C54.231 10.3306 55.9652 10.8822 57.0294 11.2764L57.6205 16.9517L57.2263 17.0306C54.9405 13.4442 52.8516 11.1189 51.1177 11.1189C48.8714 11.1189 47.0582 13.917 47.0582 18.4101C47.0582 24.0851 50.0536 26.2924 53.4821 26.2924C55.3741 26.2924 57.108 25.6224 58.0542 24.6762L58.2511 24.7945Z" fill="#131313" fill-rule="evenodd" class="outline-[none] box-border m-0 p-0"></path>
                                                <path clip-rule="evenodd" d="M74.0866 20.5776C74.0866 14.9812 72.8255 11.0795 70.0271 11.0795C67.1897 11.0795 65.968 14.9812 65.968 20.5776C65.968 26.174 67.2291 29.9968 70.0271 29.9968C72.8255 29.9968 74.0866 26.174 74.0866 20.5776ZM59.4258 20.5776C59.4258 15.0995 64.2338 10.3306 70.0272 10.3306C75.8208 10.3306 80.6289 15.0995 80.6289 20.5776C80.6289 26.0556 75.8208 30.7457 70.0272 30.7457C64.2338 30.7457 59.4258 26.0556 59.4258 20.5776Z" fill="#131313" fill-rule="evenodd" class="outline-[none] box-border m-0 p-0"></path>
                                                <path clip-rule="evenodd" d="M90.751 30.1545H82.514V30.0756C83.1445 28.1444 83.4993 26.5677 83.4993 23.218L83.4598 18.7644C83.4598 15.8483 82.9082 14.1536 81.4893 12.4983V12.4194L89.6473 10.1335V14.0747L89.8052 14.1141C90.869 12.4588 92.9185 10.3305 96.4263 10.3305C99.8943 10.3305 102.338 12.4588 102.338 15.8089V23.1786C102.338 26.5286 102.614 28.1444 103.283 30.0756V30.1545H95.0468V30.0756C95.7168 28.1444 95.9927 26.4497 95.9927 23.2575V16.2031C95.9927 14.5478 95.1648 13.2863 93.2732 13.2863C91.8152 13.2863 90.5537 14.1536 89.8052 15.2174V23.218C89.8052 26.4892 90.1204 28.1444 90.751 30.0756V30.1545Z" fill="#131313" fill-rule="evenodd" class="outline-[none] box-border m-0 p-0"></path>
                                                <path clip-rule="evenodd" d="M106.46 25.2676V11.8284H104.253V11.4736L112.372 6.3894H112.805V10.9611H126.998V11.8284H112.805V25.1098C112.805 27.4745 114.066 28.2234 115.643 28.2234C117.022 28.2234 117.85 27.5929 117.889 27.5534L118.007 27.6718C117.14 29.2087 115.012 30.7456 111.899 30.7456C108.706 30.7456 106.46 29.2087 106.46 25.2676Z" fill="#131313" fill-rule="evenodd" class="outline-[none] box-border m-0 p-0"></path>
                                                <path clip-rule="evenodd" d="M119.868 30.1544V30.0754C120.498 28.1443 120.813 26.5676 120.813 23.2179V18.7642C120.813 15.8482 121 13.4348 119.581 11.7791V11.7006L127.001 10.9591V14.9024C128.656 13.2077 130.587 10.094 133.977 10.3304L133.267 16.9515H133.07C132.085 15.6115 129.957 14.6262 128.971 14.6262C128.38 14.6262 127.711 15.0993 127.159 15.7693V23.2179C127.159 26.4891 127.474 28.1443 128.105 30.0754V30.1544H119.868Z" fill="#131313" fill-rule="evenodd" class="outline-[none] box-border m-0 p-0"></path>
                                                <path clip-rule="evenodd" d="M144.382 26.9227V20.2086C141.623 20.9571 140.086 22.9026 140.086 24.7552C140.086 26.2921 140.993 27.3169 142.727 27.3169C143.357 27.3169 143.948 27.159 144.382 26.9227ZM144.5 27.6716C143.397 29.2874 141.505 30.7454 138.983 30.7454C136.579 30.7454 134.529 28.9965 134.529 26.0664C134.529 21.8097 139.928 20.3266 144.382 19.3808V17.3062C144.382 15.0204 143.397 13.9171 140.598 13.9171C139.062 13.9171 137.249 14.232 135.475 14.9809L135.317 14.7055C137.209 12.4193 140.323 10.3303 144.579 10.3303C148.796 10.3303 150.727 12.4193 150.727 15.4935V25.6221C150.727 26.5679 151.161 27.3958 152.422 27.3958C152.855 27.3958 153.407 27.2774 153.92 26.9227L153.999 27.0801C153.447 28.381 152.067 30.7063 148.717 30.7063C146.313 30.7063 144.855 29.4449 144.5 27.6716Z" fill="#131313" fill-rule="evenodd" class="outline-[none] box-border m-0 p-0"></path>
                                                <path clip-rule="evenodd" d="M111.549 11.661H127.002V10.7244H111.549V11.661Z" fill="#131313" fill-rule="evenodd" class="outline-[none] box-border m-0 p-0"></path>
                                                <path clip-rule="evenodd" d="M20.8107 19.0432H33.3399C33.4819 19.0432 33.5969 18.9281 33.5969 18.7862V18.4019C33.5969 18.2847 33.5176 18.1825 33.404 18.153C27.5285 16.6434 22.9181 12.0599 21.3712 6.19175C21.3413 6.07891 21.2392 6 21.1227 6H20.8107C20.6688 6 20.5537 6.11505 20.5537 6.25701V18.7862C20.5537 18.9281 20.6688 19.0432 20.8107 19.0432Z" fill="#131313" fill-rule="evenodd" class="outline-[none] box-border m-0 p-0"></path>
                                                <path clip-rule="evenodd" d="M20.8107 33.5811H21.195C21.3122 33.5811 21.4147 33.5019 21.4439 33.3883C22.9535 27.5131 27.537 22.9023 33.4055 21.3555C33.5184 21.3256 33.5969 21.2235 33.5969 21.1069V20.795C33.5969 20.6534 33.4819 20.5383 33.3399 20.5383H20.8107C20.6688 20.5383 20.5537 20.6534 20.5537 20.795V33.3241C20.5537 33.4661 20.6688 33.5811 20.8107 33.5811Z" fill="#131313" fill-rule="evenodd" class="outline-[none] box-border m-0 p-0"></path>
                                                <path clip-rule="evenodd" d="M18.4742 33.5815H18.7858C18.9278 33.5815 19.0428 33.4665 19.0428 33.3241V20.7953C19.0428 20.6534 18.9278 20.5383 18.7858 20.5383H6.25701C6.11505 20.5383 6 20.6534 6 20.7953V21.1792C6 21.2968 6.07928 21.399 6.19285 21.4285C12.068 22.9381 16.6788 27.5212 18.2257 33.3898C18.2556 33.5026 18.3573 33.5815 18.4742 33.5815Z" fill="#131313" fill-rule="evenodd" class="outline-[none] box-border m-0 p-0"></path>
                                                <path clip-rule="evenodd" d="M6.25701 19.0432H18.7858C18.9278 19.0432 19.0428 18.9281 19.0428 18.7862V6.25701C19.0428 6.11505 18.9278 6 18.7858 6H18.4019C18.2847 6 18.1822 6.07965 18.153 6.19322C16.643 12.0684 12.0599 16.6792 6.19138 18.2261C6.07854 18.2556 6 18.3577 6 18.4746V18.7862C6 18.9281 6.11505 19.0432 6.25701 19.0432Z" fill="#131313" fill-rule="evenodd" class="outline-[none] box-border m-0 p-0"></path>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                                <div class="outline-[none] self-center box-border m-0 p-0 flex items-center gap-[2px]">
                                    <ul class="outline-[none] box-border m-0  p-0 [list-style:none]">
                                        <li class="outline-[none] flex items-center justify-center box-border m-[unset] p-0 ">
                                            <button aria-label="" type="button" variant="sectionEnd" class="outline-[none] box-border m-[unset] p-[unset] bg-transparent [color:inherit] border-0 cursor-pointer [font-family:inherit] [font-size:inherit] [font-weight:inherit] appearance-none flex flex-row items-center [transition:0.3s_ease-in-out]  w-full">
                                                <div class="outline-[none] box-border m-0 p-0 grid relative w-[40px] h-[40px] mr-0 [cursor:inherit]">
                                                    <svg fill="none" focusable="false" height="24" role="img" stroke-width="1" viewBox="0 0 24 24" width="24" class="outline-[none] box-border m-auto p-0 text-[rgb(74,_82,_100)]">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.03862 3.10732L9.15385 2.83077C9.20609 2.70539 9.23094 2.57807 9.27154 2.3701C9.28133 2.31991 9.29205 2.265 9.30429 2.20432C9.55779 0.94701 10.6675 0 12 0C13.3325 0 14.4422 0.94701 14.6957 2.20432C14.7079 2.26497 14.7187 2.31982 14.7284 2.36999C14.769 2.57797 14.7939 2.70539 14.8462 2.83077L14.9614 3.10732C17.6308 4.25576 19.5 6.9096 19.5 10V11.2505C19.5001 12.9299 20.4891 14.4521 22.0238 15.1343L24 16.0126V16.7298C24 17.1944 24 17.5879 23.9737 17.9105C23.946 18.2487 23.8857 18.5745 23.7275 18.885C23.4878 19.3554 23.1054 19.7378 22.635 19.9775C22.3245 20.1357 21.9987 20.196 21.6605 20.2237C21.3379 20.25 20.9445 20.25 20.4799 20.25H17C16.6188 20.25 16.1648 20.6006 15.8926 21.25C15.2561 22.7682 13.7891 24 12 24C10.2109 24 8.74388 22.7682 8.1074 21.25C7.83515 20.6006 7.38115 20.25 7 20.25H3.52022C3.05558 20.25 2.66208 20.25 2.33953 20.2237C2.00133 20.196 1.67555 20.1357 1.36502 19.9775C0.894619 19.7378 0.512168 19.3554 0.272484 18.885C0.114264 18.5745 0.0539654 18.2487 0.0263337 17.9105C-2.18768e-05 17.5879 -1.18634e-05 17.1944 5.34358e-07 16.7298V16.0126L1.97592 15.1344C3.5106 14.4523 4.49995 12.9302 4.5 11.2508V10C4.5 6.9096 6.36915 4.25576 9.03862 3.10732ZM10.7747 2.50079C10.8898 1.92976 11.3956 1.5 12 1.5C12.6044 1.5 13.1102 1.92976 13.2253 2.50079C13.2315 2.5314 13.238 2.56565 13.245 2.60287C12.8401 2.53521 12.4242 2.5 12 2.5C11.5758 2.5 11.1599 2.53521 10.755 2.60287C10.762 2.56565 10.7685 2.5314 10.7747 2.50079ZM12 4C8.68629 4 6 6.68629 6 10V11.2505C5.99993 13.5227 4.6618 15.5821 2.58547 16.505L1.50024 16.9873C1.50108 17.3347 1.50483 17.5861 1.52135 17.7883C1.5414 18.0338 1.57648 18.1402 1.60899 18.204C1.70487 18.3922 1.85785 18.5451 2.04601 18.641C2.10983 18.6735 2.21624 18.7086 2.46168 18.7286C2.71587 18.7494 3.04758 18.75 3.55 18.75H20.45C20.9524 18.75 21.2841 18.7494 21.5383 18.7286C21.7838 18.7086 21.8902 18.6735 21.954 18.641C22.1422 18.5451 22.2951 18.3922 22.391 18.204C22.4235 18.1402 22.4586 18.0338 22.4786 17.7883C22.4952 17.5861 22.4989 17.3347 22.4998 16.9873L21.4149 16.5051C19.3385 15.5822 18.0001 13.523 18 11.2508V10C18 6.68629 15.3137 4 12 4ZM9.49075 20.6701C9.43307 20.5325 9.36367 20.3909 9.28274 20.25H14.7173C14.6363 20.3909 14.5669 20.5325 14.5093 20.6701C14.0575 21.7476 13.0675 22.5 12 22.5C10.9325 22.5 9.9425 21.7476 9.49075 20.6701Z" fill="currentColor" class="outline-[none] box-border m-0 p-0"></path>
                                                    </svg>
                                                </div>
                                                <label class="outline-[none] box-border m-0 p-0 inline [cursor:inherit] mr-0"></label>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </>

                    }
                </div>

            </nav>
            {
                <div className='a992:hidden'>
                    {

                        mobnav &&
                        <Sidebar setMobnav={setMobnav} mobnav={mobnav} />
                    }
                </div>
            }
        </>

    )
}

export default Navbar
