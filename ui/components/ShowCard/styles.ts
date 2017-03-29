import styled from 'styled-components';
import { media } from 'ui/styles/utils';
import GridItem from 'ui/styles/GridItem';

const ShowEntry = styled(GridItem)`
  flex: 0 0 calc(100% / 2 - 4px);
  width: calc(100% / 2 - 4px);

  ${media.md`
    flex: 0 0 calc(100% / 2 - 4px);
  `}

  ${media.lg`
    flex: 0 0 calc(100% / 3 - 8px);
  `}

  ${media.xl`
    flex: 0 0 calc(100% / 4 - 8px);
  `}
`;

export default ShowEntry;
