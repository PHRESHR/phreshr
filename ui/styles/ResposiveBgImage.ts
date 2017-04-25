import styled from 'styled-components';
import { aspectRatio, media } from 'ui/styles/utils';

// http://res.cloudinary.com/phreshr-media/image/upload/v1492842531/smoke-sessions/vintage-nation.jpg

const ResposiveBgImage = styled.div`
  background-image: url(${props => props.imgMobile ? props.imgMobile : 'ar_16:9,c_scale,h_1080,w_1920 webp'});
  ${media.xl`
    background-image: url(${props => props.imgMobile ? props.imgMobile : 'ar_16:9,c_crop,h_2160,w_3840 webp'}
  `}
`;

export default ResposiveBgImage;
