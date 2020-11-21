import Search from ".";

describe("<Search />", () => {
  test("renders", () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.exists()).toBe(true);
  });
  test("input & button", () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.exists("button.search-btn")).toBeTruthy();
    expect(wrapper.exists("input.form-control")).toBeTruthy();
  });
});
