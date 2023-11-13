import 'preact/debug'
import { h } from 'preact'
import { useState } from 'preact/hooks'
export function ListCounter (props) {
  const elements = []
  const countint = Number(props.count)
  for (let index = 1; index <= countint; index++) {
    elements.push(<li>{index}</li>)
  }
  return <ol>{elements}</ol>
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
