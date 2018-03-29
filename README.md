# react-codepen-prefill

React component to create a button/link to prefill [`Codepen.io`](https://codepen.io) with supplied code.

## Installation

```bash
npm install --save react-codepen-prefill
```

## Usage

```javascript
import React from 'react';
import CodepenPrefill from 'react-codepen-prefill';

...

  <CodepenPrefill
    label="Hello World"
    className="simple-link"
    target="_blank"
    title="CodepenPrefill Example"
    description="An example of the CodepenPrefill Component in action."
    js="console.log('hello world')"
    css="body{color: blue;}"
    html="<h1>Hello World</h1>"
    editors="111"
  />
```

For more examples:
https://ronilan.github.io/react-codepen-prefill/

## Component Props

## Internal
Property   | Type     | Required | Default     | Description                                                   |
-----------|----------|----------|-------------|---------------------------------------------------------------|
label      | `string` | `false`  | ''          | The text on the button/link                                   |
className  | `string` | `false`  | ''          | The css class for the button/link                             |
target     | `string` | `false`  | ''          | HTML target attribute                                         |

### Passed to [prefill a CodePen](https://blog.codepen.io/documentation/api/prefill/)

Property         | Type     | Required | Default   | Description                                                   |
-----------------|----------|----------|-----------|---------------------------------------------------------------|
title            | `string` | `false`  | ''        | The title of the pen.
description      | `string` | `false`  | ''        | The description of the pen.
tags             | `array`  | `false`  | []        | An array of strings to act as tags.
editors          | `string` | `false`  | '111'     | Which editors are open. 1 is open. order is: HTML, CSS, JS.
layout           | `string` | `false`  | 'left'    | Optional layouts: top, left, right
html             | `string` | `false`  | ''        | The HTML code to fill in the HTML pane.
htmlPreProcessor | `string` | `false`  | 'none'    | Optional values: "none", "slim", "haml", "markdown"
css              | `string` | `false`  | ''        | The CSS code to fill in the CSS pane.
cssPreProcessor  | `string` | `false`  | 'none'    | Optional values: "none", "less", "scss", "sass", "stylus"
cssStarter       | `string` | `false`  | 'neither' | Optional values:  "normalize", "reset", "neither",
cssPrefix        | `string` | `false`  | 'neither' | Optional values:  "autoprefixer", "prefixfree", "neither"
js               | `string` | `false`  | ''        | The JavaScript code to fill in the JS pane.
jsPreProcessor   | `string` | `false`  | 'none'    | Optional values: "none", "coffeescript", "babel", "livescript", "typescript"
htmlClasses      | `string` | `false`  | ''        | CSS class to apply to html tag.
head             | `string` | `false`  | ''        | Content to include inside the HTML head tag.
cssExternal      | `string` | `false`  | ''        | Use semi-colon to separate multiple files.
jsExternal       | `string` | `false`  | ''        | Use semi-colon to separate multiple files.
private          | `boolean`| `false`  | `false`   | Optional values: true, false - When the Pen is saved, it will save as Private if logged in user has that privledge, otherwise it will save as public
parent           | `number` | `false`  | `null`    | If supplied, the Pen will save as a fork of this id. Note it's not the slug, but ID. You can find the ID of a Pen with `window.CP.pen.id` in the browser console.

## Authors

[Ron Ilan](https://www.ronilan.com)

## License
[MIT](https://en.wikipedia.org/wiki/MIT_License)

###### Fabriqué au Canada : Made in Canada
