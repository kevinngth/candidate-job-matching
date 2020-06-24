const { matcher, inputHandler, outputHandler } = require("../src/matcher");

test("should pass test case 1", () => {
    const input =
        "j1: c3 c4 c2 c1\nj2: c2 c3 c1 c4\nj3: c4 c2 c3 c1\nj4: c4 c3 c1 c2\n\nc1: j4 j1 j2 j3\nc2: j1 j2 j4 j3\nc3: j1 j3 j4 j2\nc4: j1 j3 j4 j2";
    const output = "c1 j4\nc2 j2\nc3 j1\nc4 j3";
    expect(matcher(input)).toBe(output);
});

test("should split input into arrays", () => {
    const input =
        "j1: c3 c4 c2 c1\nj2: c2 c3 c1 c4\nj3: c4 c2 c3 c1\nj4: c4 c3 c1 c2\n\nc1: j4 j1 j2 j3\nc2: j1 j2 j4 j3\nc3: j1 j3 j4 j2\nc4: j1 j3 j4 j2";
    const output = [
        [
            ["c3", "c4", "c2", "c1"],
            ["c2", "c3", "c1", "c4"],
            ["c4", "c2", "c3", "c1"],
            ["c4", "c3", "c1", "c2"],
        ],
        [
            ["j4", "j1", "j2", "j3"],
            ["j1", "j2", "j4", "j3"],
            ["j1", "j3", "j4", "j2"],
            ["j1", "j3", "j4", "j2"],
        ],
    ];
    expect(inputHandler(input)[0][0]).toEqual(output[0][0]);
    expect(inputHandler(input)[0][1]).toEqual(output[0][1]);
    expect(inputHandler(input)[0][2]).toEqual(output[0][2]);
    expect(inputHandler(input)[0][3]).toEqual(output[0][3]);
    expect(inputHandler(input)[1][0]).toEqual(output[1][0]);
    expect(inputHandler(input)[1][1]).toEqual(output[1][1]);
    expect(inputHandler(input)[1][2]).toEqual(output[1][2]);
    expect(inputHandler(input)[1][3]).toEqual(output[1][3]);
});

test("should format output", () => {
    input = [
        ["c1", "j4"],
        ["c2", "j2"],
        ["c3", "j1"],
        ["c4", "j3"],
    ];
    const output = "c1 j4\nc2 j2\nc3 j1\nc4 j3";
    expect(outputHandler(input)).toBe(output);
});
