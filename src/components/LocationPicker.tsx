import React, { useState } from "react";

const LocationPicker: React.FC = () => {
  const [manual, setManual] = useState(false);
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [manualLat, setManualLat] = useState("");
  const [manualLng, setManualLng] = useState("");

  const detectGPS = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          alert("Unable to get location: " + error.message);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <label>
        <input
            type="radio"
            checked={!manual}
            onChange={() => {
              setManual(false);
              setCoords(null);
              detectGPS();
            }}
          />
        Detect GPS
      </label>
      <label>
        <input
            type="radio"
            checked={manual}
            onChange={() => {
              setManual(true);
              setCoords(null);
            }}
          />
        Enter Manually
      </label>

      {!manual && coords && (
        <div className="coords-display">
          <span>Latitude: {coords.lat}</span>
          <span>Longitude: {coords.lng}</span>
        </div>
      )}
      
      {manual && (
        <div className="manual-inputs">
          <input
            type="text"
            placeholder="Latitude"
            value={manualLat}
            onChange={(e) => setManualLat(e.target.value)}
          />
          <input
            type="text"
            placeholder="Longitude"
            value={manualLng}
            onChange={(e) => setManualLng(e.target.value)}
          />
        </div>
      )}
      
    </div>
  );
};

export default LocationPicker;
