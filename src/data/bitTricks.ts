export const tricks = [
  {
    title: "Check if Power of 2",
    description: "Efficiently check if a number is a power of 2",
    code: `def is_power_of_2(n):
    return n > 0 and (n & (n - 1)) == 0

# Examples:
# 8 & 7 = 1000 & 0111 = 0000 = 0 ✓
# 6 & 5 = 0110 & 0101 = 0100 ≠ 0 ✗`,
    explanation:
      "A power of 2 in binary has only one bit set. When we subtract 1, all bits after the set bit become 1, and the set bit becomes 0. The AND operation results in 0.",
  },
  {
    title: "Count Set Bits",
    description: "Count the number of 1s in binary representation",
    code: `def count_set_bits(n):
    count = 0
    while n:
        n = n & (n - 1)  # Remove rightmost set bit
        count += 1
    return count

# Brian Kernighan's algorithm`,
    explanation:
      "Brian Kernighan's algorithm: n & (n-1) removes the rightmost set bit. We count how many times we can do this until n becomes 0.",
  },
  {
    title: "Toggle k-th Bit",
    description: "Toggle a specific bit using XOR operation",
    code: `def toggle_bit(n, k):
    return n ^ (1 << k)

# XOR with 1 flips the bit
# XOR with 0 keeps the bit unchanged
# 1 << k creates a mask with bit set at position`,
    explanation:
      "XOR operation with 1 flips the bit, with 0 keeps it same. We create a mask by left-shifting 1 to the desired position.",
  },
  {
    title: "Check k-th Bit",
    description: "Check if the bit at position k is set",
    code: `def is_kth_bit_set(n, k):
    return (n & (1 << k)) != 0

# Example: 10 (1010), k = 3 → True`,
    explanation:
      "Shift 1 left by k. AND with n — if result is non-zero, bit is set.",
  },
  {
    title: "Clear the k-th Bit",
    description: "Sets the k-th bit to 0",
    code: `def clear_kth_bit(n, k):
    return n & ~(1 << k)

# Example: clear 1st bit of 15 (1111) -> 13 (1101)`,
    explanation:
      "We create a mask with all 1s except the k-th bit as 0 using ~(1 << k), and then AND with n to clear that bit.",
  },
  {
    title: "Set the k-th Bit",
    description: "Sets the k-th bit to 1",
    code: `def set_kth_bit(n, k):
    return n | (1 << k)

# Example: set 0th bit of 10 (1010) -> 11 (1011)`,
    explanation:
      "1 << k sets only the k-th bit in a mask. OR with n ensures that bit becomes 1.",
  },
  {
    title: "Clear Lowest Set Bit",
    description: "Removes the lowest set bit",
    code: `def clear_lowest_set_bit(n):
    return n & (n - 1)

# Example: 12 (1100) -> 8 (1000)`,
    explanation:
      "n - 1 flips bits after the rightmost set bit. ANDing clears the lowest set bit.",
  },
  {
    title: "Set Lowest Unset Bit",
    description: "Sets the rightmost 0 to 1",
    code: `def set_lowest_unset_bit(n):
    return n | (n + 1)

# Example: 10 (1010) -> 11 (1011)`,
    explanation:
      "n + 1 sets the lowest 0. OR keeps original 1s and flips the rightmost 0.",
  },
  {
    title: "Get Rightmost Set Bit",
    description: "Isolate the rightmost set bit",
    code: `def rightmost_set_bit(n):
    return n & -n

# Two's complement: -n = ~n + 1
# n & -n isolates the rightmost set bit
# Example: 12 (1100) & -12 = 4 (0100)`,
    explanation:
      "Using two's complement: -n = ~n + 1. When we AND n with -n, all bits cancel out except the rightmost set bit.",
  },
  {
    title: "Find Highest Set Bit",
    description: "Position of the most significant set bit",
    code: `def highest_set_bit(n):
    pos = -1
    while n:
        pos += 1
        n >>= 1
    return pos

# Example: 18 (10010) => 4`,
    explanation:
      "Keep shifting bits to the right until the number becomes 0. Count shifts to get the highest set bit position.",
  },
  {
    title: "Check if Odd/Even",
    description: "Fast check using bitwise AND",
    code: `def is_odd(n):
    return n & 1

def is_even(n):
    return (n & 1) == 0

# LSB is 1 for odd numbers, 0 for even`,
    explanation:
      "The least significant bit (LSB) is always 1 for odd numbers and 0 for even numbers. We check this using AND with 1.",
  },
  {
    title: "Swap Two Numbers",
    description: "Swap without using temporary variable",
    code: `def swap_xor(a, b):
    a = a ^ b
    b = a ^ b
    a = a ^ b
    return a, b

# XOR properties: a ^ a = 0, a ^ 0 = a`,
    explanation:
      "Using XOR properties: a ^ a = 0 and a ^ 0 = a. We can swap two numbers without using extra space.",
  },
  {
    title: "Bitmask Match",
    description: "Check if a number has all bits in a mask set",
    code: `def has_mask(n, mask):
    return (n & mask) == mask

# Example: 14 (1110) has mask 6 (0110)`,
    explanation:
      "AND with mask retains only those bits. If result equals mask, then all those bits were set in the original number.",
  },
  {
    title: "Multiply by Power of Two",
    description: "Efficient multiplication using left shift",
    code: `def multiply_by_power_of_two(n, k):
    return n << k

# Example: 5 << 2 = 20`,
    explanation:
      "Left shifting a number by k is equivalent to multiplying it by 2^k.",
  },
  {
    title: "Divide by Power of Two",
    description: "Efficient division using right shift",
    code: `def divide_by_power_of_two(n, k):
    return n >> k

# Example: 20 >> 2 = 5`,
    explanation:
      "Right shifting a number by k is equivalent to integer division by 2^k (works well for positive integers).",
  },
  {
    title: "Multiply by 3",
    description: "Use bit shift and addition for fast multiply",
    code: `def multiply_by_3(n):
    return (n << 1) + n  # 2n + n = 3n`,
    explanation: "Left shifting by 1 gives 2n. Add n again to get 3n.",
  },
  {
    title: "Check Opposite Signs",
    description: "Detect sign difference using XOR",
    code: `def opposite_signs(x, y):
    return (x ^ y) < 0

# Example: -3 and 2 => True`,
    explanation:
      "If two numbers have opposite signs, their XOR will have the sign bit set (i.e., negative).",
  },
  {
    title: "Check if Negative",
    description: "Determine if a number is negative using sign bit",
    code: `def is_negative(n):
    return (n >> 31) & 1  # For 32-bit integers

# Example: -5 => 1, 5 => 0`,
    explanation:
      "Right-shifting by 31 moves the sign bit to the LSB. Masking with 1 gives 1 if negative, 0 if positive.",
  },
];
