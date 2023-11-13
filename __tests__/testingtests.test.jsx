import { h } from "preact"
import { shallow, mount, render} from 'enzyme';
import { describe, expect, test } from '@jest/globals';
import { ListCounter } from '../src/index.jsx'
describe("<namecomponent />", () => {
    test("render 5 namecomponents", () => {
        const wrapper = mount(<div><ListCounter count={10} /></div>)
        expect(wrapper.find("li").length).toBe(10)
    })
})