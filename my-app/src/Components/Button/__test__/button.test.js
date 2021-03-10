import React from 'react';
import ReactDOM from 'react-dom'
import Button from './../Button';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'

afterEach(cleanup);
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div)
});

it("renders button correctly", () => {
    const {getByTestId} = render(<Button label="Click Me"></Button>)
    expect(getByTestId('button')).toHaveTextContent("Click Me");
})

it("renders button correctly", () => {
    const {getByTestId} = render(<Button label="save"></Button>)
    expect(getByTestId('button')).toHaveTextContent("save");
})

it("matches snapshot", ()=>{
    const tree = renderer.create(<Button label="save"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})