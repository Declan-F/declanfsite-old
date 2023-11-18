/** @preserve
 * Copyright 2023 Declan Fodor
 */
import 'preact/debug'
import { Fragment, h } from 'preact'
import { useEffect } from 'preact/hooks'
import { useSignal } from '@preact/signals'
// function PortfolioFragment(props) {
//   const signal = useSignal(null)
//   setTimeout(() => {
//     signal.value = (
//     )
// FIXME move to tests, we write sections by hand
function PortfolioFragment(params) {
  return ( // FIXME i want to sleep, make this change opacity to 100 on load. classlist.replace works fine, the difficulty is doing it without signals
    <section onLoad={} className="hidden transition-nocolor duration-300 ease-in h-full w-full rounded-[40px] shadow-3xl shadow-gray-400 bg-blue-max opacity-0">
      {new Array(50).fill("hi").join(" ")}
    </section>
  )

}
export function Portfolio() {
  const signal = useSignal([])
  useEffect(() => {
    window.addEventListener("terminal-text-done-1", () => {
      for (let index = 1; index < 10; index++) {
        setTimeout(() => {
          signal.value.push(<PortfolioFragment seconds={(index * 200).toString()} />)
        }, );
      }
    })
  })
  return <>{signal.value}</>
}
