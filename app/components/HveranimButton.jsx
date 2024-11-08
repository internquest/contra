'use client'
import React, { useState } from 'react'

const HveranimButton = () => {

    const [hover, setHover] = useState(false)
    console.log(hover);

    return (
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} class="outline-[none]  box-border m-auto p-0 w-[unset]">
            <button type="button" variant="V2Gradient" backgroundcolor="white" color="black" fdprocessedid="0r9s5g" class=" relative text-center normal-case  inline-block w-full [transition:150ms_ease-out] overflow-hidden cursor-pointer h-[48px] pl-[24px] pr-[24px] rounded-[24px] min-w-[100px]  border-0 border-solid border-transparent bg-none  bg-white z-[1] !text-black [color:inherit] outline-[none] box-border m-0 p-0 [font-family:inherit] [font-size:inherit] [font-weight:inherit] appearance-none whitespace-nowrap">
                <span class="flex items-center group-hover:text-black  justify-center gap-[8px] h-full opacity-100 outline-[none] box-border m-0 p-0">
                    <span class="h-[24px] w-[24px] outline-[none] box-border m-0 p-0">
                        <svg fill="none" focusable="false" height="24" role="img" viewBox="0 0 24 24" width="24" class="outline-[none] box-border m-0 p-0">
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
                    </span>
                    <span textstyle="subtitleRegular" variant="V2Gradient" class=" font-medium text-[1rem] leading-normal outline-[none] box-border m-0 p-0">Become a Pro member</span>
                    <div style={{ opacity: hover ? 1 : 0 }} class="absolute inset-0 w-full [border-radius:inherit] bg-[linear-gradient(117.09deg,_rgb(34,_40,_52)_-5%,_rgb(106,_87,_227)_10%,_rgb(205,_116,_221)_50%,_rgb(106,_87,_227)_90%,_rgb(34,_40,_52)_105%)] z-[-1] [background-size:400%_400%] animate-bgtrans opacity-0  [transition:opacity_0.2s_ease-in-out] outline-[none] box-border m-0 p-0"></div>
                </span>
            </button>
        </div>
    )
}

export default HveranimButton
