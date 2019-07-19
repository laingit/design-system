// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import CodeBlock from './CodeBlock';
import StyledDemo from './StyledDemo';

class CodeView extends React.Component {
  renderChildren() {
    const { style } = this.props;

    return (
      <div className="docs-codeblock-example">
        {style ? (
          <StyledDemo
            className={isViewport && 'demo-only demo-only_viewport'}
            styles={style}
          >
            {this.props.children}
          </StyledDemo>
        ) : (
          this.props.children
        )}
      </div>
    );
  }

  render() {
    const { position, toggleCode, children, exampleOnly } = this.props;
    return (
      <div className="docs-codeblock">
        {position === 'bottom' ? this.renderChildren() : null}
        {!exampleOnly && (
          <CodeBlock language="html" toggleCode={toggleCode}>
            {children}
          </CodeBlock>
        )}
        {position === 'top' ? this.renderChildren() : null}
      </div>
    );
  }
}

CodeView.propTypes = {
  children: PropTypes.node,
  position: PropTypes.oneOf(['top', 'bottom']),
  style: PropTypes.string,
  isViewport: PropTypes.bool,
  toggleCode: PropTypes.bool,
  exampleOnly: PropTypes.bool
};

CodeView.defaultProps = {
  position: 'bottom'
};

export default CodeView;
