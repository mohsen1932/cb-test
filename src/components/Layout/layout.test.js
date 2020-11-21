import Layout from ".";

describe("<Layout />", () => {
  test("renders", () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.exists()).toBe(true);
  });
  test("children", () => {
    const wrapper = shallow(
      <Layout>
        <div className="content">Hello I'm the content</div>
      </Layout>
    );
    const div = wrapper.find(".content");
    expect(div.text()).toBe("Hello I'm the content");
  });
});
