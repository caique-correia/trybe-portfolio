def get_factorial(number):
    result = 1

    for index in range(number):
        result *= index + 1

    print(result)


get_factorial(5570)
