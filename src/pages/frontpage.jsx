import 'preact/debug'
import { h, render } from 'preact'
import { ListCounter } from '../index.jsx'
window.onload = () => { render(<ListCounter count="10" />, document.body) }
