import React, { useState } from "react";

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex justify-end">
      <input
        type="text"
        className={`transition-all duration-300 ease-in-out bg-gray-200 border text-[12px] border-gray-300 rounded-xl  py-1 px-4 ${isFocused ? "w-40" : "w-24"} focus:outline-none`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Patient Id"
      />
    </div>
  );
};

export default SearchBar;
