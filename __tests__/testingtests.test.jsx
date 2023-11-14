import { h } from "preact"
import { mount} from 'enzyme';
import { describe, expect, test, beforeEach } from '@jest/globals';
import { ListCounter, AboutButton } from '../src/index.jsx'
describe("<listCounter />", () => {
  test("Render a list counter with a count value of 10", () => {
    const wrapper = mount(<div><ListCounter count={10} /></div>)
    expect(wrapper.find("li").length).toBe(10)
  })
})

describe("<AboutButton />", () => {
  beforeEach(() => {
    document.body.innerHTML = ''
    document.head.innerHTML = ''
  })
  test("Render AboutButton", () => {
    expect(() => mount(<div><AboutButton /></div>)).not.toThrow()
  })

  test("Check that AboutButton has rendered correctly", () => {
    const aboutbutton = mount(<div><AboutButton /></div>)
    expect(aboutbutton.find("button").props()).not.toBeFalsy()
    expect(aboutbutton.find("button").props().onClick).not.toBeFalsy()
    expect(aboutbutton.find("button > p").length).toBe(2)
    expect(aboutbutton.find("div")).toBeTruthy()
    // ... no need to write the rest.
  })
})
