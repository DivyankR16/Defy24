import React from "react";
const UploadVideo = () => {
  return (
    <>
      <div className="bg-cyan-900 m-8 rounded-xl p-8">
        <form className="">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Video title
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-cyan-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Duration
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-cyan-900 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6 h-52">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-description"
              >
                Description
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-cyan-900 border border-gray-200 rounded p-20 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-description"
                type="text"
                placeholder="Write Description...."
              />
            </div>
          </div>
          {/* <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                City
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-cyan-900 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="Albuquerque"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                State
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                Zip
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-cyan-900 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="90210"
              />
            </div>
          </div> */}
          <div className="flex flex-wrap -mx-3 mb-6 h-52">
            <div className="w-full px-3 flex justify-start">
              <fieldset>
                <legend className="text-md font-semibold leading-6 text-white">
                  Category
                </legend>
                <p className="mt-1 text-sm  text-gray-200">
                  Choose category your video belongs to:
                </p>
                <div className="flex flex-row mt-6 space-y-6 justify-evenly">
                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-everything"
                        name="push-notifications"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-600"
                      />
                      <label
                        htmlFor="push-everything"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Gaming
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-email"
                        name="push-notifications"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-600"
                      />
                      <label
                        htmlFor="push-email"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Movie
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-nothing"
                        name="push-notifications"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-600"
                      />
                      <label
                        htmlFor="push-nothing"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Music
                      </label>
                    </div>
                  </div>
                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-everything"
                        name="push-notifications"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-600"
                      />
                      <label
                        htmlFor="push-everything"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Comedy
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-email"
                        name="push-notifications"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-600"
                      />
                      <label
                        htmlFor="push-email"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Action
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-nothing"
                        name="push-notifications"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-600"
                      />
                      <label
                        htmlFor="push-nothing"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Education
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
              <div className="flex flex-wrap -mx-3 mb-6">
                {/* <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <div className="flex items-center justify-center w-full h-1/2"> */}
                {/* <div className="m-8">
                  <div className="flex flex-wrap -mx-3 mb-6"> */}
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <h2 className="text-xl font-semibold mb-4 text-white">
                    Upload Image
                  </h2>
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        {/* <!-- SVG path data --> */}
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <h2 className="text-xl font-semibold mb-4 text-white">
                    Upload Video
                  </h2>
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        {/* <!-- SVG path data --> */}
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        mp4 or videos
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
                <div className="m-4">
                  <button
                    className="bg-blue-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded-l"
                    type="submit"
                  >
                    Upload
                  </button>
                </div>
              </div>

              {/* </div>
                </div>
              </div> */}
            </div>
            {/* <div className="flex flex-col"></div> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default UploadVideo;
