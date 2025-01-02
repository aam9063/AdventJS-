const revealSabotage = require('./index');

describe('19 => Enfrenta el sabotaje', () => {
  const testCases = [
    {
      input: [
        ['*', ' ', ' ', ' '],
        [' ', ' ', '*', ' '],
        [' ', ' ', ' ', ' '],
        ['*', ' ', ' ', ' '],
      ],
      output: [
        ['*', '2', '1', '1'],
        ['1', '2', '*', '1'],
        ['1', '2', '1', '1'],
        ['*', '1', ' ', ' '],
      ],
    },
    {
      input: [
        [' ', ' ', ' '],
        [' ', '*', ' '],
        [' ', ' ', ' '],
      ],
      output: [
        ['1', '1', '1'],
        ['1', '*', '1'],
        ['1', '1', '1'],
      ],
    },
    {
      input: [
        ['*', ' ', ' '],
        [' ', '*', ' '],
        [' ', ' ', '*'],
      ],
      output: [
        ['*', '2', '1'],
        ['2', '*', '2'],
        ['1', '2', '*'],
      ],
    },
    {
      input: [
        ['*', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' '],
      ],
      output: [
        ['*', '1', ' '],
        ['1', '1', ' '],
        [' ', ' ', ' '],
      ],
    },
    {
      input: [
        ['*', '*', '*'],
        ['*', ' ', '*'],
        ['*', '*', '*'],
      ],
      output: [
        ['*', '*', '*'],
        ['*', '8', '*'],
        ['*', '*', '*'],
      ],
    },
    {
      input: [
        ['*', ' ', '*'],
      ],
      output: [
        ['*', '2', '*'],
      ],
    },
    {
      input: [
        ['*', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', '*'],
      ],
      output: [
        ['*', '1', ' '],
        ['1', '2', '1'],
        [' ', '1', '*'],
      ],
    },
    {
      input: [
        ['*', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' '],
        [' ', ' ', '*', ' ', ' '],
        [' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', '*'],
      ],
      output: [
        ['*', '1', ' ', ' ', ' '],
        ['1', '2', '1', '1', ' '],
        [' ', '1', '*', '1', ' '],
        [' ', '1', '1', '2', '1'],
        [' ', ' ', ' ', '1', '*'],
      ],
    },
  ];

  it('should return an array type', () => {
    const result = revealSabotage([
      ['*', '.', '.', '.'],
      ['.', '.', '.', '.'],
      ['.', '*', '.', '.'],
      ['.', '.', '.', '.'],
    ]);

    expect(Array.isArray(result)).toBe(true);
  });

  it.each(testCases)('should return the correct output', ({ input, output }) => {
    const result = revealSabotage(input);

    expect(result).toEqual(output);
  });
});
