import ThemePacks from ".";

describe("<ThemePacks />", () => {
  test("renders", () => {
    const wrapper = shallow(<ThemePacks />);
    expect(wrapper.exists()).toBe(true);
  });
  test("items", () => {
    const wrapper = shallow(<ThemePacks />);
    expect(wrapper.find(".packs")).toHaveLength(2);
  });
});
