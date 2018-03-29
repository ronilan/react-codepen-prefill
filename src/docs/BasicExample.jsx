import React, { Component } from 'react';
import Highlight from 'react-highlight'; // eslint-disable-line import/no-extraneous-dependencies

import CodepenPrefill from '../../lib';

class BasicExample extends Component {
  render() {
    return (
      <span>
        <h2>Basic</h2>
        <pre><code>
          <Highlight className='react'>
            {this.props.js}
          </Highlight>
        </code></pre>

        <CodepenPrefill
          js="console.log('hello world')"
          css="body{color: blue;}"
          html="<h1>Hello World</h1>"
        />
      </span>
    );
  }
}

export default BasicExample;
