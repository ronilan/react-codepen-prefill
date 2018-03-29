import React, { Component } from 'react';
import Highlight from 'react-highlight'; // eslint-disable-line import/no-extraneous-dependencies

import CodepenPrefill from '../../lib';

class TargetExample extends Component {
  render() {
    return (
      <span>
        <h2>Target</h2>
        <pre><code>
          <Highlight className='react'>
            {this.props.js}
          </Highlight>
        </code></pre>

        <CodepenPrefill label='Open in New Tab' target='_blank'
          js="console.log('hello world')"
          css="body{color: blue;}"
          html="<h1>Hello World</h1>"
        />

      </span>
    );
  }
}

export default TargetExample;
