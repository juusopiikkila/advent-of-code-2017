import type { ProgramDefinition } from '../utils';

export default class Program implements ProgramDefinition {
    parseInput(input: string[]) {
        return input.map((row) => row.split(/\s+/).map(Number));
    }

    getHighestAndLowestNumber(numbers: number[]): { highest: number; lowest: number } {
        return {
            highest: Math.max(...numbers),
            lowest: Math.min(...numbers),
        };
    }

    getEvenlyDivisibleNumbers(numbers: number[]): [number, number] {
        const sortedNumbers = numbers.sort((a, b) => a - b);

        for (let index = sortedNumbers.length - 1; index >= 0; index -= 1) {
            const currentNumber = sortedNumbers[index];

            for (const otherNumber of sortedNumbers) {
                if (currentNumber === otherNumber) {
                    // eslint-disable-next-line no-continue
                    continue;
                }

                if (currentNumber % otherNumber === 0) {
                    return [currentNumber, otherNumber];
                }
            }
        }

        throw new Error('No evenly divisible numbers found');
    }

    getDifference(a: number, b: number): number {
        return Math.abs(a - b);
    }

    async runPart1(input: string[]) {
        const data = this.parseInput(input);

        return data.reduce((sum, row) => {
            const { highest, lowest } = this.getHighestAndLowestNumber(row);

            return sum + this.getDifference(highest, lowest);
        }, 0);
    }

    async runPart2(input: string[]) {
        const data = this.parseInput(input);

        return data.reduce((sum, row) => {
            const [number1, number2] = this.getEvenlyDivisibleNumbers(row);

            return sum + (number1 / number2);
        }, 0);
    }
}
