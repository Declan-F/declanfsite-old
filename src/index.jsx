/** @preserve
 * Copyright 2023 Declan Fodor
 */
import 'preact/debug'
import { Component, Fragment, h } from 'preact'

const CURSOR_BLINK_RATE = 530

export class TerminalText extends Component {
  state = { text: "_" } // We start out with the cursor existant in the text
  cursorline = true // Reflects if the cursor exists or not

  constructor(props, context) {
    super(props, context)
    this.unwrittentext = props.finaltext
  }

  componentDidMount() {
    this.blinkcursor = setInterval(() => {
      // Chaanges the state of the cursor
      this.setState(prev => ({ text: this.cursorline ? prev.text.slice(0, -1) : `${prev.text}_` }))
      this.cursorline = !this.cursorline
      if (!(this.cursorline || this.unwrittentext)) {
        // If the text is done being written, and the cursor is no longer there, then we can safely stop.
        clearInterval(this.blinkcursor)
      }
    }, CURSOR_BLINK_RATE)
    this.writetext = setInterval(() => {
      // Takes the first character from the text that has not been written and writes it.
      this.setState(prev => ({
        text: this.cursorline
          ? `${prev.text.slice(0, -1)}${this.unwrittentext[0]}_`
          : `${prev.text}${this.unwrittentext[0]}`
      }))
      // Removes the first character from the 'unwritten text,' since it is technically written now.
      this.unwrittentext = this.unwrittentext.slice(1, this.unwrittentext.length)
      if (this.unwrittentext.length === 0) {
        // All the text is written, as such we should stop calling this.
        clearInterval(this.writetext)
      }
    }, 200);
  }

  componentWillUnmount() {
    // If these variables are no longer used, then this does nothing.
    // But if they do exist when they should not, then we cancel them here.
    clearInterval(this.blinkcursor)
    clearInterval(this.writetext)
  }

  render() {
    return <>
      <h1 className='text-green-600 lg:text-6xl font-ubmono basis-3/4 grow'>&gt;{this.state.text}</h1>
    </>
  }
}
