/** @preserve
 * Copyright 2023 Declan Fodor
 */
import 'preact/debug'
import { h, render } from 'preact'
import { MultiButtonBox } from '../index.jsx'
window.onload = () => { render(<MultiButtonBox count='9' />, document.body) }
