import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { shallow } from "enzyme";

import Merge from "../src/containers/merge";

import { left, bounce } from "../index";

let App = () => {
  return (
    <div>
      <p>Hello Clay Jansen!</p>
    </div>
  );
}

const renderh1 = (
  <Merge one={{ name: left }} two={{ name: bounce }} as="h1">
    Hello
  </Merge>
);

const defaultRender = (
  <Merge one={{ name: left }} two={{ name: bounce }} className="main">
    <p>Hello</p>
  </Merge>
);

describe('Merge Component', () => {
  it("animates the children and render the h1 element", () => {
    const tree = renderer.create(renderh1).toJSON;

    expect(tree).toMatchSnapshot();
  });

  it("animates the children and render the div (default) element", () => {
    const tree = renderer.create(defaultRender).toJSON;

    expect(tree).toMatchSnapshot();
  });

  it("matches the keyframes created by styled-components and default props", () => {
    const tree = renderer.create(defaultRender).toJSON();

    expect(tree).toMatchStyledComponentsSnapshot();
  });

  it('renders the Component passed through the component prop', () => {
    const tree = renderer.create(
      <Merge one={{ name: left }} two={{ name: bounce }} component={App} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })

  it("calls componentDidMount lifecycle method", () => {
    const wrapper = shallow(defaultRender);
    wrapper.instance().componentDidMount();
    // Also calls store() method when component mounts.
  });

  it("updates the styles when the component mounts", () => {
    const wrapper = shallow(renderh1);
    wrapper.instance().componentDidMount();

    // Implicitly calls the returnAnimation()
    expect(wrapper.state("styles")).toEqual({
      animation: "fRXJaB 1s ease, bGJZDZ 1s ease",
      backfaceVisibility: "visible"
    });
  });  
})
