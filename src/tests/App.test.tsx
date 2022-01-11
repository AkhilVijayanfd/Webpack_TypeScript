import React from "react";
import App from '../App';
import  { shallow } from "enzyme";

it("renders without crashing", () =>{
    shallow(<App />);
});

it("renders Account header", () => {
    const wrapper = shallow(<App />);
    const welcome = <h1>Welcome to React Webpack with TypeScript</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });


