import React, { useState } from "react";

const Line = ({ data = {} }) => {


  const [ showChild, setShowChild] = useState(false);

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
};

export default Line;
