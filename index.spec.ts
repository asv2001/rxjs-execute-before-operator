import { of } from "rxjs";
import { executeBefore } from "./index";

describe("executeBefore operator", () => {
  it("executes an action after observable initialization", () => {
    const actionCallback = jest.fn();
    const doneCallback = jest.fn();
    const subject$ = of(true).pipe(executeBefore(actionCallback));
    expect(actionCallback).not.toHaveBeenCalled();
    subject$.subscribe(doneCallback);
    expect(actionCallback).toHaveBeenCalled();
  });
});
