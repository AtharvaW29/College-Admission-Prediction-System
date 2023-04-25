import React from "react";

import { Button } from "components";
import { useNavigate } from "react-router-dom";

const FrameThreeButtons = (props) => {
  
  const {data, onChange} = props;
  const navigate = useNavigate();

  const onChangeData = (gender) => {
    const newData = {...data, 'Gender': gender}
    console.log(newData);
    onChange(newData)
  }

  return (
    <>
      <div className={props.className}>
        <Button
          className="cursor-pointer font-normal font-poppins leading-[normal] min-w-[320px] not-italic text-4xl sm:text-[32px] md:text-[34px] text-center text-white_A700 w-full"
          shape="CircleBorder38"
          size="md"
          variant="OutlineBlack9007f_1"
          onClick={() => {
            onChangeData(props.value)
            navigate("/framefive")
          }}
        >
          {props?.name}
        </Button>
      </div>
    </>
  );
};

FrameThreeButtons.defaultProps = {
  male: "Male",
  female: "Female",
  trans: "Trans",
};

export default FrameThreeButtons;
