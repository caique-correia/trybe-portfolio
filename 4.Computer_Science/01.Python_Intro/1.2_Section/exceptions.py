# E.03
# Writing file (not requested)
students_grades = [
    'Marcos 10',
    'Felipe 4',
    'José 6',
    'Ana 10',
    'Maria 9',
    'Miguel 5'
]


with open('students_grades.txt', 'w') as file:
    for student_grade in students_grades:
        file.write(f'{student_grade}\n')

# Reading file (requested)
reproved_students = []
with open('students_grades.txt', 'r') as file:
    for student_grade in file:
        req = student_grade.split(' ')
        if int(req[1]) < 6:
            reproved_students.append(req[0])

# Writing new file (requested)
with open('reproved_students.txt', 'w') as file:
    for student in reproved_students:
        file.write(f'{student}\n')