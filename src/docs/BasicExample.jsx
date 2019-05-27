import React from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight'; // eslint-disable-line import/no-extraneous-dependencies
import CodepenPrefill from '../../lib';

function BasicExample(props) {
  const { js } = props;
  return (
    <span>
      <h2>Basic</h2>
      <pre>
        <code>
          <Highlight className="react">
            {js}
          </Highlight>
        </code>
      </pre>

      <CodepenPrefill
        js="console.log('hello world')"
        css="body{color: #eee; background: #444;}"
        html="<h1>Hello World</h1>"
      />
    </span>
  );
}

BasicExample.defaultProps = {
  js: '',
};

BasicExample.propTypes = {
  js: PropTypes.string,
};

export default BasicExample;
