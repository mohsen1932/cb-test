import App from ".";

describe("<App />", () => {
  test("renders", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
