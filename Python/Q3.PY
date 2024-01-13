def is_palindrome(s: str) -> bool:
    # Helper function to filter alphanumeric characters and convert to lowercase
    def clean_string(s):
        return ''.join(c.lower() for c in s if c.isalnum())

    cleaned_s = clean_string(s)

    # Check if the cleaned string is equal to its reverse
    return cleaned_s == cleaned_s[::-1]

# Test cases
print(is_palindrome("A man, a plan, a canal, Panama"))  # True
print(is_palindrome("race a car"))  # False
print(is_palindrome("Was it a car or a cat I saw?"))  # True
print(is_palindrome("hello"))  # False
