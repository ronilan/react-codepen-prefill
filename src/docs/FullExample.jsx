import React from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight'; // eslint-disable-line import/no-extraneous-dependencies
import CodepenPrefill from '../../lib';

function FullExample(props) {
  const { js } = props;
  const tags = ['react', 'codepen', 'prefill', 'CodepenPrefill'];

  return (
    <span>
      <h2>Full</h2>
      <pre>
        <code>
          <Highlight className="react">
            {js}
          </Highlight>
        </code>
      </pre>
      <CodepenPrefill
        className="button green"
        label="Full Example"
        target="_blank"
        title="CodepenPrefill Example"
        description="A full example of the CodepenPrefill Component in action."
        tags={tags}
        editors="111"
        layout="top"
        js="console.log('hello world')"
        css="body{color: #eee; background: #444;}"
        html="<h1>Hello World</h1>"
      />
    </span>
  );
}

FullExample.defaultProps = {
  js: '',
};

FullExample.propTypes = {
  js: PropTypes.string,
};

export default FullExample;
