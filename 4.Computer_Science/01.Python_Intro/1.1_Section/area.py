PI = 3.14159265358979323846264338327950


def square(side):
    '''Calculate area of square'''
    return side ** 2


def rectangle(length, width):
    '''Calculate area of rectangle'''
    return length * width


def circle(radius):
    '''Calculate area of circle'''
    return PI * radius ** 2


if __name__ == '__main__':
    print("Área do quadrado:", square(10))
    print("Área do retângulo:", rectangle(2, 2))
    print("Área do círculo:", circle(3))
