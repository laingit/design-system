// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import styled from 'styled-components';

export const StyledColorToken = styled.div`
  .doc-token {
    display: inline-flex;
    padding: 0.5rem;
    font-size: 0.75rem;
  }

  .doc-token__image {
    width: 4rem;
    height: 4rem;
    background: linear-gradient(
        45deg,
        rgba(43, 40, 38, 0.1) 25%,
        transparent 25%
      ),
      linear-gradient(-45deg, rgba(43, 40, 38, 0.1) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, rgba(43, 40, 38, 0.1) 75%),
      linear-gradient(-45deg, transparent 75%, rgba(43, 40, 38, 0.1) 75%);
    background-size: 16px 16px;
    background-position: 0 0, 0 8px, 8px -8px, -8px 0;
    border: 1px solid #dddbda;
    border-radius: 4px;
    padding: 4px;
  }

  .doc-token__image > div {
    width: 100%;
    height: 100%;
    box-shadow: rgba(43, 40, 38, 0.1) 0 0 0 1px inset;
    border-radius: 4px;
  }
`;
