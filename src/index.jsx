/** @preserve
 * Copyright 2023 Declan Fodor
 */
import 'preact/debug'
import { h } from 'preact'
import { useState } from 'preact/hooks'

function ButtonBox() {
  const [value, setValue] = useState(0);
  const changestate = () => setValue(value + 1)
  return (
    <div class="bg-slate-100 flex justify-center items-center h-1/3 w-1/3">
      <button onClick={changestate} class="text-center rounded transition-colors bg-blue-400 hover:w-1/6 hover:h-1/6 hover:bg-blue-700 text-white">I've been clicked {value} times!</button>
    </div>
  )
}
export function MultiButtonBox(params) {
  return (
    <div className="grid grid-rows-3 grid-cols-3 h-11/12 w-11/12">
      {Array(Number(params.count)).fill(<ButtonBox />)}
    </div>
  )
}

export function AboutButton() {
  const [value, setValue] = useState(true);
  const changestate = () => setValue(!value)
  return (
    <div>
      <p>Lorem ipsum...</p>
      <p hidden={value}>
        dolor sit amet, consectetur adipiscing elit.
        Etiam imperdiet elementum nibh, quis pretium neque varius ac.
        Duis et diam et justo auctor sollicitudin eu vitae elit.</p>
      <button onClick={changestate}><p hidden={!value}>Click me!</p><p hidden={value}>Hide information.</p></button>
    </div>
  )
}
