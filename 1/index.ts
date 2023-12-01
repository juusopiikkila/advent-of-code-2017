import type { ProgramDefinition } from '../utils';

export default class Program implements ProgramDefinition {
    parseInput(input: string) {
        return [...input].map(Number);
    }

    getDigit(data: number[], index: number) {
        return data[index % data.length];
    }

    private getNumbers(data: number[], offset: number): number[] {
        const sums: number[] = [];
        let index = 0;

        while (index < data.length) {
            const digit = this.getDigit(data, index);
            const nextDigit = this.getDigit(data, index + offset);

            if (digit === nextDigit) {
                sums.push(digit);
            }

            index += 1;
        }

        return sums;
    }

    async runPart1(input: string[]) {
        const numbers = this.getNumbers(this.parseInput(input[0]), 1);

        return numbers.reduce((accumulator, current) => accumulator + current, 0);
    }

    async runPart2(input: string[]) {
        const data = this.parseInput(input[0]);
        const offset = data.length / 2;
        const numbers = this.getNumbers(data, offset);

        return numbers.reduce((accumulator, current) => accumulator + current, 0);
    }
}
