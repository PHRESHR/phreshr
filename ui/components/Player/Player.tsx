import * as React from 'react';
import { compose, lifecycle, toClass } from 'recompose';
import { PlayerContainer, VideoJs } from './styles';

let videoNode: HTMLVideoElement;
function VideoPlayer() {
  return (
    <PlayerContainer className="player-container">
      <div id="player">
        <VideoJs className="episode-player">
          <div data-vjs-player>
            <video id="videoPlayer" ref={ node => videoNode = node } className="video-js vjs-default-skin" />
          </div>
        </VideoJs>
      </div>
    </PlayerContainer>
  );
};

const componentLifecycle = lifecycle({
  async componentDidMount() {
    // instantiate video.js
    this.player = await videojs(videoNode, this.props, function onPlayerReady() {
      // console.log(this.player());
      console.log('onPlayerReady', this);
      this.addClass('vjs-custom');
    });
  },
  // destroy player on unmount
  componentWillUnMount() {
    if (this.player()) {
      this.player().dispose();
    }
  },
});

export default compose(
  componentLifecycle,
  toClass,
)(VideoPlayer);
