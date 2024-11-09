import React, { useState } from "react";

const Line = ({ data = {} }) => {
    const getChildren = () => {
  if (typeof data === "object") {
    if (Array.isArray(data)) {
      data.map((item) => {
        return <Line data={item} />;
      });
    } else {
      Object.keys(data).map((key) => {
        return <Line data={data[key]} />;
      });
    }
  } else {
    return <div>{JSON.stringify(data)}</div>;
  }
}


return (
    <div>{getChildren()}</div>
)
};

export default Line;
