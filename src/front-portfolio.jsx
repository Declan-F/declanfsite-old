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
import { useEffect } from 'preact/hooks'
import { useSignal } from '@preact/signals'
import { h } from 'preact'
import { portfolioFragmentContents } from './portfolio.config.jsx'
// A lot of these are one off values and cannot really be reused
const CLASS_NAMES = `
  text-slate-100 shadow-gray-400 bg-blue-max
  origin-center scale-y-90 scale-x-75 rounded-[40px] 
  ease-in
  transition-[opacity,_transform,_box-shadow] duration-[200ms,700ms,700ms] 
  hover:scale-y-100 hover:scale-x-90 hover:shadow-gray-400`
const portfoliolength = portfolioFragmentContents.length
const portfoliodelay = 1000

/**
 *
 *
 */
function PortfolioFragment (params) {
  const classes = useSignal(`opacity-[0.01] h-px w-px ${CLASS_NAMES}`)
  useEffect(() => {
    window.addEventListener('terminal-text-done-1', () => {
      setTimeout(() => {
        classes.value = `
      opacity-100
      h-full w-full
      shadow-custom1 hover:shadow-custom2 
      ${CLASS_NAMES}`
      }, params.index * 1000)
    })
  })
  return (
    <section
      className={classes.value}
    >
      {portfolioFragmentContents[params.index]}
    </section>
  )
}

/**
 *
 */
export function Portfolio (params) {
  return Array.from(
    { length: portfoliolength },
    (v, i) => {
      return (
        <PortfolioFragment
          key={`${i * portfoliodelay}PortfolioFragment`}
          index={i}
        />
      )
    })
}
