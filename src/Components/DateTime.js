import React, { useEffect, useState } from "react";
const DateTime = () => {
  var [date, setDate] = useState(new Date());
  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  return (
    <div>
      Time:{date.toLocaleTimeString()}&nbsp; Date:{date.toLocaleDateString()}
    </div>
  );
};
export default DateTime;
