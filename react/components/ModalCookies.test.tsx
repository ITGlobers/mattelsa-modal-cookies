import React from "react";
import { render, screen } from "@testing-library/react";
import ModalCookies from "./ModalCookies"; // Asegúrate de importar correctamente el componente

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
    // Renderiza el componente con valores específicos para el título y el mensaje
    render(<ModalCookies titleCookies="Política de Cookies" messageCookies="Por favor, acepta las cookies." />);

    // Verifica que el título y el mensaje estén presentes en el DOM
    expect(screen.getByText("Política de Cookies")).toBeInTheDocument();
    expect(screen.getByText("Por favor, acepta las cookies.")).toBeInTheDocument();
  });
});
