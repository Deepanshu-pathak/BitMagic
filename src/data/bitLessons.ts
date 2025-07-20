export const lessons = [
  {
    title: "Binary Number System",
    description: "Learn the fundamentals of binary representation",
    steps: [
      {
        title: "What is Binary?",
        content:
          "Binary is a base-2 number system that uses only two digits: 0 and 1. Each position represents a power of 2.",
        example:
          "The binary number 1011 = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11 in decimal",
      },
      {
        title: "Binary to Decimal Conversion",
        content:
          "To convert binary to decimal, multiply each digit by its corresponding power of 2 and sum the results.",
        example: "101₂ = 1×2² + 0×2¹ + 1×2⁰ = 4 + 0 + 1 = 5₁₀",
      },
      {
        title: "Decimal to Binary Conversion",
        content:
          "To convert decimal to binary, repeatedly and collect the remainders in reverse order.",
        example:
          "13 ÷ 2 = 6 remainder 1\n6 ÷ 2 = 3 remainder 0\n3 ÷ 2 = 1 remainder 1\n1 ÷ 2 = 0 remainder 1\nResult: 1101₂",
      },
    ],
  },
  {
    title: "Bitwise Operations",
    description: "Master AND, OR, XOR, and NOT operations",
    steps: [
      {
        title: "AND Operation (&)",
        content:
          "AND returns 1 only when both bits are 1. Used for masking and clearing bits.",
        example:
          "1011 & 1101 = 1001\nEach bit position: 1&1=1, 0&1=0, 1&0=0, 1&1=1",
      },
      {
        title: "OR Operation (|)",
        content:
          "OR returns 1 when at least one bit is 1. Used for setting bits.",
        example:
          "1011 | 1101 = 1111\nEach bit position: 1|1=1, 0|1=1, 1|0=1, 1|1=1",
      },
      {
        title: "XOR Operation (^)",
        content:
          "XOR returns 1 when bits are different. Used for toggling bits and finding differences.",
        example:
          "1011 ^ 1101 = 0110\nEach bit position: 1^1=0, 0^1=1, 1^0=1, 1^1=0",
      },
      {
        title: "NOT Operation (~)",
        content: "NOT flips all bits. 0 becomes 1, and 1 becomes 0.",
        example:
          "~1011 = 0100 (in 4-bit representation)\nEvery bit is inverted",
      },
    ],
  },
  {
    title: "Bit Shifting",
    description: "Understand left and right shift operations",
    steps: [
      {
        title: "Left Shift (<<)",
        content:
          "Left shift moves bits to the left and fills with zeros. Equivalent to multiplying by powers of 2.",
        example: "5 << 2 = 20\n0101 << 2 = 10100\n5 × 2² = 5 × 4 = 20",
      },
      {
        title: "Right Shift (>>)",
        content:
          "Right shift moves bits to the right. For positive numbers, it's like powers of 2.",
        example: "20 >> 2 = 5\n10100 >> 2 = 00101\n20 ÷ 2² = 20 ÷ 4 = 5",
      },
      {
        title: "Arithmetic vs Logical Shift",
        content:
          "Arithmetic right shift preserves the sign bit, while logical shift fills with zeros.",
        example: "Arithmetic: -8 >> 1 = -4\nLogical: -8 >>> 1 = 2147483644",
      },
    ],
  },
  {
    title: "Two's Complement",
    description: "Learn how negative numbers are represented",
    steps: [
      {
        title: "Understanding Two's Complement",
        content:
          "Two's complement is used to represent negative numbers in binary. It allows arithmetic operations to work uniformly.",
        example:
          "To represent -5: Start with 5 (0101), invert bits (1010), add 1 (1011)",
      },
      {
        title: "Converting to Two's Complement",
        content:
          "To get the two's complement: 1) Invert all bits (one's complement), 2) Add 1 to the result.",
        example:
          "For -7 in 4-bit:\n7 = 0111\nInvert: 1000\nAdd 1: 1001\nSo -7 = 1001",
      },
      {
        title: "Range and Overflow",
        content:
          "In n-bit two's complement, range is from -2^(n-1) to 2^(n-1)-1. Overflow occurs when results exceed this range.",
        example:
          "4-bit range: -8 to +7\n7 + 1 = -8 (overflow)\n0111 + 0001 = 1000",
      },
    ],
  },
  {
    title: "Hexadecimal System",
    description: "Master base-16 number system",
    steps: [
      {
        title: "Hexadecimal Basics",
        content:
          "Hexadecimal uses 16 digits: 0-9 and A-F (where A=10, B=11, C=12, D=13, E=14, F=15).",
        example: "2F₁₆ = 2×16¹ + 15×16⁰ = 32 + 15 = 47₁₀",
      },
      {
        title: "Binary to Hex Conversion",
        content:
          "Group binary digits in sets of 4 (from right to left) and convert each group to hex.",
        example:
          "11010110₂ = 1101|0110₂ = D6₁₆\n1101₂ = 13₁₀ = D₁₆\n0110₂ = 6₁₀ = 6₁₆",
      },
      {
        title: "Practical Applications",
        content:
          "Hex is commonly used in programming for memory addresses, color codes, and compact binary representation.",
        example:
          "Memory address: 0x2A4F\nColor code: #FF5733\nByte value: 0xA5",
      },
    ],
  },

  {
    title: "Binary Arithmetic",
    description:
      "Perform addition, subtraction, multiplication using binary operations.",
    steps: [
      {
        title: "Binary Addition",
        content:
          "Follows same rules as decimal: carry is used when adding 1 + 1",
        example: "1011 + 1101 = 11000",
      },
      {
        title: "Binary Subtraction",
        content: "Use borrow system or two’s complement method",
        example: "1101 - 1011 = 0010",
      },
      {
        title: "Binary Multiplication",
        content: "Use left shift and add based on bits in multiplier",
        example: "5 × 3 → 0101 × 0011 = 1111 (15)",
      },
    ],
  },
  {
    title: "Binary Logic in Real Life",
    description:
      "Understand how binary logic powers circuits, CPUs, and logic gates.",
    steps: [
      {
        title: "Logic Gates",
        content:
          "AND, OR, XOR, NOT gates are basic units of digital circuits using binary logic.",
        example: "A = 1, B = 0 → A AND B = 0",
      },
      {
        title: "Digital Circuits",
        content:
          "All modern devices use binary logic to process inputs and produce outputs.",
        example:
          "Pressing a button: 1 (on) or 0 (off) → logic processed → LED glows",
      },
      {
        title: "Boolean Algebra",
        content: "Used to simplify logic expressions for circuits and CPUs.",
        example: "A + A·B = A (Boolean simplification)",
      },
    ],
  },
  {
    title: "Logic Gates & Truth Tables",
    description: "Understand basic logic gates and their binary behavior",
    steps: [
      {
        title: "AND Gate",
        content: "Output is 1 if both inputs are 1.",
        example: "A B | A AND B\n0 0 | 0\n0 1 | 0\n1 0 | 0\n1 1 | 1",
      },
      {
        title: "OR Gate",
        content: "Output is 1 if either input is 1.",
        example: "A B | A OR B\n0 0 | 0\n0 1 | 1\n1 0 | 1\n1 1 | 1",
      },
      {
        title: "XOR Gate",
        content: "Output is 1 if inputs are different.",
        example: "A B | A XOR B\n0 0 | 0\n0 1 | 1\n1 0 | 1\n1 1 | 0",
      },
      {
        title: "NOT Gate",
        content: "Flips the input.",
        example: "A | NOT A\n0 | 1\n1 | 0",
      },
    ],
  },

  {
    title: "Gray Code",
    description: "Learn the binary reflected Gray code system",
    steps: [
      {
        title: "What is Gray Code?",
        content:
          "Gray code changes only one bit at a time between successive values.",
        example: "3-bit Gray code: 000, 001, 011, 010, 110, 111, 101, 100",
      },
      {
        title: "Binary to Gray",
        content: "Formula: `gray = binary ^ (binary >> 1)`",
        example: "binary = 0101 → 0101 ^ 0010 = 0111",
      },
      {
        title: "Applications",
        content: "Used in error correction, digital encoders, rotary systems",
        example: "Rotary encoders use Gray code to turning",
      },
    ],
  },
  {
    title: "Floating Point Representation",
    description:
      "Learn how real numbers are represented in binary using IEEE 754 format",
    steps: [
      {
        title: "Introduction to Floating Point",
        content:
          "Floating-point numbers represent real numbers using binary scientific notation. They allow storing a values including decimals and very large/small numbers.",
        example: "6.25 = 110.01₂ = 1.1001 × 2²",
      },
      {
        title: "IEEE 754 Format",
        content:
          "A 32-bit float has 1 sign bit, 8 exponent bits (biased), and 23 mantissa bits. The actual value is calculated using: (-1)^sign × 1.mantissa × 2^(exponent - 127)",
        example: "-6.25 → Sign: 1, Exponent: 10000001, Mantissa: 100100000...",
      },
      {
        title: "Precision and Range",
        content:
          "Float (32-bit) offers ~7 decimal digits precision, and Double (64-bit) ~15. There is a limit to representable values and precision loss can occur.",
        example: "Float: max ~3.4×10^38, Double: max ~1.8×10^308",
      },
    ],
  },
  {
    title: "Bitmask DP",
    description:
      "Efficiently solve dynamic programming problems involving subsets using bitmasks",
    steps: [
      {
        title: "What is Bitmask DP?",
        content:
          "In Bitmask DP, a binary number represents a subset of items. It's used in problems where each item can be selected or skipped, like permutations or paths.",
        example:
          "DP[mask][i] → Minimum cost to reach state `mask` ending at index i",
      },
      {
        title: "Common Applications",
        content:
          "Used in Traveling Salesman Problem, Subset Sum, and state compression. Reduces state space in exponential problems.",
        example:
          "TSP: Use mask to represent visited cities → 2ⁿ states for n cities",
      },
      {
        title: "Optimization Techniques",
        content:
          "Use bitwise operators to check/set/unset bits. Memoization speeds up computation.",
        example: "`if (mask & (1 << j))` → Checks if j-th item is selected",
      },
    ],
  },
  {
    title: "Trie and Bit-level Search",
    description: "Use Tries to optimize bit-level operations and searches",
    steps: [
      {
        title: "Binary Trie Basics",
        content:
          "A binary Trie stores numbers by their bits. Each path from root to leaf corresponds to a binary number.",
        example: "Insert 5 → 101 → root → 1 → 0 → 1 path",
      },
      {
        title: "Finding Maximum XOR",
        content:
          "To find max XOR with a number, try taking opposite bits at each level of the Trie for maximum result.",
        example:
          "For number 10, try to go opposite direction of each bit while traversing the Trie",
      },
      {
        title: "Memory and Speed Trade-offs",
        content:
          "Tries offer fast O(32) lookup for 32-bit numbers, but consume memory. Use carefully in constrained environments.",
        example:
          "Store large number of elements in Trie for O(1) XOR query time",
      },
    ],
  },
  {
    title: "Parity Checks",
    description: "Detect errors in data transmission using binary parity bits",
    steps: [
      {
        title: "Understanding Parity",
        content:
          "A parity bit is added to binary data to ensure it has an even or odd number of 1s. It helps detect single-bit errors.",
        example:
          "Even parity: 1011 has 3 ones → add 1 to make total even → 10111",
      },
      {
        title: "Types of Parity",
        content:
          "Even parity ensures total 1s is even; odd parity ensures total 1s is odd. Parity is in hardware data transmission.",
        example: "Data: 1001001 with even parity → 10010011",
      },
      {
        title: "Error Detection with Parity",
        content:
          "Parity helps detect single-bit flips but can't detect multiple-bit errors. It's simple and used in RAM and communication systems.",
        example:
          "Sent: 1100 + even parity → 11001, Received: 11101 → parity fails → error detected",
      },
    ],
  },
];
