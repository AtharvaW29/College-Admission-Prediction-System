import React, { useState } from "react";

import { Text } from "components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FrameSevenPage = ({ data, onChange }) => {
  const navigate = useNavigate();
  const [rank, setRank] = useState();

  const handleRankChange = (event) => {
    setRank(event.target.value);
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      const newData = { ...data, "Opening Rank": rank };
      onChange(newData);

      // Make API post request here using fetch or axios
      await axios
        .post("http://127.0.0.1:5000", newData, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
          crossDomain: true
        })
        .then((response) => {
          console.log(response.data);
          navigate("/framesix");
        })
        .catch((error) => {
          console.error("There was a problem with the API request:", error);
        });
    }
  };

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[71px] items-center justify-start mx-auto p-80 md:px-10 sm:px-5 w-full">
        <Text
          className="font-medium text-gray_900 text-left w-auto"
          as="h2"
          variant="h2"
        >
          Enter your All India Rank!!
        </Text>
        <input
          className="common-pointer cursor-pointer font-normal leading-[normal] mb-[166px] min-w-[430px] sm:min-w-full not-italic sm:text-4xl md:text-[38px] text-[40px] text-center text-gray_300 w-auto"
          type="number"
          value={rank}
          onChange={handleRankChange}
          onKeyDown={handleKeyDown}
          placeholder="Type here..."
        />
      </div>
    </>
  );
};

export default FrameSevenPage;
