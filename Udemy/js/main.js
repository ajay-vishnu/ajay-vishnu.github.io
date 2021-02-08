var numbers = [3, 8, 7, 9, 6, 1, 12, 5, 14, 2, 19, 16, 18, 11, 10, 15, 13, 17, 20];

var numbers_sorted = numbers.sort(function(a, b){return a - b;});

var first_num = numbers_sorted[0];

for (let i = 0; i < numbers_sorted.length; i++) {
    if (first_num != numbers_sorted[i]) {
        console.log("The missing element is " + first_num + ".");
        break;
    }
    first_num++;
}