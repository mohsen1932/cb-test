import Navigation from ".";

describe("<Navigation />", () => {
  test("renders", () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.exists()).toBe(true);
  });
  test("nav links", () => {
    const wrapper = shallow(<Navigation />);
    const navLinks = wrapper.find(".nav-link");
    expect(navLinks).toHaveLength(7);
  });
});
