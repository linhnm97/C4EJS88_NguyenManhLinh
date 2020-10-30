number = prompt('Enter number of edges');
y = 180 - ((number - 2) * 180 / number);
for (i = 1; i <= number; i++) {
        fd(60)
        rt(y)
    }