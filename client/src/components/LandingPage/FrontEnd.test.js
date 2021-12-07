import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../../store/store";

import App from "../../App";

describe("<LandingPage/>", () => {
  test("LandingPage render with Go! button", () => {
    const component = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    component.getByText("Go!");
    const button = component.getByText("Go!");
    fireEvent.click(button);
  });
});

describe("<Home/>", () => {
  test("Home render with Filter and Sort", () => {
    const component = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/home"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    component.getByText("Filter");
    component.getByText("Sort");
  });
});

/*ME SALTA ERROR CON EL ACTION.JS A LA HORA DE LLAMAR AL BACKEND PERO, AUNQUE ESTOS APAREZCAN, ME PASAN LOS TEST Y LA PAG FUNCIONA*/
/*SEGUIRE REVISANDOLO DESPUES PARA ARREGLARLO, NO SE CUANDO DEBO CAMBIAR Y NO TENGO TIEMPO AHORA (8/11/2021 20:34HS)*/
