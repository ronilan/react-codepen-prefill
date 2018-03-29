import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CodepenPrefill extends Component {
  constructor(props) {
    super(props);

    const defaults = {

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

    };

    this.curPayload = this.toSend(defaults);
  }

  // convert the component props to the payload fields as per codepen documentation
  toSend(cur) {
    const internalProps = ['label', 'target', 'className'];
    const convertedProps = {};

    // do not send internal props
    // convert camelCase props to underscored keys
    Object.keys(this.props).forEach((key) => {
      if (internalProps.indexOf(key) === -1) {
        const underscored = key.replace(/([A-Z])/g, $1 => `_${$1.toLowerCase()}`);
        convertedProps[underscored] = this.props[key];
      }
    });

    return Object.assign(cur, convertedProps);
  }

  render() {
    return (
      <span style={{ display: 'inline-block' }}>
        <form
          style={{ display: 'inline-block' }}
          className={this.props.formClass}
          action="https://codepen.io/pen/define"
          method="POST"
          target={this.props.target}
          rel="noopener noreferrer"
        >
          <input
            type="hidden"
            name="data"
            value={JSON.stringify(this.toSend(this.curPayload))}
          />
          <button
            type="submit"
            className={this.props.className}
          >
            {this.props.label}
          </button>

        </form>
      </span>
    );
  }
}

CodepenPrefill.defaultProps = {
  label: 'Prefill CodePen',
  target: '',
  className: '',
};

CodepenPrefill.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.array,
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
};

export default CodepenPrefill;
