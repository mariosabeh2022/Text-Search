import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [keybword, setKeybword] = useState("");
  const postsFound = 0;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeybword(e.target.value);
  };
  const resetKeyword = () => {
    setKeybword("");
  };
  return (
    <div className="bg-gray-300 min-h-screen m-4 p-4">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">Search</h1>
          <div className="gap-2 justify-start sm:justify-start mt-4">
            <div className="bg-white border border-gray-200 rounded-sm flex justify-start sm:px-5 md:px-25 lg:px-60 py-1 w-full sm:w-auto max-w-sm">
              <input
                type="text"
                className="outline-none"
                value={keybword}
                onChange={handleChange}
              />
              <button onClick={resetKeyword}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white border-2 border-gray-400 rounded-sm sm:w-[35%] lg:w-[45%] p-2 mt-2 flex flex-shrink-2">
          <span className="text-xl">
            <span className="font-bold">bitsofcode. </span>
            <span className="flex flex-wrap">
              Articles on Frontend Development. All articles are written by{" "}
              <span className="underline pl-1">Ire Aderinokun,</span>Frontend
              Developer and User Interface Designer.
            </span>
          </span>
        </div>
      </div>
      <h1 className="font-bold mt-5">
        {postsFound} posts <span className="font-normal">were found.</span>
      </h1>
      <div className="mt-5 w-[50%] h-auto">
        <h1 className="font-bold text-2xl">
          Understanding the difference between grid-template and grid-auto
        </h1>
        <h1 className="italic">Oct 09, 2018</h1>
        <p className="w-[50%] mt-2">
          With all the new propreties related to CSS Layout, one of the
          distinctions that always confused me was the difference between the
          grid-template-* and grid-auto-* propreties.Specially the difference
          between grid-template-rows/columns and grid-auto-rows/columns.
          Although I knew difference were to d...
        </p>
      </div>
    </div>
  );
}

export default App;
