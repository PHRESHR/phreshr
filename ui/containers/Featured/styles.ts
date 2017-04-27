import styled from 'styled-components';
import { media } from 'ui/styles/utils';

const FeaturedContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-height: 100vh;
  overflow: hidden;

  ${media.lg``}

  .featured-info {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 95%;
    padding: 2rem;

    ${media.lg`
      width: 90%;
      max-width: 1200px;
    `}

    h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 2rem;
      line-height: 0.85;
      word-spacing: -0.85rem;
      text-transform: capitalize;

      ${media.md`
        font-size: 6rem;
      `}
    }

    h3 {
      span {
        font-size: 1rem;
      }
    }
  }
`;

export default FeaturedContainer;
