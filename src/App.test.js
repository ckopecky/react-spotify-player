import React from 'react';
import { shallow, render, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import App from './App';
import Checkbox from "./Checkbox";

configure({ adapter: new Adapter() })


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Checkbox changes state after click", () => {
  const checkbox = mount(<Checkbox />);
  expect(checkbox.state(["checked"])).toBe(false)
  checkbox.find('input').simulate('click')
  expect(checkbox.state(["checked"])).toBe(true)
  checkbox.find('input').simulate('click')
  expect(checkbox.state(["checked"])).toBe(false)


})
