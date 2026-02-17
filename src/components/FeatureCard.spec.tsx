import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import FeatureCard from "./FeatureCard";
import { describe, expect, it } from "vitest";

describe("feature", () => {
  it("shall render title and text correctly", () => {
    render(
      <FeatureCard
        title="GPS INCORPORADO"
        text="Monitore o percurso das suas corridas e obtenha estatísticas precisas, incluindo distância, ritmo e intervalos."
        icon="fa-solid fa-location-dot"
      />,
    );
    expect(screen.getByText("GPS INCORPORADO")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Monitore o percurso das suas corridas e obtenha estatísticas precisas, incluindo distância, ritmo e intervalos.",
      ),
    ).toBeInTheDocument();
  });

  it("should render icon with correct class", () => {
    const { container } = render(
      <FeatureCard
        title="GPS INCORPORADO"
        text="Monitore o percurso das suas corridas e obtenha estatísticas precisas, incluindo distância, ritmo e intervalos."
        icon="fa-solid fa-location-dot"
      />,
    );

    const iconElement = container.querySelector("i");

    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass("fa-solid");
    expect(iconElement).toHaveClass("fa-location-dot");
  });
});
