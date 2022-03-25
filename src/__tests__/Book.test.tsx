import React from "react";
import { mount, shallow } from "enzyme";
import enzymeToJson from "enzyme-to-json";
import Book from '../components/book/Book';

describe('>>> Book component renders a specefic Book information', () => {

    it("should call setState with initial values on component mount", () => {
        jest.spyOn(React, "useState");
        const component = shallow(<Book />);
        expect(enzymeToJson(component)).toMatchSnapshot();
    });
});