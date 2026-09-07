# Question 6: Removing Elements from List

numbers = [10, 20, 30, 40]

numbers.remove(20)
print("After remove:", numbers)

numbers.pop()
print("After pop:", numbers)

try:
    numbers.remove(100)
except ValueError:
    print("Elements not found")
