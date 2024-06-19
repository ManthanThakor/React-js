import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Download Now
              <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
            </h2>
            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
              to="/"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.88-10.622l2.854 2.845 8.695-8.679c1.002-1.001 1.013-2.621.022-3.612-.987-.987-2.598-.983-3.588.007l-7.367 7.368-2.846-2.846 7.368-7.368c1.99-1.99 5.204-1.996 7.188-.013 1.983 1.983 1.977 5.198-.013 7.188l-8.679 8.679 2.844 2.844-5.071 5.056-8.058-8.058 5.051-5.051zm-.689.668l-9.062 9.062-.7-5.789 3.297-3.287 6.465 6.465zm-7.986-7.979c-1.089-1.089-1.089-2.853 0-3.942l1.971-1.971c1.089-1.089 2.854-1.089 3.943 0l4.293 4.293-5.914 5.914-4.293-4.294zm7.003-2.645l.707.707-5.914 5.914-.707-.707 5.914-5.914zm-.507 1.96l2.547-2.547 1.061 1.06-2.548 2.548-1.06-1.061z" />
              </svg>
              Download
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 w-full h-full bg-[url('https://images.pexels.com/photos/5634627/pexels-photo-5634627.jpeg')] bg-cover bg-center"></div>
      </aside>
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="mb-12 space-y-2 text-center">
            <span className="text-gray-400 font-light">Our best projects</span>
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Journey to our projects
            </h2>
            <p className="lg:w-6/12 lg:mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="group p-6 bg-white rounded-xl border border-gray-100 shadow-xl hover:rounded-2xl hover:shadow-2xl transition-all duration-300">
              <div className="space-y-4">
                <img
                  src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/burger.png"
                  alt="burger illustration"
                  className="w-32 h-32 mx-auto"
                />
                <div className="text-center space-y-2">
                  <h4 className="text-2xl text-gray-700 font-bold transition group-hover:text-orange-600">
                    Project 1
                  </h4>
                  <p className="text-gray-600">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="group p-6 bg-white rounded-xl border border-gray-100 shadow-xl hover:rounded-2xl hover:shadow-2xl transition-all duration-300">
              <div className="space-y-4">
                <img
                  src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/trowel.png"
                  alt="trowel illustration"
                  className="w-32 h-32 mx-auto"
                />
                <div className="text-center space-y-2">
                  <h4 className="text-2xl text-gray-700 font-bold transition group-hover:text-orange-600">
                    Project 2
                  </h4>
                  <p className="text-gray-600">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="group p-6 bg-white rounded-xl border border-gray-100 shadow-xl hover:rounded-2xl hover:shadow-2xl transition-all duration-300">
              <div className="space-y-4">
                <img
                  src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png"
                  alt="metal illustration"
                  className="w-32 h-32 mx-auto"
                />
                <div className="text-center space-y-2">
                  <h4 className="text-2xl text-gray-700 font-bold transition group-hover:text-orange-600">
                    Project 3
                  </h4>
                  <p className="text-gray-600">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="group p-6 bg-white rounded-xl border border-gray-100 shadow-xl hover:rounded-2xl hover:shadow-2xl transition-all duration-300">
              <div className="space-y-4">
                <img
                  src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/worker.png"
                  alt="worker illustration"
                  className="w-32 h-32 mx-auto"
                />
                <div className="text-center space-y-2">
                  <h4 className="text-2xl text-gray-700 font-bold transition group-hover:text-orange-600">
                    Project 4
                  </h4>
                  <p className="text-gray-600">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
