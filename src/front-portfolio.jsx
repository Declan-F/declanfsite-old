/**
 *  @summary Handles the display of the portfolio.
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
import { useEffect, useState } from 'preact/hooks'
import { useSignal } from '@preact/signals'
import { h, Fragment } from 'preact'

const CLASS_NAMES = `
 shadow-custom1 text-slate-100 shadow-gray-400 bg-blue-max
 h-full w-full rounded-[40px] origin-center scale-y-90 scale-x-75
 transition-nocolor duration-[200ms,700ms,700ms] ease-in
 hover:scale-y-100 hover:scale-x-90 hover:shadow-custom2 hover:shadow-gray-400`
const PORTFOLIO_LENGTH = 9
/**
 *
 */
function arrayOfPortfolioFragments (number) {
  // Returns a seperate signal instance for each number
  return Array.from(
    { length: number },
    (v, i) => {
      return (
        <PortfolioFragment
          key={`${i * 200}PortfolioFragment`}
          timeout={i * 1000}
        />
      )
    })
}
/**
 *
 *
 */
function PortfolioFragment (params) {
  const classes = useSignal(`opacity-0 ${CLASS_NAMES}`)
  setTimeout(() => {
    classes.value = `opacity-100 ${CLASS_NAMES}`
  }, params.timeout)
  return (
    <section
      className={classes.value}
    >
      {new Array(50).fill('hi').join(' ')}
    </section>
  )
}

/**
 *
 */
export function Portfolio () {
  const [complist, changecomplist] = useState([null, null])

  useEffect(() => {
    window.addEventListener('terminal-text-done-1', () => {
      const portfoliofragmentlist = arrayOfPortfolioFragments(PORTFOLIO_LENGTH)
      changecomplist(portfoliofragmentlist)
    })
  })
  return <>{complist}</>
}
