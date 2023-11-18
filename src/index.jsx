/** @preserve
 * Copyright 2023 Declan Fodor
 */
import 'preact/debug'
import { Fragment, h } from 'preact'
import { TerminalText } from './front-header.jsx'
import { Portfolio } from './front-portfolio.jsx'
/**
 * Displays the front page, with a header and portfolio section
 */
export function FrontPage() {
  return <>
    <header class="border-cyan-500 border-2 bg-cyan-500/5 h-1/5 flex items-center lg:pl-1/4 sm:pl-1/8 pl-0"
      id="title-terminal">
      <TerminalText compid={"1"} finaltext={"echo \"declan fodor's portfolio\""} />
    </header>
    <main class="grid grid-flow-row grid-cols-3 gap-1/16 auto-rows-fr m-1/16 min-h-screen place-content-evenly" id="main-portfolio">
      <Portfolio />
    </main>
  </>
}
