/** @preserve
 * Copyright 2023 Declan Fodor
 */

import 'preact/debug'
import { h, render } from 'preact'
import { FrontPage } from '../index.jsx'
window.addEventListener("load", _ => render(<FrontPage />, document.body))
