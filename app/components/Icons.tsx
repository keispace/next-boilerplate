import Image from "next/image";

export const ExtIcons = ({ ext, size = 24 }: { ext: string, size?: number }) => {
  switch (ext) {
    case 'dcm': return <Image src='/storage/icons/ext-dcm.svg' width={size} height={size} alt="dcm icon" />
    case 'jpg': case 'svg': case 'png': case 'jpeg': return <Image src='/storage/icons/ext-img.svg' width={size} height={size} alt="img icon" />
    default: return <Image src='/storage/icons/ext-doc.svg' width={size} height={size} alt="doc icon" />
  }
}

export const Icon_My = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_1968_20678)">
    <path d="M4 22C4 19.8783 4.84285 17.8434 6.34315 16.3431C7.84344 14.8429 9.87827 14 12 14C14.1217 14 16.1566 14.8429 17.6569 16.3431C19.1571 17.8434 20 19.8783 20 22H18C18 20.4087 17.3679 18.8826 16.2426 17.7574C15.1174 16.6321 13.5913 16 12 16C10.4087 16 8.88258 16.6321 7.75736 17.7574C6.63214 18.8826 6 20.4087 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" fill="#A1A1A1" />
  </g>
  <defs>
    <clipPath id="clip0_1968_20678">
      <rect width="24" height="24" fill="white" />
    </clipPath>
  </defs>
</svg>

export const Icon_Search = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clipPath="url(#clip0_1968_20681)">
    <path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="#A1A1A1" />
  </g>
  <defs>
    <clipPath id="clip0_1968_20681">
      <rect width="24" height="24" fill="white" />
    </clipPath>
  </defs>
</svg>


export const Icon_Upload = () => <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <mask id="mask0_1968_16622" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
    <rect width="64" height="64" fill="#D9D9D9" />
  </mask>
  <g mask="url(#mask0_1968_16622)">
    <path d="M17.333 50.6668C14.0065 50.6668 11.1749 49.51 8.83814 47.1964C6.50139 44.8827 5.33301 42.0549 5.33301 38.713C5.33301 35.554 6.42019 32.8155 8.59454 30.4976C10.7689 28.1797 13.3227 26.9335 16.2561 26.7591C16.8544 22.8754 18.6407 19.6668 21.6151 17.1335C24.5894 14.6002 28.051 13.3335 31.9997 13.3335C36.4568 13.3335 40.2378 14.8859 43.3425 17.9906C46.4473 21.0954 47.9997 24.8763 47.9997 29.3335V32.0002H49.6407C52.1945 32.0822 54.3373 33.0198 56.0689 34.813C57.8005 36.6061 58.6663 38.7796 58.6663 41.3335C58.6663 43.9489 57.7817 46.1583 56.0125 47.9617C54.2433 49.7651 52.051 50.6668 49.4355 50.6668H34.974C33.7467 50.6668 32.7219 50.2557 31.8997 49.4335C31.0775 48.6113 30.6663 47.5865 30.6663 46.3592V30.8822L25.0663 36.4514L23.1791 34.6156L31.9997 25.795L40.8202 34.6156L38.933 36.4514L33.333 30.8822V46.3592C33.333 46.7694 33.5039 47.1455 33.8458 47.4874C34.1877 47.8292 34.5638 48.0002 34.974 48.0002H49.333C51.1997 48.0002 52.7774 47.3557 54.0663 46.0668C55.3552 44.7779 55.9997 43.2002 55.9997 41.3335C55.9997 39.4668 55.3552 37.8891 54.0663 36.6002C52.7774 35.3113 51.1997 34.6668 49.333 34.6668H45.333V29.3335C45.333 25.6446 44.033 22.5002 41.433 19.9002C38.833 17.3002 35.6886 16.0002 31.9997 16.0002C28.3108 16.0002 25.1663 17.3002 22.5663 19.9002C19.9663 22.5002 18.6663 25.6446 18.6663 29.3335H17.2305C14.7552 29.3335 12.598 30.2446 10.7587 32.0668C8.91934 33.8891 7.99967 36.0891 7.99967 38.6668C7.99967 41.2446 8.91079 43.4446 10.733 45.2668C12.5552 47.0891 14.7552 48.0002 17.333 48.0002H23.9997V50.6668H17.333Z" fill="white" />
  </g>
</svg>


export const Icon_Modal_Minus = () => <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.5" y="0.5" width="27" height="27" rx="3.5" fill="white" fillOpacity="0.1" />
  <path d="M6 14H22" stroke="#A1A1A1" strokeWidth="1.5" strokeLinecap="round" />
  <rect x="0.5" y="0.5" width="27" height="27" rx="3.5" stroke="#222222" />
</svg>

export const Icon_Modal_Close = () => <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.5" y="0.5" width="27" height="27" rx="3.5" fill="white" fillOpacity="0.1" />
  <line x1="0.75" y1="-0.75" x2="17.7089" y2="-0.75" transform="matrix(0.703174 0.711018 -0.703174 0.711018 7 7.875)" stroke="#A1A1A1" strokeWidth="1.5" strokeLinecap="round" />
  <line x1="0.75" y1="-0.75" x2="17.7089" y2="-0.75" transform="matrix(-0.703174 0.711018 0.703174 0.711018 21 7.875)" stroke="#A1A1A1" strokeWidth="1.5" strokeLinecap="round" />
  <rect x="0.5" y="0.5" width="27" height="27" rx="3.5" stroke="#222222" />
</svg>
