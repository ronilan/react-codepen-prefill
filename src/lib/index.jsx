import React from 'react';
import PropTypes from 'prop-types';

function CodepenPrefill(props) {
  const {
    target, className, style, label, ...send
  } = props;

  return (
    <span style={{ display: 'inline-block' }}>
      <form
        style={{ display: 'inline-block' }}
        action="https://codepen.io/pen/define"
        method="POST"
        target={target}
        rel="noopener noreferrer"
      >
        <input
          type="hidden"
          name="data"
          value={JSON.stringify(send)}
        />
        <button
          type="submit"
          className={className}
          style={style}
        >
          {label}
        </button>
      </form>
    </span>
  );
}

CodepenPrefill.defaultProps = {
  // https://blog.codepen.io/documentation/api/prefill/

  title: '', // The title of the pen.
  description: '', // The description of the pen.
  tags: [], // an array of strings
  editors: '111', // Which editors are open. 1 is open. order is: HTML, CSS, JS.
  layout: 'left', // Optional layouts: top || left || right
  html: '', // The HTML code to fill in the HTML pane.
  html_pre_processor: 'none', // Optional values: "none" || "slim" || "haml" || "markdown"
  css: '', // The CSS code to fill in the CSS pane.
  css_pre_processor: 'none', // Optional values: "none" || "less" || "scss" || "sass" || "stylus"
  css_starter: 'neither', // Optional values:  "normalize" || "reset" || "neither",
  css_prefix: 'neither', // Optional values:  "autoprefixer" || "prefixfree" || "neither"
  js: '', // The JavaScript code to fill in the JS pane.
  js_pre_processor: 'none', // Optional values: "none" || "coffeescript" || "babel" || "livescript" || "typescript"
  html_classes: '', // CSS class to apply to html tag.
  head: '', // Content to include inside the HTML head tag.
  css_external: '', // Use semi-colon to separate multiple files.
  js_external: '', // Use semi-colon to separate multiple files.

  // Optional values: true || false -
  // When the Pen is saved, it will save as Private if logged in user has that privilege,
  // otherwise it will save as public
  private: false,

  // If supplied, the Pen will save as a fork of this id.
  // Note it's not the slug, but ID.
  // You can find the ID of a Pen with `window.CP.pen.id` in the browser console.
  parent: null,

  // component internal
  label: 'Prefill CodePen',
  target: '',
  className: '',
  style: {},
};

CodepenPrefill.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  editors: PropTypes.string,
  layout: PropTypes.string,
  html: PropTypes.string,
  html_pre_processor: PropTypes.string,
  css: PropTypes.string,
  css_pre_processor: PropTypes.string,
  css_starter: PropTypes.string,
  css_prefix: PropTypes.string,
  js: PropTypes.string,
  js_pre_processor: PropTypes.string,
  html_classes: PropTypes.string,
  head: PropTypes.string,
  css_external: PropTypes.string,
  js_external: PropTypes.string,
  private: PropTypes.bool,
  parent: PropTypes.number,

  // component internal
  label: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default CodepenPrefill;
