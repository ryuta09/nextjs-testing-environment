import { render, screen } from "@testing-library/react";
import Jest from "@/app/jest/page";
import JestButton from "@/app/jest/JestButton";
import userEvent from "@testing-library/user-event";
describe("Jestコンポーネント", () => {
  test("Jestコンポーネントの要素のテスト", () => {
    render(<Jest />);
    const h1El = screen.getByRole('heading', { name: 'Home'})
    expect(h1El).toBeInTheDocument();
  });

  test("JestButtonのイベントハンドラーの正常性をテスト", async () => {
    render(<JestButton />)
    const user  = userEvent.setup()
    let pEl = screen.getByText('0')
    const btnEl = screen.getByRole('button', { name: "プラスボタン" })

    expect(pEl).toBeInTheDocument()

    await user.click(btnEl)
    pEl = screen.getByText('1')
    expect(pEl).toBeInTheDocument()
  })
});
