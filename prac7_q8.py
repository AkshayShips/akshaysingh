#Question 8: Tuple Methods - count() and

numbers = (10, 20, 30, 20, 40)

print("Count of 20:", numbers.count(20))
print("Index of 30:", numbers.index(30))

try:
    print(numbers.index(100))
except ValueError:
    print("Elements not fount")

