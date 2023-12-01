import Program, { CoordinateValue } from '.';

describe('Part 1', () => {
    let program: Program;

    beforeEach(() => {
        program = new Program();
    });

    it('steps from square 1 should be 0', () => {
        const output = program.runPart1(['1']);

        expect(output).toEqual(0);
    });

    it('steps from square 12 should be 3', () => {
        const output = program.runPart1(['12']);

        expect(output).toEqual(3);
    });

    it('steps from square 23 should be 2', () => {
        const output = program.runPart1(['23']);

        expect(output).toEqual(2);
    });

    it('steps from square 1024 should be 31', () => {
        const output = program.runPart1(['1024']);

        expect(output).toEqual(31);
    });
});

describe('Part 2', () => {
    let program: Program;

    beforeEach(() => {
        program = new Program();
    });

    const getValueForSquare = (square: number): number => {
        const coordinateValues: CoordinateValue[] = [];

        let counter = 1;
        let currentValue = 0;

        while (counter <= square) {
            const coordinates = program.getCoordinatesForSquare(counter);

            currentValue = program.getValueForSquare(counter, coordinateValues);

            coordinateValues.push({
                coordinate: coordinates,
                number: counter,
                value: currentValue,
            });

            counter += 1;
        }

        return currentValue;
    };

    it('square 1 value should be 1', () => {
        expect(getValueForSquare(1)).toEqual(1);
    });

    it('square 2 value should be 1', () => {
        expect(getValueForSquare(2)).toEqual(1);
    });

    it('square 3 value should be 2', () => {
        expect(getValueForSquare(3)).toEqual(2);
    });

    it('square 4 value should be 4', () => {
        expect(getValueForSquare(4)).toEqual(4);
    });

    it('square 5 value should be 5', () => {
        expect(getValueForSquare(5)).toEqual(5);
    });

    it('square 6 value should be 10', () => {
        const output = program.runPart2(['6']);

        expect(output).toEqual(10);
    });
});
