import SearchBar from ".";

describe("<SearchBar />", () => {
  test("renders", () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.exists()).toBe(true);
  });
  test("logo & shopping card", () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.exists(".shopping-card")).toBeTruthy();
    expect(wrapper.exists(".black-logo")).toBeTruthy();
  });
});
