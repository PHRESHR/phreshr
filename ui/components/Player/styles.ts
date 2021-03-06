import styled from 'styled-components';
import Container from 'ui/styles/Container';
import { media } from 'ui/styles/utils';

export const PlayerContainer = styled(Container) `
  padding: 0;
`;

export const VideoJs = styled.div`
  #player {
    width: 100%;
    height: 100%;
  }

  .vjs-custom.video-js {
    display: flex;
    width: 100%;
    height: 100%;
    color: #fff;
  }

  .vjs-custom .vjs-control-bar {
    display: flex;
    align-items: center;
    background-color: #dfe2e9;
    width: 90vw;
    bottom: 7vw;
    padding: 0 1rem;
    margin: 0 auto;
    border-radius: 1rem;
  }

  .vjs-custom .vjs-button {
    color: #8490a0;
    padding: 0;
    margin: 0;

    /*&:hover {
      color: #FDE74C;
    }*/
  }

  .vjs-custom .vjs-button > .vjs-icon-placeholder:before {
    font-size: 1.25rem;
    line-height: 1.6;
    font-weight: 700;
  }

  .vjs-custom .vjs-play-progress {
    background-color: #FDE74C;
  }

  .vjs-custom .vjs-slider {
    background: rgba(35,35,35,.5);
    align-self: center;
  }

  .vjs-custom .vjs-load-progress div {
    background: rgba(68,68,68,.75);
  }

  .vjs-custom .vjs-progress-control .vjs-progress-holder,
  .vjs-custom .vjs-progress-control:hover .vjs-progress-holder {
    font-size: 1.25rem;
    border-radius: 1rem;
  }

  .vjs-custom .vjs-time-control {
    color: #8490a0;
    font-size: 1rem;
    line-height: 2;
    font-weight: 700;
  }

  .vjs-custom .vjs-current-time, .vjs-no-flex .vjs-current-time {
    display: block;
  }

  /*.vjs-custom.video-js {
    display: flex;
    width: 100%;
    height: 100%;
    color: #fff;
  }

  .vjs-custom .vjs-big-play-button {
    display: none;
    background-color: rgba(0,0,0,0.35);
    font-size: 4.5rem;
    line-height: 2.9rem;
    height: 3rem;
    width: 3rem;
    top: 50%;
    left: 50%;
    margin-top: -1rem;
    margin-left: -1rem;
    border-radius: 50%;
    border-width: 3px;
  }

  .vjs-custom .vjs-control-bar {
    display: flex;
    align-items: flex-end;
    background-color: #dfe2e9;
    width: 90vw;
    height: 4rem;
    bottom: 3vw;
    margin: 0 auto;

    ${media.md`
       height: 6rem;
    `}
  }

  .vjs-custom .vjs-control {
    height: 50%;
  }

  .vjs-custom .vjs-button {
    padding: 0;
    margin: 0;
    ${media.md`
       margin: 0 .5rem;
    `}
  }

  .vjs-custom .vjs-progress-control {
    position: absolute;
    left: 0;
    right: 0;
    width: 70%;
    margin: 0 auto;
    height: .5rem;
    top: 1rem;
    padding: 0 5%;
    ${media.sm`
      width: 80%;
    `}
    ${media.md`
      width: 90%;
    `}
  }

  .vjs-custom .vjs-slider {
    background: rgba(35,35,35,.5);
    align-self: center;
  }

  .vjs-custom .vjs-load-progress div {
    background: rgba(68,68,68,.75);
  }

  .vjs-custom .vjs-progress-control .vjs-progress-holder {
    margin: 0;
  }

  .vjs-custom .vjs-play-progress:before {
    font-size: .9rem;
    position: absolute;
    right: -0.9rem;
    top: -.333333333333333em;
    z-index: 1;
  }

  .vjs-custom .vjs-control {
    display: flex;
    &:before {
      font-size: 1.2rem;
      position: relative;
      width: 40px;
      height: 40px;
      align-self: center;

      ${media.md`
        font-size: 1.5rem;
      `}
    }
  }

  .vjs-custom .vjs-current-time,
  .vjs-custom .vjs-duration {
    position: absolute;
    top: .4rem;
    height: auto;
    z-index: 2;
  }

  .vjs-custom .vjs-current-time {
    left: 1rem;
  }

  .vjs-custom .vjs-current-time-display,
  .vjs-custom .vjs-duration-display {
    color: rgba(68,68,68,1);
    font-size: .875rem;
    ${media.md`
      font-size: 1.25rem;
    `}
  }

  .vjs-custom .vjs-duration {
    right: 1rem;
  }

  .vjs-custom .vjs-remaining-time {
    display: none;
  }

  .vjs-custom .vjs-mute-control {
    height: 100%;
  }

  .vjs-custom .vjs-volume-menu-button.vjs-menu-button-inline .vjs-menu-content {
    display: flex;
  }

  .vjs-custom .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal {
    transition: visibility 1s,opacity 1s;
  }
  .vjs-custom .vjs-volume-panel .vjs-mute-control:hover~.vjs-volume-control {
    transition: visibility 1s,opacity 1s;
  }
  .vjs-custom .vjs-volume-control.vjs-volume-horizontal {
    align-self: center;
    transition: visibility 1s,opacity 1s;
  }

  .vjs-custom .vjs-volume-bar {
    display: flex;
    margin: 0;
  }

  .vjs-custom .vjs-slider-horizontal {}

  .vjs-custom .vjs-volume-level {
    position: relative;
  }

  .vjs-custom .vjs-slider-horizontal .vjs-volume-level:before {
    top: -.3em;
    right: -.5em;
  }

  .vjs-custom .vjs-menu-button-inline .vjs-menu {
    display: flex;
    align-items: center
  }

  .vjs-menu-button-inline:hover .vjs-menu,
  .vjs-menu-button-inline:focus .vjs-menu,
  .vjs-menu-button-inline.vjs-slider-active .vjs-menu {
    display: flex;
    opacity: 1;
    align-items: center;
}

  .vjs-custom .vjs-spacer, .vjs-custom {
    display: flex;
    flex: 1 1 auto;
  }

  .vjs-custom .vjs-control .vjs-icon-placeholder:before {
    font-size: 1.8rem;
    line-height: 1.67;
  }

  .vjs-custom .vjs-control:focus,
  .vjs-custom .vjs-control:focus:before,
  .vjs-custom .vjs-control:hover:before {
    text-shadow: none;
    outline: none;
  }

  .vjs-custom .vjs-poster {
    background-size: cover;
    background-position: center center;
  }

  .episode-player {
    position: relative;
    width: 100%;
    flex: 0 0 100%;
    order: 1;
    overflow: hidden;
  }

  .vjs-custom .vjs-dock-info, .vjs-custom .vjs-dock-shelf {
    font-family: Lato, Helvetica Neue, Helvetica, Arial, sans-serif;
    pointer-events: none;
    position: absolute;
    top: 0;
    transition: opacity 0.1s;
  }
  .vjs-custom .vjs-dock-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: rgba(17,17,17,.7);
    width: 100%;
    height: 90px;
    padding: 0 1rem;
    margin: 0;
  }

  .vjs-custom .vjs-dock-preview {
    display: flex;
    width: 80px;
    height: 80px;
    margin-right: 0.825rem;
  }

  .vjs-custom .vjs-dock-description {
    display: flex;
    flex-direction: column;
  }

  .vjs-custom .vjs-dock-meta, .vjs-custom .vjs-dock-title {
    font-weight: 400;
    margin: 0;
  }
  .vjs-custom .vjs-dock-meta {
    font-size: .825rem;
  }

  .vjs-custom .vjs-dock-title {
    font-size: 1.5rem;
    letter-spacing: 0.0625rem
  }

  .vjs-playlist {
    color: #fff;
    transition: all .2s ease;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 350px;
    flex: 0 0 350px;
    overflow: hidden;
    border-left: 1px solid #252525;
  }

  @media only screen and (min-width: 40.625em) {
    padding:  0;
  }

  @media only screen and (min-width: 68.75em) {
    .watch-area {
      padding: 1.875rem 3.75rem;
    }
  }

  @media only screen and (min-width: 95em) {
    .watch-area {
      padding-left: 0;
      padding-right: 0;
    }
  }*/
`;
