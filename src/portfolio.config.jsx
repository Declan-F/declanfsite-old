/**
 *  @summary Exports a list which will be indexed to add to the portfolio.
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
/* eslint-disable react/jsx-key */
import { h, Fragment } from 'preact'

const portfolioFragmentContents = [
  <>
    <a
      href='.'
      className='flex justify-center items-center h-full flex-col'
    >
      <h3
        className='text-2xl font-bold'
      >
        This website is currently unfinished.
      </h3>
      <p>Segments will be added to this portfolio over time.</p>
    </a>
  </>
]

/* Tailwind makes it difficult to dynamically set element size,
but because this is only called on window load,
we should be able to just set a css variable on the document root.
We can then use it to dynamicallly set the height based on the list size */
document.documentElement.style.setProperty(
  '--portfolio-height',
  `${portfolioFragmentContents.length * 66.667}vh`
)
export { portfolioFragmentContents }
