import { render } from "enzyme";
import enzymeToJson from "enzyme-to-json";
import NotFound from "../components/NotFound";

describe(" NotFound Component", () => {
    it("should render NotFound component", () => {
        const component = render(<NotFound />);
        expect(enzymeToJson(component)).toMatchSnapshot();
    });
});