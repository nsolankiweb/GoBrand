"use client";

export default function Search() {

  return (
    <div>
        <h1>Welcome to GoBrand!</h1>
        <p>Please search for your brand below to view its details. </p>

        <form action="/search" className="my-4 flex w-full max-w-4xl mx-auto gap-2">
            {/* Input */}
            <input
            type="text"
            name="q"
            placeholder="Search brands..."
            className="flex-1 border border-gray-500 rounded-md p-2"
            />

            {/* Search Icon */}
            <div className="flex items-center px-2 text-gray-600">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
            </svg>
            </div>

            {/* Submit Button */}
            <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500"
            >
            Search
            </button>
        </form>
    </div>
  );
}