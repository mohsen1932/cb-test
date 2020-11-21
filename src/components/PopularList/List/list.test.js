import List from ".";

const dataGen = (length) => {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push({
      name: "name " + i,
      url: "url " + i,
    });
  }
  return arr;
};

describe("<List />", () => {
  test("renders", () => {
    const wrapper = shallow(<List items={dataGen(1)} />);
    expect(wrapper.exists()).toBe(true);
  });

  test("empty items", () => {
    const wrapper = shallow(<List items={[]} />);
    expect(wrapper.find(".col")).toHaveLength(0);
  });

  test("items countless than expected columns", () => {
    const wrapper = shallow(<List items={dataGen(3)} desktopCols={5} />);
    expect(wrapper.find(".col")).toHaveLength(1);
  });

  test("18 items 3 columns", () => {
    const wrapper = shallow(
      <List items={dataGen(18)} desktopCols={3} mobileCols={2} />
    );
    expect(wrapper.find(".col-lg-4")).toHaveLength(3);
    expect(wrapper.find(".col-6")).toHaveLength(3);
    expect(wrapper.find("li")).toHaveLength(18);
    expect(wrapper.find("#col_6 li")).toHaveLength(6);
  });
});
