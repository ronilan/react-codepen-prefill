import React from 'react';
import CodepenPrefill from '../../lib';

const HelloWorld = () => (
  <CodepenPrefill
    label="Hello World"
    className="button blue"
    target="_blank"
    title="CodepenPrefill Example"
    description="An example of the CodepenPrefill Component in action."
    js="console.log('hello world')"
    css="body{color: blue;}"
    html="<h1>Hello World</h1>"
    editors="111"
  />
);

export default HelloWorld;
