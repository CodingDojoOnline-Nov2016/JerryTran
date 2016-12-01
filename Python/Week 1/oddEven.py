# Create a function that counts from 1 to 2000. As it loops through each number,
# have your program generate the number and specify whether it's an odd or
# even number.

'''def oddEven():
    for num in range(1,2000+1):
        if num % 2 != 0:
            print "Number is", num, ". This is an odd number."
        elif num % 2 == 0:
            print "Number is", num, ". This is an even number."
oddEven()'''

def oddEven2(start,end):
    for num in range(start,end):
        if num % 2 != 0:
            var = "odd"
        elif num % 2 == 0:
            var = "even"
        print "Number is {}. This is an {} number.".format(num, var)

oddEven2(1,20)
