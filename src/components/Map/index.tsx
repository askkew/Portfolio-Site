import React from "react";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from "react-simple-maps";

import allStates from "./allstates.json";

// const geoUrl = "https://raw.githubusercontent.com/askkew/TexasJSON/main/state.json";
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
// const geoUrl = "https://raw.githubusercontent.com/askkew/TexasJSON/main/Tx_Bndry_General_TIGER5m%20(1).json";

const MapChart = () => {
  return (
    <ComposableMap projection="geoAlbersUsa"
    projectionConfig={{
      scale: 1300,
    }}
    style={{
      width: "100%",
      height: "100%",
      overflow: 'hidden',
    }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                // stroke="#FFF"
                stroke="#FFF"
                geography={geo}
                // fill="#DDD"
                fill="rgb(21,29,41)"
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))}
          </>
        )}
      </Geographies>
      <Annotation
      subject={[ -95.760846, 30.149345 ]}
      dx={-40}
      dy={-40}
      connectorProps={{
        stroke: "#F53",
        strokeWidth: 3,
        strokeLinecap: "round"
      }}
      >
        <text x='-8' textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"Houston"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
