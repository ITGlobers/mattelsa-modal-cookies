import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ModalCookies from "./ModalCookies";

// Mock de vtex.css-handles
jest.mock('vtex.css-handles', () => ({
  useCssHandles: () => ({
    container: "container",
    buttons: "buttons",
    buttonAccept: "buttonAccept",
    buttonCancel: "buttonCancel",
    container__tittle: "container__tittle",
    container__paragraph: "container__paragraph"
  })
}));

describe("ModalCookies Component", () => {
  it("should render the title and message correctly", () => {
    render(<ModalCookies titleCookies="Política de Cookies" messageCookies="Por favor, acepta las cookies." />);
    expect(screen.getByText("Política de Cookies")).toBeInTheDocument();
    expect(screen.getByText("Por favor, acepta las cookies.")).toBeInTheDocument();
  });
});

describe("ModalCookies Component - localStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should set cookiesAccepted to 'true' in localStorage when 'Aceptar' is clicked", () => {
    render(<ModalCookies titleCookies="Política de Cookies" messageCookies="Por favor, acepta las cookies." />);

    expect(screen.getByText("Política de Cookies")).toBeInTheDocument();
    expect(screen.getByText("Por favor, acepta las cookies.")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Aceptar"));
    expect(screen.queryByText("Política de Cookies")).not.toBeInTheDocument();
    expect(localStorage.getItem("cookiesAccepted")).toBe("true");
  });

  it("should not render the modal if cookiesAccepted is already true", () => {
    localStorage.setItem("cookiesAccepted", "true");
    render(<ModalCookies titleCookies="Política de Cookies" messageCookies="Por favor, acepta las cookies." />);
    expect(screen.queryByText("Política de Cookies")).not.toBeInTheDocument();
  });

  it("should set cookiesAccepted to 'true' in localStorage when 'Cancelar' is clicked", () => {
    render(<ModalCookies titleCookies="Política de Cookies" messageCookies="Por favor, acepta las cookies." />);
    fireEvent.click(screen.getByText("Cancelar"));
    expect(screen.queryByText("Política de Cookies")).not.toBeInTheDocument();
    expect(localStorage.getItem("cookiesAccepted")).toBe("true");
  });
});
