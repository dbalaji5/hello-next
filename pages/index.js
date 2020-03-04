import React from 'react';
import ReactDOM from 'react-dom';
import FrameBoard from '../components/FrameBoard';
// import L from 'leaflet';

// L.Icon.Default.imagePath = '.';
// // OR
// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });

// const DynamicPlot = dynamic(import('../components/FrameBoard'),{
//    ssr: false
// })

export default function Index() {
  return (
    <div id="root">
      <FrameBoard/>
    </div>
  )
}
