import React from "react";

export const Footer = () => {
  return (
    <div className="container mx-auto pt-[100px] pb-[20px]">
      <ul className="grid  md:grid-cols-4 dark:bg-gray-900 dark:p-8">
        <li className="mb-4 md:mb-0">
          <img className="dark:invert mb-4" src="/header-logo.svg" alt="logo" />
          <a className="dark:text-white text-lg font-semibold" href="#">
            Mobilux © 2022
          </a>
          <p className="dark:text-white mb-4">Barcha huquqlar kafolatlangan</p>
          <div className="flex gap-5">
            <a
              href="https://play.google.com/store/apps/details?id=your-app-id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/footer-icon1.svg" alt="Google Play" />
            </a>
            <a
              href="https://apps.apple.com/app/idyourappid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/footer-icon2.svg" alt="App Store" />
            </a>
          </div>
        </li>

        <li className="mb-4 md:mb-0">
          <h1 className="dark:text-white mb-4 text-lg font-semibold">
            Foydali havolalar
          </h1>
          <div className="flex flex-col">
            <a className="dark:text-white mb-2" href="#">
              Bosh sahifa
            </a>
            <a className="dark:text-white mb-2" href="#">
              Foydalanish shartlari
            </a>
            <a className="dark:text-white" href="#">
              Maxfiylik siyosati
            </a>
          </div>
        </li>

        <li className="md:col-span-2">
          <h1 className="dark:text-white mb-4 text-lg font-semibold">
            Biz haqimizda
          </h1>
          <div className="flex flex-col">
            <a className="dark:text-white p-1" href="#">
              Manzil: #214, G-dong, Lotte castle, 347 Jongno, Jongno-gu, Seoul,
              03113, Crescent
            </a>
            <a className="dark:text-white p-1" href="#">
              Korxona nomi: Mobilux trade
            </a>
            <a className="dark:text-white p-1" href="#">
              Korxona rahbari: HASANBOY TURSUNOV
            </a>
            <a className="dark:text-white p-1" href="#">
              Registratsiya raqami: 433-62-00377
            </a>
            <a className="dark:text-white" href="#">
              Telefon raqam: 93 000 66-44, 97 000 66-44
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};
