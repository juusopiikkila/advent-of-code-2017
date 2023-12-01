import Program from '.';

describe('Part 1', () => {
    let program: Program;

    beforeEach(() => {
        program = new Program();
    });

    it('check password', async () => {
        expect(program.checkPassword('aa bb cc dd ee')).toEqual(true);
        expect(program.checkPassword('aa bb cc dd aa')).toEqual(false);
        expect(program.checkPassword('aa bb cc dd aaa')).toEqual(true);
    });

    it('check passwords', async () => {
        expect(await program.runPart1([
            'aa bb cc dd ee',
            'aa bb cc dd aa',
            'aa bb cc dd aaa',
        ])).toEqual(2);
    });
});

describe('Part 2', () => {
    let program: Program;

    beforeEach(() => {
        program = new Program();
    });

    it('check password', async () => {
        expect(program.checkPassword('abcde fghij', true)).toEqual(true);
        expect(program.checkPassword('abcde xyz ecdab', true)).toEqual(false);
        expect(program.checkPassword('a ab abc abd abf abj', true)).toEqual(true);
        expect(program.checkPassword('iiii oiii ooii oooi oooo', true)).toEqual(true);
        expect(program.checkPassword('oiii ioii iioi iiio', true)).toEqual(false);
    });

    it('check passwords', async () => {
        expect(await program.runPart2([
            'abcde fghij',
            'abcde xyz ecdab',
            'a ab abc abd abf abj',
            'iiii oiii ooii oooi oooo',
            'oiii ioii iioi iiio',
        ])).toEqual(3);
    });
});
