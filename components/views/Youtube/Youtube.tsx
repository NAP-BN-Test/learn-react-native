import YouTube, { YouTubeStandaloneIOS } from "react-native-youtube";
import React, { useState } from "react";
import { Dimensions, PixelRatio, View } from "react-native";

const Youtube = () => {
  const [option, setOption] = useState({
    isReady: false,
    status: null,
    quality: null,
    error: null,
    isPlaying: true,
    isLooping: true,
    duration: 0,
    currentTime: 0,
    fullscreen: false,
    playerWidth: Dimensions.get("window").width,
  });

  return (
    <YouTube
      //   ref={this._youTubeRef}
      // You must have an API Key for the player to load in Android
      apiKey="AIzaSyB_mWURXGPg9xGJPiRUVpxohuz-H95bQgI"
      // Un-comment one of videoId / videoIds / playlist.
      // You can also edit these props while Hot-Loading in development mode to see how
      // it affects the loaded native module
      // videoId="xuCn8ux2gbs"
      videoIds={["uMK0prafzw0", "qzYgSecGQww", "XXlZfc1TrD0", "czcjU1w-c6k"]}
      // playlistId="PLF797E961509B4EB5"
      // play={this.state.isPlaying}
      // loop={this.state.isLooping}
      // fullscreen={this.state.fullscreen}
      // controls={1}
      style={{
        height: PixelRatio.roundToNearestPixel(
          Dimensions.get("window").width / (16 / 9)
        ),
        alignSelf: "stretch",
        marginVertical: 10,
      }}
    />
  );
};

export default Youtube;
