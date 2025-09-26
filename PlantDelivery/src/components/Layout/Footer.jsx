import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <svg width="48" height="48" viewBox="0 0 100 100" fill="none">
              <g>
                <path d="M30 70 H70 L60 90 H40 Z" fill="#8D6E63" />
                <path d="M50 30 V70" stroke="#388E3C" strokeWidth="3" />
                <path
                  d="M50 30 Q40 20 30 30"
                  stroke="#388E3C"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M50 30 Q60 20 70 30"
                  stroke="#388E3C"
                  strokeWidth="3"
                  fill="none"
                />
              </g>
            </svg>
            <p className="text-sm mt-2">© 2025 Plant Delivery App</p>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-lg">Products</h4>
              <ul className="space-y-2 text-base">
                <li>
                  <a href="#" className="hover:underline">
                    Indoor Plants
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Outdoor Plants
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Plant Combos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Planters & Pots
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-lg">Services</h4>
              <ul className="space-y-2 text-base">
                <li>
                  <a href="#" className="hover:underline">
                    Plant Care Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Gift Plants
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Subscription Plans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Delivery Tracking
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-lg">Contact</h4>
              <ul className="space-y-2 text-base">
                <li>
                  <a
                    href="mailto:support@plantdelivery.com"
                    className="hover:underline"
                  >
                    Email Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-lg">Resources</h4>
              <ul className="space-y-2 text-base">
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-2xl font-bold mb-4 md:mb-0">
            For a better experience, download the Plant Delivery app now
          </p>
          <div className="flex gap-4">
            <a href="#">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-12"
              />
            </a>
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Play Store"
                className="h-12"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
