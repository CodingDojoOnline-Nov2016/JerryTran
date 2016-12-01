# Create a program that prints the sum of all the values in the list:
# a = [1,2,5,10,255,3]

a = [1,2,5,10,255,3]
sum = 0
for i in range(0,len(a)):
    sum += a[i]
print sum
