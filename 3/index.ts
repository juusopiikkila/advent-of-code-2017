import { getManhattanDistance, type Coord, type ProgramDefinition } from '../utils';

export interface CoordinateValue {
    coordinate: Coord
    number: number
    value: number
}

export default class Program implements ProgramDefinition {
    parseInput(input: string[]) {
        return Number(input[0]);
    }

    getRingSize(square: number): number {
        let size = 1;

        while (size * size < square) {
            size += 2;
        }

        return size;
    }

    getCoordinatesForSquare(square: number): Coord {
        const ringSize = this.getRingSize(square);
        const half = Math.floor(ringSize / 2);

        const bounds: {
            topLeft: Coord
            topRight: Coord
            bottomRight: Coord
            bottomleft: Coord
        } = {
            topLeft: { x: half * -1, y: half },
            topRight: { x: half, y: half },
            bottomRight: { x: half, y: half * -1 },
            bottomleft: { x: half * -1, y: half * -1 },
        };

        const ringNumbersCount = ringSize * 4 - 4;
        const maxNumber = ringSize * ringSize;

        const coordinates: Record<number, Coord> = {};
        let currentNumber = maxNumber - ringNumbersCount + 1;

        // right side, bottom to top
        for (let index = 0; index < ringSize - 2; index += 1) {
            coordinates[currentNumber] = {
                x: bounds.bottomRight.x,
                y: bounds.bottomRight.y + 1 + index,
            };

            currentNumber += 1;
        }

        // top side, right to left
        for (let index = 0; index < ringSize; index += 1) {
            coordinates[currentNumber] = {
                x: bounds.topRight.x - index,
                y: bounds.topRight.y,
            };

            currentNumber += 1;
        }

        // left side, top to bottom
        for (let index = 0; index < ringSize - 2; index += 1) {
            coordinates[currentNumber] = {
                x: bounds.topLeft.x,
                y: bounds.topLeft.y - 1 - index,
            };

            currentNumber += 1;
        }

        // bottom side, left to right
        for (let index = 0; index < ringSize; index += 1) {
            coordinates[currentNumber] = {
                x: bounds.bottomleft.x + index,
                y: bounds.bottomleft.y,
            };

            currentNumber += 1;
        }

        return coordinates[square] || { x: 0, y: 0 };
    }

    async runPart1(input: string[]) {
        const square = this.parseInput(input);
        const coordinates = this.getCoordinatesForSquare(square);

        return getManhattanDistance([0, 0], [coordinates.x, coordinates.y]);
    }

    getValueForSquare(square: number, coordinateValues: CoordinateValue[]): number {
        if (square === 1) {
            return 1;
        }

        const coordinates = this.getCoordinatesForSquare(square);
        const adjacentCoordinates = [
            { x: coordinates.x, y: coordinates.y + 1 }, // top
            { x: coordinates.x + 1, y: coordinates.y }, // right
            { x: coordinates.x, y: coordinates.y - 1 }, // bottom
            { x: coordinates.x - 1, y: coordinates.y }, // left
            { x: coordinates.x - 1, y: coordinates.y + 1 }, // top left
            { x: coordinates.x + 1, y: coordinates.y + 1 }, // top right
            { x: coordinates.x + 1, y: coordinates.y - 1 }, // bottom right
            { x: coordinates.x - 1, y: coordinates.y - 1 }, // bottom left
        ];

        return adjacentCoordinates
            .map((coord) => coordinateValues.find((value) => (
                value.coordinate.x === coord.x && value.coordinate.y === coord.y
            ))?.value || 0)
            .reduce((sum, value) => sum + value, 0);
    }

    async runPart2(input: string[]) {
        const targetValue = this.parseInput(input);
        const coordinateValues: CoordinateValue[] = [];

        let counter = 1;
        let currentValue = 0;

        while (currentValue < targetValue) {
            const coordinates = this.getCoordinatesForSquare(counter);

            currentValue = this.getValueForSquare(counter, coordinateValues);

            coordinateValues.push({
                coordinate: coordinates,
                number: counter,
                value: currentValue,
            });

            counter += 1;
        }

        return currentValue;
    }
}
