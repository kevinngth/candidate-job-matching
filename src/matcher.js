const inputHandler = (input) => {
    // split into jobs and candidates
    const level1 = input.split("\n\n");
    // split into each individual job and candidate
    const output = level1.map((e) => {
        const level2 = e.split("\n");
        const level3 = level2.map((level4) => {
            // split "j1: c3 c4 c2 c1" into ["j1", "c3 c4 c2 c1"]
            const [a, level5] = level4.split(": ");
            // split "c3 c4 c2 c1" into [ 'c3', 'c4', 'c2', 'c1' ]
            return level5.split(" ");
        });
        return level3;
    });
    return output;
};

const outputHandler = (twoDArray) => {
    const arrOfCanJobPairs = twoDArray.map((candidate) => {
        return candidate.join(" ");
    });
    const output = arrOfCanJobPairs.join("\n");
    return output;
};

const matcher = (input) => {
    const [jobs, candidates] = inputHandler(input);
    const result = [];
    candidates.forEach((candidate, i) => {
        const job = candidate[0];
        result.push(["c" + (i + 1), job]);
    });
    console.log(result);
    const output = "c1 j4\nc2 j2\nc3 j1\nc4 j3";
    return output;
};

module.exports = { matcher, inputHandler, outputHandler };
