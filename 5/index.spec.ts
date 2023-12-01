import Program from '.';
import { parseInputString } from '../utils';

describe('Part 1', () => {
    let program: Program;

    beforeEach(() => {
        program = new Program();
    });

    it('should process instructions', () => {
        const output = program.runPart1(parseInputString(`
            0
            3
            0
            1
            -3
        `));

        expect(output).toEqual(5);
    });
});

describe('Part 2', () => {
    let program: Program;

    beforeEach(() => {
        program = new Program();
    });

    it('should process instructions', () => {
        const output = program.runPart2(parseInputString(`
            0
            3
            0
            1
            -3
        `));

        expect(output).toEqual(10);
    });
});
