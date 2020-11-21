import Pack from ".";

describe("<Pack />", () => {
  test("renders", () => {
    const wrapper = shallow(
      <Pack
        item={{
          title: "Autumn Pack",
          image: "/assets/bundle21.png",
          url: "#",
          images: 22,
          vectors: 3,
        }}
      />
    );
    expect(wrapper.exists()).toBe(true);
  });
  test("item", () => {
    const wrapper = shallow(
      <Pack
        item={{
          title: "Autumn Pack",
          image: "/assets/bundle21.png",
          url: "#",
          images: 22,
          vectors: 3,
        }}
      />
    );
    expect(wrapper.find("h3").text()).toBe("Autumn Pack");
    expect(wrapper.find("span").text()).toBe("Includes: 22 images , 3 vectors");
    expect(wrapper.find("img").prop('src')).toBe("/assets/bundle21.png");
  });
});
