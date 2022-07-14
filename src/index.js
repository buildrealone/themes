import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';

const Home = React.lazy(() => import('./components/Home'));
const Gallery = React.lazy(() => import('./components/Gallery'));
const MathematicalSpace = React.lazy(() => import('./components/MathematicalSpace'));
const Shopping = React.lazy(() => import('./components/Shopping'));
const Poster = React.lazy(() => import('./components/Poster'));
// const AiHuman = React.lazy(() => import('./components/AiHuman'));

document.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.Suspense fallback={<div>Loading Now...</div>}>
      <Router>
        <Routes>
          <Route path="/gallery" exact element={<Gallery />} />
          <Route path="/mathematical-space" exact element={<MathematicalSpace />} />
          <Route path="/shopping" exact element={<Shopping />} />
          <Route path="/poster" exact element={<Poster />} />
          {/* <Route path="/ai-human" exact element={<AiHuman />} /> */}
          <Route path="/" exact element={<Home />} />
          <Route path="*" element={<Navigate to ="/" />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
});