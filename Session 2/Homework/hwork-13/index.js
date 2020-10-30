x = prompt('How many polygons');
    for (n = 1; n <= x; n++) {
        number = n + 2;
        y = 180 - ((number - 2) * 180 / number);
        for (i = 1; i <= number; i++) {
            fd(50)
            rt(y)
        }
    }