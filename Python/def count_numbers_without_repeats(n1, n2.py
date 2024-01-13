def count_numbers_without_repeats(n1, n2):
    def has_repeated_digits(num):
        digits_seen = set()
        for digit in str(num):
            if digit in digits_seen:
                return True
            digits_seen.add(digit)
        return False

    count = 0
    for num in range(n1, n2 + 1):
        if not has_repeated_digits(num):
            count += 1

    return count

def main():
    try:
        n1_input = input("Enter the value of n1: ")
        n1 = int(''.join(filter(str.isdigit, n1_input)))

        n2_input = input("Enter the value of n2: ")
        n2 = int(''.join(filter(str.isdigit, n2_input)))

        result = count_numbers_without_repeats(n1, n2)

        print(result)
    except ValueError as e:
        print(f"Error: {e}. Please enter valid integer values.")

if __name__ == "__main__":
    main()
