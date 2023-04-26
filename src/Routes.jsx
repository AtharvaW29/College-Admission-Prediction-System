import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";  
import NotFound from "pages/NotFound";
const FrameFifteen = React.lazy(() => import("pages/FrameFifteen"));
const FrameEleven = React.lazy(() => import("pages/FrameEleven"));
const FrameTen = React.lazy(() => import("pages/FrameTen"));
const FrameNine = React.lazy(() => import("pages/FrameNine"));
const FrameSix = React.lazy(() => import("pages/FrameSix"));
const FrameEight = React.lazy(() => import("pages/FrameEight"));
const FrameTwo = React.lazy(() => import("pages/FrameTwo"));
const FrameFourteen = React.lazy(() => import("pages/FrameFourteen"));
const FrameSeven = React.lazy(() => import("pages/FrameSeven"));
const FrameFour = React.lazy(() => import("pages/FrameFour"));
const FrameThree = React.lazy(() => import("pages/FrameThree"));
const FrameThirteen = React.lazy(() => import("pages/FrameThirteen"));
const FrameTwelve = React.lazy(() => import("pages/FrameTwelve"));
const FrameFive = React.lazy(() => import("pages/FrameFive"));
const FrameOne = React.lazy(() => import("pages/FrameOne"));
const ProjectRoutes = () => {

  const [data, setData] = useState({
    'Round': 6,
    'Academic Program Name': 'Bio Technology (4 Years, Bachelor of Technology)',
    'Quota': 'HS',
    'Seat Type': 'OPEN',
    'Gender': 'Gender-Neutral',
    'Opening Rank': 6969,
    'Closing Rank': 9892
  })

  const [result, setResult] = useState('')

  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<FrameOne />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/framefive" element={<FrameFive data={data} onChange={setData}/>} />
          <Route path="/frametwelve" element={<FrameTwelve data={data} onChange={setData}/>} />
          <Route path="/framethirteen" element={<FrameThirteen />} />
          <Route path="/framethree" element={<FrameThree data={data} onChange={setData}/>} />
          <Route path="/framefour" element={<FrameFour />} />
          <Route path="/frameseven" element={<FrameSeven data={data} onChange={setData} onChangeResult={setResult}/>} />
          <Route path="/framefourteen" element={<FrameFourteen data={data} onChange={setData}/>} />
          <Route path="/frametwo" element={<FrameTwo />} />
          <Route path="/frameeight" element={<FrameEight />} />
          <Route path="/framesix" element={<FrameSix result={result}/>} />
          <Route path="/framenine" element={<FrameNine />} />
          <Route path="/frameten" element={<FrameTen />} />
          <Route path="/frameeleven" element={<FrameEleven />} />
          <Route path="/framefifteen" element={<FrameFifteen data={data} onChange={setData}/>} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
