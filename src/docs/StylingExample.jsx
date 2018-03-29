import React, { Component } from 'react';
import Highlight from 'react-highlight'; // eslint-disable-line import/no-extraneous-dependencies

import CodepenPrefill from '../../lib';

class StylingExample extends Component {
  render() {
    return (
      <span>
        <h2>Styling</h2>
        <h3>Link</h3>
        <pre><code>
          <Highlight className='react'>
            {this.props.js1}
          </Highlight>
        </code></pre>

          This link opens <CodepenPrefill label='Codepen' className='link'
          js="console.log('hello world')"
          css="body{color: blue;}"
          html="<h1>Hello World</h1>"
        />.

        <h3>Button</h3>
        <pre><code>
          <Highlight className='react'>
            {this.props.js2}
          </Highlight>
        </code></pre>

        <CodepenPrefill label='Button Opens Codepen' className='button'
          js="console.log('hello world')"
          css="body{color: blue;}"
          html="<h1>Hello World</h1>"
        />

      </span>
    );
  }
}

export default StylingExample;
