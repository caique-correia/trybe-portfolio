# E.01
NAME = input('Digite teu nome: ')
for letter in NAME:
    print(letter)


# E.02
def error02(value): print(f'Erro ao somar valores, {value} é um valor inválido')


numbers_str = input('Digite os valores a serem somados, separados entre si por espaço: ')
numbers_list = numbers_str.split(sep=' ')
numbers_sum = 0


for number in numbers_list:
    if number.isdigit():
        numbers_sum += int(number)
    else:
        error02(number)


print(f'A soma dos valores válidos é: {numbers_sum};')