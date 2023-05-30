trybe_course = ["Introdução", "Front-end", "Back-end"]

# E.5
trybe_course.append('Ciência da Computação')

# E.6
trybe_course[0] = 'Fundamentos'
print(trybe_course)

# E.7
name = set()
name.add('Caíque')
print(name)

# E.8
info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

info['recorrente'] = 'Sim'

# E.9
del info['origem']
print(info)

# E.10
answer10 = 'Tuple or List'

# E.11
array11 = [0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4]
dictionary11 = {}

for item in array11:
    if (item in dictionary11):
        dictionary11[item] += 1
    else:
        dictionary11[item] = 1

# print(dictionary11)
# recomended for E.11
for key, value in dictionary11.items():
    print(f"{key} : {value}")
