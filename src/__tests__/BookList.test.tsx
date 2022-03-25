import React from "react";
import { shallow } from "enzyme";
import enzymeToJson from "enzyme-to-json";
import BookList from '../components/book/BookList';

const book = {
    id: '15',
    title: 'Paul of Dune',
    year: '2008',
    author: 'Brian HerbertKevin J. Anderson',
    wiki_url: 'https://en.wikipedia.org/wiki/Paul_of_Dune',
}

describe('>>> BookList component', () => {
    it('+++ renders when one item', () => {
        jest.spyOn(React, "useState");
        const component = shallow(<BookList book={book} />);
        expect(enzymeToJson(component)).toMatchSnapshot();
    });
});