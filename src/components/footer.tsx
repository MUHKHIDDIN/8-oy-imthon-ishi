import React from "react";

export const Footer = () => {
  return (
    <div className="bg-white dark:bg-gray-900 mt-10">
      <div className="container mx-auto px-4 py-6">
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-4 dark:bg-gray-900 dark:p-8">
          <li className="flex flex-col items-start md:items-start">
            <img className="dark:invert mb-4 w-32" src="/header-logo.svg" alt="logo" />
            <a className="dark:text-white text-lg font-semibold" href="#">
              Mobilux © 2022
            </a>
            <p className="dark:text-white mb-4">Barcha huquqlar kafolatlangan</p>
            <div className="flex gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=your-app-id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-8" src="/footer-icon1.svg" alt="Google Play" />
              </a>
              <a
                href="https://apps.apple.com/app/idyourappid"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-8" src="/footer-icon2.svg" alt="App Store" />
              </a>
            </div>
          </li>

          <li className="flex flex-col">
            <h1 className="dark:text-white mb-4 text-lg font-semibold">
              Foydali havolalar
            </h1>
            <div className="flex flex-col space-y-2">
              <a className="dark:text-white" href="#">
                Bosh sahifa
              </a>
              <a className="dark:text-white" href="#">
                Foydalanish shartlari
              </a>
              <a className="dark:text-white" href="#">
                Maxfiylik siyosati
              </a>
            </div>
          </li>

          <li className="md:col-span-2 flex flex-col">
            <h1 className="dark:text-white mb-4 text-lg font-semibold">
              Biz haqimizda
            </h1>
            <div className="flex flex-col space-y-2">
              <a className="dark:text-white" href="#">
                Manzil: #214, G-dong, Lotte castle, 347 Jongno, Jongno-gu, Seoul,
                03113, Crescent
              </a>
              <a className="dark:text-white" href="#">
                Korxona nomi: Mobilux trade
              </a>
              <a className="dark:text-white" href="#">
                Korxona rahbari: HASANBOY TURSUNOV
              </a>
              <a className="dark:text-white" href="#">
                Registratsiya raqami: 433-62-00377
              </a>
              <a className="dark:text-white" href="#">
                Telefon raqam: 93 000 66-44, 97 000 66-44
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
