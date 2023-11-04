import Explorer from "./explorer";
import { ExplorerData } from "../../assets/explorer-data";
import { render } from "../../../config/test-utils";

describe("Tests for <Explorer /> component", () => {
  test("should render the component properly", () => {
    const { getAllByTestId } = render(<Explorer explorerData={ExplorerData} />);
    const elements = getAllByTestId("explorer");
    console.log({ elements });
    expect(elements.length).toBeTruthy();
  });
});
