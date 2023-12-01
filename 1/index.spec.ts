import Program from '.';

describe('Part 1', () => {
    let program: Program;

    beforeEach(() => {
        program = new Program();
    });

    it('1122 should return 3', async () => {
        const output = await program.runPart1(['1122']);

        expect(output).toEqual(3);
    });

    it('1111 should return 4', async () => {
        const output = await program.runPart1(['1111']);

        expect(output).toEqual(4);
    });

    it('1234 should return 0', async () => {
        const output = await program.runPart1(['1234']);

        expect(output).toEqual(0);
    });

    it('91212129 should return 9', async () => {
        const output = await program.runPart1(['91212129']);

        expect(output).toEqual(9);
    });
});

describe('Part 2', () => {
    let program: Program;

    beforeEach(() => {
        program = new Program();
    });

    it('1212 should return 6', async () => {
        const output = await program.runPart2(['1212']);

        expect(output).toEqual(6);
    });

    it('1221 should return 0', async () => {
        const output = await program.runPart2(['1221']);

        expect(output).toEqual(0);
    });

    it('123425 should return 4', async () => {
        const output = await program.runPart2(['123425']);

        expect(output).toEqual(4);
    });

    it('123123 should return 12', async () => {
        const output = await program.runPart2(['123123']);

        expect(output).toEqual(12);
    });

    it('12131415 should return 4', async () => {
        const output = await program.runPart2(['12131415']);

        expect(output).toEqual(4);
    });
});
