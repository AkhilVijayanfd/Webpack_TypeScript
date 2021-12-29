import React from "react";
import App from '../App';
import render from 'enzyme';
import  { shallow } from "enzyme";

it('renders without crashing', () =>{
    render(<App />);
});

// describe( "Search Component", () => {
//     test ("renders", () =>{
//         const wrapper = shallow(<App />);

//         expect(wrapper.exists()).toBe(true);
//     });
// });

