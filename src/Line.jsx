import React from "react";

const Line = ({ data = {} }) => {
  if (typeof data === "object") {
    if (Array.isArray(data)) {
      data.map((item) => {
        return <Line data={item} />;
      });
    } else {
      Object.keys(data).map((item) => {
        return <Line data={item} />;
      });
    }
  } else {
    return <div>{JSON.stringify(data)}</div>;
  }
};

export default Line;
