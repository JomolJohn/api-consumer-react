import { shallow } from 'enzyme';
import App from '../App';

describe(" App Component", () => {
    it("should render app component", () => {
      const component = shallow(<App />);
      expect(component.getElements()).toMatchSnapshot();
    });
});