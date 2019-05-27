import React from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight'; // eslint-disable-line import/no-extraneous-dependencies
import CodepenPrefill from '../../lib';

function StylingExample(props) {
  const { js1, js2 } = props;
  return (
    <span>
      <h2>Styling</h2>
      <h3>Link</h3>
      <pre>
        <code>
          <Highlight className="react">
            {js1}
          </Highlight>
        </code>
      </pre>
          This link opens
      {' '}
      <CodepenPrefill
        label="Codepen"
        className="link"
        js="console.log('hello world')"
        css="body{color: #eee; background: #444;}"
        html="<h1>Hello World</h1>"
      />
.
      <h3>Button</h3>
      <pre>
        <code>
          <Highlight className="react">
            {js2}
          </Highlight>
        </code>
      </pre>
      <CodepenPrefill
        label="Button Opens Codepen"
        className="button"
        js="console.log('hello world')"
        css="body{color: #eee; background: #444;}"
        html="<h1>Hello World</h1>"
      />
    </span>
  );
}

StylingExample.defaultProps = {
  js1: '',
  js2: '',
};

StylingExample.propTypes = {
  js1: PropTypes.string,
  js2: PropTypes.string,
};

export default StylingExample;
