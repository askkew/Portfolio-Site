// import React from "react";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Annotation,
//   ZoomableGroup
// } from "react-simple-maps";

// const geoUrl = "https://raw.githubusercontent.com/askkew/TexasJSON/main/state.json";

// const Map = () => {
//   return (
//     <ComposableMap>
//       <Geographies geography={geoUrl}>
//         {({ geographies }) =>
//           geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
//         }
//       </Geographies>
//     </ComposableMap>
//   );
// };

// export default Map;

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

const geoUrl = "https://raw.githubusercontent.com/askkew/TexasJSON/main/state.json";
// const geoUrl = "https://raw.githubusercontent.com/askkew/TexasJSON/main/Tx_Bndry_General_TIGER5m%20(1).json";

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21]
};

const MapChart = () => {
  return (
    <ComposableMap projection="geoAlbersUsa"
    projectionConfig={{
    }}
    style={{
      width: "300%",
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
                stroke="#FFF"
                geography={geo}
                fill="#DDD"
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
