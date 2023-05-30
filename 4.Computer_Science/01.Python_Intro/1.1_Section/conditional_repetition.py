# Loop in Range
print('Loop in Range:')
for index in range(5):
    print(index)

# Atribuição múltipla
print('Atribuição Múltipla:')
m = 10
last, next = 0, 1
while last < m:
    print(last)
    last, next = next, last + next

# E.12
print('Exercício 12:')
n = 5
m = n
f = 1

while m > 1:
    f = f * m
    m -= 1

print(f'{n}! = {f}')

# E.13
print('Exercício 13:')
ratings = [6, 8, 5, 9, 10]
new_ratings = []

for grade in ratings:
    new_ratings.append(grade * 10)

print(ratings, new_ratings)

# E.14
print('Exercício 14:')
for grade in new_ratings:
    if grade % 3 == 0:
        print(grade, 'Múltiplo de 3')