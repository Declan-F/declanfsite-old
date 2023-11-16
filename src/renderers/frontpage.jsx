/** @preserve
 * Copyright 2023 Declan Fodor
 */
import 'preact/debug'
import { h, render } from 'preact'
import { TerminalText } from '../index.jsx'
window.addEventListener("load", () => { render(<TerminalText finaltext="Hello world!" />, document.querySelector("#title-terminal")) })
