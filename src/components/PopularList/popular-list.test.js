import PopularList from ".";

describe("<PopularList />", () => {
  test("renders", () => {
    const wrapper = shallow(<PopularList />);
    expect(wrapper.exists()).toBe(true);
  });
});
