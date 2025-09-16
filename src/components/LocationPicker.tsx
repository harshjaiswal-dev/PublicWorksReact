import React, { useState } from "react";

const LocationPicker: React.FC = () => {
  const [manual, setManual] = useState(false);

  return (
    <div className="flex gap-4 items-center">
      <label>
        <input type="radio" checked={!manual} onChange={() => setManual(false)} />
        Detect GPS
      </label>
      <label>
        <input type="radio" checked={manual} onChange={() => setManual(true)} />
        Enter Manually
      </label>
      {manual && <input type="text" placeholder="Enter location" className="border p-1 rounded" />}
    </div>
  );
};

export default LocationPicker;
