# Create a program that prints the average of the values in the list:
# a = [1,2,5,10,255,3]

a = [1,2,5,10,255,3]
sum = 0
for i in range (0,len(a)):
    sum += a[i]
avg = sum / len(a)
print avg
