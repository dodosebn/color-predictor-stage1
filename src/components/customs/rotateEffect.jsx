import React, { useEffect } from "react";
const RotateEffect = ({ whenLoading, setWhenLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setWhenLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [setWhenLoading]);
  return (
    <>
      {whenLoading && <aside className="loading-dey">{/* Loading... */}</aside>}
    </>
  );
};

export default RotateEffect;
