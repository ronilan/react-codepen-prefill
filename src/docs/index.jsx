import React from 'react';
import ReactDOM from 'react-dom';

import './Examples.css';

import HelloWorldExample from './HelloWorldExample';
import BasicExample from './BasicExample';
import StylingExample from './StylingExample';
import TargetExample from './TargetExample';
import FullExample from './FullExample';

function Examples() {
  const basic = `<CodepenPrefill 
    js="console.log('hello world')"
    css="body{color: #eee; background: #444;}"
    html="<h1>Hello World</h1>"
/>);`;

  const styling1 = `<CodepenPrefill 
    label="Codepen" 
    className="link" 
    js="console.log('hello world')"
    css="body{color: #eee; background: #444;}"
    html="<h1>Hello World</h1>"
/>);`;

  const styling2 = `<CodepenPrefill 
    label="Button Opens Codepen" 
    className="button" 
    style={{ color: 'pink' }}
    js="console.log('hello world')"
    css="body{color: #eee; background: #444;}"
    html="<h1>Hello World</h1>"
/>);`;

  const target = `
<CodepenPrefill 
  label="Open in New Tab"
  target="_blank"
  js="console.log('hello world')"
  css="body{color: #eee; background: #444;}"
  html="<h1>Hello World</h1>"
/>);`;

  const fulljs = `const tags = ['react', 'codepen', 'prefill', 'CodepenPrefill'];

<CodepenPrefill
  label="Full Example"
  className="button green"
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
`;

  const fullcss = `
body {
  background-color: pink;
}
  `;

  const fullhtml = `
<h1>Hello World</h1>
  `;

  return (
    <div>
      <h1>CodepenPrefill</h1>
      <HelloWorldExample />
      <h1>Examples</h1>
      <BasicExample js={basic} html={fullhtml} />
      <StylingExample js1={styling1} js2={styling2} html={fullhtml} />
      <TargetExample js={target} html={fullhtml} />
      <FullExample js={fulljs} css={fullcss} html={fullhtml} />
      <hr />
      <p>
        Full source code for this page can be found&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ronilan/react-codepen-prefill/tree/master/src/docs"
        >
          here
        </a>
        .
      </p>
    </div>

  );
}

ReactDOM.render(<Examples />, document.getElementById('root'));
