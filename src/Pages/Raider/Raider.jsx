import React from 'react';

import image from "../../assets/agent-pending.png"

const Raider = () => {
    return (
      <div className="p-15 bg-neutral mt-5 mb-20 rounded-2xl flex items-end ">
        <div className="w-1/2 ">
          <div className="header">
            <h2 className="text-4xl text-secondary font-bold mb-4">Become a Raider</h2>
            <p className="text-neutral-content">
              Enjoy fast, reliable parcel delivery with real-time tracking and
              zero hassle. From <br /> personal packages to business shipments —
              we deliver on time, every time.
            </p>
          </div>

          <div className="mt-7">
            <h2 className="text-xl text-secondary font-bold mb-6">Tell us about yourself</h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium mb-1">
                  Your Name
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  placeholder="Your Name"
                  aria-label="Your Name"
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-1">
                  Yor age
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  placeholder="Yor age"
                  aria-label="Age"
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-1">
                  Your Email
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  placeholder="Your Email"
                  type="email"
                  aria-label="Email"
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-1">
                  Your District
                </label>
                <div className="relative">
                  <select
                    className="w-full appearance-none px-3 py-2 border rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-label="District"
                  >
                    <option>Select your District</option>
                    <option>Dhaka</option>
                    <option>Chattogram</option>
                    <option>Sylhet</option>
                  </select>
                  <svg
                    className="w-4 h-4 absolute right-3 top-2.5 pointer-events-none"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M6 7l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium mb-1">NID No</label>
                <input
                  className="w-full px-3 py-2 border rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  placeholder="NID"
                  aria-label="NID"
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-1">
                  Contact
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  placeholder="Contact"
                  aria-label="Contact"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-medium mb-1">
                  Which wire-house you want to work?
                </label>
                <div className="relative">
                  <select
                    className="w-full appearance-none px-3 py-2 border rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-label="Wire-house"
                  >
                    <option>Select wire-house</option>
                    <option>Warehouse A</option>
                    <option>Warehouse B</option>
                  </select>
                  <svg
                    className="w-4 h-4 absolute right-3 top-2.5 pointer-events-none"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M6 7l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="md:col-span-2">
                <button
                  type="button"
                  className="btn btn-soft btn-accent w-full"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="w-1/2 flex justify-center items-center ">
          <img src={image} alt="" />
        </div>
      </div>
    );
};

export default Raider;