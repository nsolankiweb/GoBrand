"use client";

export default function Search() {
  return (
    <div className="text-center mb-8">
      {/* Title */}
      <h1 className="text-3xl font-extrabold text-green-900">
        Welcome to GoBrand!
      </h1>

      {/* Subtitle */}
      <p className="text-stone-600 mt-2">
        Please search for your brand below to view its sustainability rating.
      </p>

      {/* Search Form */}
      <form
        action="/search"
        className="mt-6 flex w-full max-w-3xl mx-auto gap-3 items-center"
      >
        {/* Input */}
        <div className="flex flex-1 items-center bg-white border border-green-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-150 px-3 py-2">
          {/* Search Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-green-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <input
            type="text"
            name="q"
            placeholder="Search sustainable brands..."
            className="flex-1 bg-transparent border-none focus:outline-none text-green-900 placeholder-stone-400 ml-2"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-600 text-white font-medium px-6 py-2 rounded-xl shadow-sm hover:bg-green-500 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-150"
        >
          Search
        </button>
      </form>
    </div>
  );
}
