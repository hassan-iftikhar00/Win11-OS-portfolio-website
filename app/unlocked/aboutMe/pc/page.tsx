"use client";

import { Bodoni_Moda } from "next/font/google";

const openSans = Bodoni_Moda({ subsets: ["latin"], weight: ["400"] });

export default function Page() {
  return (
    <main className="flex px-2 flex-col overflow-y-auto h-full bg-[#3a3a3a]">
      <div className={openSans.className}>
        <p className="outline-none" contentEditable>
          👨‍💻 Hello, and welcome! 👋🏻
          <br />
          <br />
          In this notepad, I&apos;ve listed my PC&apos;s configurations,
          including both peripherals and components:
          <br />
          <br />
          <span>##Config:</span>
          <br />
          <span>- Processor: AMD Ryzen 5 5600X 3.7GHz</span>
          <br />
          <span>
            - Motherboard: Gigabyte A520M DS3H, Chipset A520, AMD AM4, mATX,
            DDR4
          </span>
          <br />
          <span>
            - Power Supply: SuperFrame, 600W, 80 Plus Bronze, Active PFC, Flat
            Cables, SF-B600FL
          </span>
          <br />
          <span>- Memory: DDR4 Geil Orion, 16GB (2x8GB) 3600MHz, Red</span>
          <br />
          <span>- Case: Aerocool Cylon RGB, Mid Tower, Acrylic, Black</span>
          <br />
          <span>- SSD: KingSpec 512GB</span>
          <br />
          <span>- HDD: 300GB</span>
          <br />
          <br />
          ##Peripherals:
          <br />
          <span>- Headset: Evolut Têmis Power Gaming Headset</span>
          <br />
          <span>- Mouse: Knup KP-MU008 USB Gaming Mouse</span>
          <br />
          <span>- Mechanical Keyboard</span>
          <br />
        </p>
      </div>
    </main>
  );
}
