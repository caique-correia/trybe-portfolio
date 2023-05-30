# E.1
a = 10
b = 5

print(
'Sum:', a + b,
'Sub:', a - b,
'Mul:', a * b,
'Div:', a / b,
'RDiv:', a // b,
'Pot:', a ** b,
'Mod:', a % b
)

# E.2
hours = 6
minutes = hours * 60
seconds = minutes * 60
print(hours, minutes, seconds)

# E.3
milliseconds = seconds * 1000;
print(milliseconds);

# E.4
book_amount = 60
book_full_price = 24.20
library_discount = 0.4
transport_fee = 3 + 0.75 * (book_amount - 1)
book_final_price = book_full_price * (1 - library_discount) * book_amount + transport_fee

print(book_final_price)