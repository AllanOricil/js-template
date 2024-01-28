import { main } from "@src/index";

describe("main function", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should print "hello world"', () => {
    main();
    expect(console.log).toHaveBeenCalledWith("hello world");
  });
});
