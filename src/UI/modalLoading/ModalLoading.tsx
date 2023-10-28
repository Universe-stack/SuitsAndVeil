import { useState, CSSProperties } from "react";
import MoonLoader from "react-spinners/MoonLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "blue",
};

function ModalLoading(load) {

  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#EEEEEE");

  return (
    <div className="sweet-loading absolute top-[50%] z-40">
      <MoonLoader
        color="#000000"
        loading={loading}
        cssOverride={override}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default ModalLoading;