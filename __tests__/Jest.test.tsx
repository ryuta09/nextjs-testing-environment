import { render, screen } from "@testing-library/react";
import Jest from "@/app/jest/Jest";
describe("Jestコンポーネント", () => {
  test("Jestコンポーネントの要素のテスト", () => {
    render(<Jest />);
    const h1El = screen.getByRole('heading', { name: 'Home'})
    expect(h1El).toBeInTheDocument();
  });
});
