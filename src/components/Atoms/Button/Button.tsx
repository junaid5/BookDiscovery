import React from "react";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface ButtonProps {
  content: string;
  width: string;
  endIcon: boolean;
  height: string;
  color: string;
  backgroundColor: string
  type: string;
}

const Buttons: React.FC<ButtonProps> = ({ content, ...props }) => {
  return (
    <div data-testid="Button-element" >
    <Button
      endIcon={props.endIcon ? <ArrowDropDownIcon /> : <></>}
      variant={props.type=="text" ? "text" : "outlined"}
      sx={{
        backgroundColor: `${props.backgroundColor}`,
        color: `${props.color}`,
        height: `${props.height}`,
        width: `${ props.width }`,
        position: "relative",
        top: "20px",
        left: "20px"
      }}
    >
      {content}
    </Button>
    </div>
  );
};

export default Buttons;
