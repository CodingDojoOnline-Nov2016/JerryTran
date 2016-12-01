# Create a function called 'multiply' that reads each value in the list
# (e.g. a = [2,4,10,16]) and returns a list where each value has been multiplied
# by 5.

def multiply(a, m):
    for i in range (len(a)):
        a[i] *= m
    print a

multiply([2,4,10,16], 5)
