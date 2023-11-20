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
/**
 * Do not set this less than the write rate,
 * as then things will likely break.
 */
const CURSOR_BLINK_RATE = 530
const WRITE_RATE = 200
export class TerminalText extends Component {
  state = { text: '_' } // We start out with the cursor existant in the text
  index = 0 // Used to add the next character, and manage the cursor blinking
  constructor (props, context) {
    super(props, context)
    this.finaltext = props.finaltext
    this.compid = props.compid ? props.compid : 1
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

  /**
   * We need to be able to skip the entire display if someone wants to.
   */
  handleClick () {
    /* Letting existant code handle the rest
     by setting the written text equal to the final text */
    this.setState(() => ({ text: this.finaltext }))
    this.doneProcessing()
  }

  /**
   * Takes the first character from the text that has not been written
   * and writes it.
   */
  writeChar () {
    this.setState(prev => ({
      text: this.index >= prev.text.length
        ? `${prev.text}${this.finaltext[this.index]}`
        : `${prev.text.slice(0, -1)}${this.finaltext[this.index]}_`
    }))
    this.index++
  }

  manageText () {
    if (this.state.text.length < this.finaltext.length) {
      /* If the text length is less than the final text,
      then we know we must write. */
      this.writeChar()
    } else if (this.state.text.length === this.index) {
      /* If the text length is not less than the final text length,
      and is equal to the index, then we know there is not a cursor,
      and as such the text is equal for both. */
      this.doneProcessing()
    }
  }

  componentDidMount () {
    // Interval for blinking text
    this.blinkinterval = setInterval(
      this.blinkCursor.bind(this),
      CURSOR_BLINK_RATE
    )
    // Interval for writing text, and managing done state if it is all written.
    this.writeinterval = setInterval(
      this.manageText.bind(this),
      WRITE_RATE
    )
  }

  componentWillUnmount () {
    // If these variables are no longer used, then this does nothing.
    // But if they do exist when they should not, then we cancel them here.
    clearInterval(this.blinkinterval)
    clearInterval(this.writeinterval)
  }

  /**
   * Blinks the cursor.
   */
  blinkCursor () {
    this.setState(prev => ({
      text: this.index >= prev.text.length
        ? `${prev.text}_`
        : prev.text.slice(0, this.index) + prev.text.slice(this.index + 1)
    }))
  }

  /**
   * Removes interval, so code does not keep attempting to write,
   * and sends an event for other elements.
   */
  doneProcessing () {
    // Incase other parts of code need to know this is loaded (they do)
    dispatchEvent(
      new CustomEvent(`terminal-text-done-${this.compid.toString()}`)
    )
    // All the text is written, as such we should stop calling this.
    clearInterval(this.writeinterval)
    clearInterval(this.blinkinterval)
  }
}
