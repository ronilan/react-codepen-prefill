import React from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight'; // eslint-disable-line import/no-extraneous-dependencies
import CodepenPrefill from '../../lib';

function TargetExample(props) {
  const { js } = props;

  return (
    <span>
      <h2>Target</h2>
      <pre>
        <code>
          <Highlight className="react">
            {js}
          </Highlight>
        </code>
      </pre>
      <CodepenPrefill
        label="Open in New Tab"
        target="_blank"
        js="console.log('hello world')"
        css="body{color: #eee; background: #444;}"
        html="<h1>Hello World</h1>"
      />
    </span>
  );
}

TargetExample.defaultProps = {
  js: '',
};

TargetExample.propTypes = {
  js: PropTypes.string,
};

export default TargetExample;
