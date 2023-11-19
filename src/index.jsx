/**
 *  @version 0.0.3
 *  @author Declan Fodor
 *  @license MIT
 *
 *  MIT License
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
import { Fragment, h } from 'preact'
import { TerminalText } from './front-header.jsx'
import { Portfolio } from './front-portfolio.jsx'
/**
 * Displays the front page, with a header and portfolio section.
 */
export function FrontPage () {
  return (
    <>
      <header
        class='
        border-cyan-500
        border-2
        bg-cyan-500/5
        h-1/5
        flex
        items-center
        lg:pl-1/4
        sm:pl-1/8
        pl-0'
        id='title-terminal'
      >
        <TerminalText
          compid='1'
          finaltext={"echo \"declan fodor's portfolio\""}
        />
      </header>
      <main
        class='
        grid
        grid-flow-row
        grid-cols-3
        gap-1/16
        auto-rows-fr
        m-1/16
        h-[200vh]
        place-content-evenly'
        id='main-portfolio'
      >
        <Portfolio />
      </main>
    </>
  )
}
