const matcher = require("../src/matcher");

test("should return a string", () => {
    expect(typeof matcher("Hello")).toBe("string");
});

test("should pass test case 1", () => {
    const input =
        "j1: c3 c4 c2 c1\nj2: c2 c3 c1 c4\nj3: c4 c2 c3 c1\nj4: c4 c3 c1 c2\n\nc1: j4 j1 j2 j3\nc2: j1 j2 j4 j3\nc3: j1 j3 j4 j2\nc4: j1 j3 j4 j2";
    const output = "c1 j4\nc2 j2\nc3 j1\nc4 j3";
    expect(matcher(input)).toBe(output);
});
