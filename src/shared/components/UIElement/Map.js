import React, { useEffect, useRef } from "react";
import "./Map.css";
function Map(props) {
  const { center, zoom } = props;
  const mapRef = useRef();
  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom,
    });
    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);
  return (
    <div ref={mapRef} className={`map ${props.className}`} style={props.style}>
      No mony for this
    </div>
  );
}

export default Map;
