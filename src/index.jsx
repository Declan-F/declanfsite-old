import { h } from "preact" // Explicitly tells babel to use this function in place of JSX somehow.

export function ListCounter(props) {
    let elements = []
    let countint = Number(props.count)
    for (let index = 1; index <= countint; index++) {
        elements.push(<li>{index}</li>)
    }
    return <ol>{elements}</ol>
}