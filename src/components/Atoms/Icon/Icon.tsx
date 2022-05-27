import React from "react";

interface IconProps {
  width: string;
  height: string;
  img: string;
  margin: string;
}

const Icon: React.FC<IconProps> = ({ width, ...props }) => {
  return (
    <div data-testid="Icon-element">
      <img
        src={props.img}
        height={props.height}
        width={width}
        style={{
          position: "relative",
          top: "20px",
          marginLeft: `${props.margin}`,
        }}
        alt=""
      />
    </div>
  );
};

export default Icon;
