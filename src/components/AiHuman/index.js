import { useEffect, useState } from 'react';
import { addScript } from '../../libs/handleScript';
// import sampleVideo from './video/sample-video-3.webm';
import backgroundImage from './img/forest.jpeg';

const AFRAME = window?.AFRAME;

const TransparentVideo = () => {
  const [isWindowAframeReady, setIsWindowAframeReady] = useState(false);
  // const [isVideoReady, setIsVideoReady] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  // const vid = document.getElementById("myVideo");
  // vid.onloadeddata = function() {
  //   setIsVideoReady(true);
  // };

  useEffect(() => {
    const watchWindow = setInterval(() => {
      if (AFRAME) {
        setIsWindowAframeReady(true);
        clearInterval(watchWindow);
      }
    }, 500);
  }, []);

  useEffect(() => {
    if (isWindowAframeReady) {
    (async () => {

      await Promise.all([
        addScript(
          'https://londonpark.xyz/transparent-video.js',
          'transparent-video'
        )
      ]);

      setIsInitialized(true);
      // setIsScriptReady(true);

    })();
  }
  }, [isWindowAframeReady]);

  if (!isInitialized) return <div>Loading...</div>;

  return (
    <div style={{ position: "absolute", height: "100%", width: "100%" }}>
        <a-scene 
          loading-screen="enabled: false"
          device-orientation-permission-ui="enabled: false"
          vr-mode-ui="enabled: false">
        
        <a-assets>
          <video id="myVideo" 
            src="url(./video/sample-video-3.webm)" // {sampleVideo} 
            autoPlay 
            loop={true} />
          <img id="forest" src={backgroundImage} alt="forest" />
        </a-assets>


        <a-camera animation="property: position; from: 0 1 500; to: 0 1 0; dur: 5000;"></a-camera>
        <a-sky src="#forest"></a-sky>
        
        {/* {isVideoReady && 
        <a-entity
          material="shader: transparent-video; src: #videoId"
          geometry="primitive: plane; width: 5.5; height: 3.6"
          position="0 1.3 -2">
        </a-entity>} */}

        </a-scene>
    </div>
  )
};

export default TransparentVideo;
