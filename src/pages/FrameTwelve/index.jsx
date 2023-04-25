import React from "react";

import { Text } from "components";
import { useNavigate } from "react-router-dom";

const FrameTwelvePage = ({data, onChange}) => {
  const navigate = useNavigate();

  const handleRoundSelect = (event) => {
    const round_no = Number(event.target.value)
    const newData = {...data, 'Round': round_no}
    console.log(newData)
    onChange(newData)
    navigate('/framefourteen')
  };

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[79px] items-center justify-start mx-auto p-[312px] md:px-10 sm:px-5 w-full">
        <Text
          className="font-medium text-gray_900 text-left w-auto"
          as="h2"
          variant="h2"
        >
          Select the Round of Admission
        </Text>
        <select
          className="bg-bluegray_500 flex flex-row items-center justify-center mb-[129px] p-[25px] md:px-5 rounded-[50px] shadow-bs1 w-[35%] md:w-full"
          value={data}
          onChange={handleRoundSelect}
        >
          <option value="">Select Rounds</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
        </select>
      </div>
    </>
  );
};

export default FrameTwelvePage;
