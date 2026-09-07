#Question 11: Iterating Through List and Tuples

numbers = [10, 20, 30, 40]
fruits = ("Apples", "Banana", "Mango")

print("List Elements:")
for i in numbers:
    print(i)

sum = 0
for i in numbers:
    sum += i

print("Sum =", sum)

print("\nTuple Elements:")
for i in fruits:
    print(i)
