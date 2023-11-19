/**
 *  @version 0.0.3
 *  @author Declan Fodor
 *  @license MIT
 *
 * MIT License
 *
 * Copyright (c) 2023 Declan Fodor
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import 'preact/debug'
import { Component, Fragment, h } from 'preact'
const CURSOR_BLINK_RATE = 530

export class TerminalText extends Component {
  state = { text: '_' } // We start out with the cursor existant in the text
  cursorline = true // Reflects if the cursor exists or not

  constructor (props, context) {
    super(props, context)
    this.unwrittentext = props.finaltext
    this.compid = props.compid ? props.compid : 1
  }

  manageCursorBlink () {
    this.blinkcursor = setInterval(() => {
      // Changes the state of the cursor
      this.setState(prev => ({
        text: this.cursorline
          ? prev.text.slice(0, -1)
          : `${prev.text}_`
      }))
      this.cursorline = !this.cursorline
      if (!(this.cursorline || this.unwrittentext)) {
        // If the text is done being written, and the cursor is no longer there,
        // then we can safely stop.
        clearInterval(this.blinkcursor)
      }
    }, CURSOR_BLINK_RATE)
  }

  /**
   * Takes the first character from the text that has not been written
   * and writes it.
   */
  writeChar () {
    this.setState(prev => ({
      text: this.cursorline
        ? `${prev.text.slice(0, -1)}${this.unwrittentext[0]}_`
        : `${prev.text}${this.unwrittentext[0]}`
    }))
    // Removes the first character from the 'unwritten text,'
    // since it is technically written now.
    this.unwrittentext = this.unwrittentext.slice(1, this.unwrittentext.length)
  }

  /**
   * Removes interval, so code does not keep attempting to write,
   * and sends an event for other elements.
   */
  doneProcessing () {
    if (this.unwrittentext.length === 0) {
      // Incase other parts of code need to know this is loaded (they do)
      dispatchEvent(
        new CustomEvent(`terminal-text-done-${this.compid.toString()}`)
      )
      // All the text is written, as such we should stop calling this.
      clearInterval(this.writetext)
    }
  }

  /**
   * Writes text and cleans up when done.
   */
  manageWrite () {
    this.writetext = setInterval(() => {
      this.writeChar()
      this.doneProcessing()
    }, 200)
  }

  componentDidMount () {
    this.manageCursorBlink()
    this.manageWrite()
  }

  componentWillUnmount () {
    // If these variables are no longer used, then this does nothing.
    // But if they do exist when they should not, then we cancel them here.
    clearInterval(this.blinkcursor)
    clearInterval(this.writetext)
  }

  /**
   * We need to be able to skip the entire display if someone wants to.
   */
  handleClick () {
    this.setState(prev => ({ text: prev.text + this.unwrittentext }))
    /* Letting existant code handle the rest
     by setting unwrittentext to be empty */
    this.unwrittentext = ''
    this.doneProcessing()
  }

  render () {
    const HandleClickBinded = this.handleClick.bind(this)
    return (
      <>
        <h1
          className='
          text-green-600
          min-[1330px]:text-6xl
          text-4xl
          font-ubmono
          basis-3/4
          grow'
          onClick={HandleClickBinded}
        >
          &gt;{this.state.text}
        </h1>
      </>
    )
  }
}
