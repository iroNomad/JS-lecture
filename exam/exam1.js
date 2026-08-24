
// 1.
function checkAdult(age) {
    if (age >= 19) {
        console.log("성인입니다.");
    } else {
        console.log("미성년자입니다.");
    }
}
checkAdult(18);

// 2.
function sum(start, end) {
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }
    console.log(sum);
}
sum(5, 20);

//3.
function gugudan(dan) {
    for (let i = 1; i <= 9; i++) {
        let result = dan * i;

        if (result % 2 === 0) {
            console.log(dan + " x " + i + " = " + result + " (짝수)");
        } else {
            console.log(dan + " x " + i + " = " + result + " (홀수)");
        }
    }
}
gugudan(5);

//4.
function gradePrint(korean, english, math) {
    let total = korean + english + math;
    let average = total / 3;
    gradeCalc(average)
}
function gradeCalc(average) {
    let grade;
    if (average >= 90) {
        grade = "A";
    } else if (average >= 80) {
        grade = "B";
    } else if (average >= 70) {
        grade = "C";
    } else {
        grade = "F";
    }
    console.log("평균 점수: " + average);
    console.log("학점: " + grade);
}
gradePrint(70, 70, 70);

//5.

function isPrime(num) {
    if (num < 2) {
        return false;
    } else {
        for (let divisor = 2; divisor < num; divisor++) {
            if (num % divisor === 0) {
                return false;
            }
        }
    }
    return true;
}

function primeCount(min, max) {
    let primeCount = 0;

    for (let num = min; num <= max; num++) {
        if (isPrime(num)) {
            primeCount++;
            console.log(num + "은(는) 소수입니다.");
        }
    }
    console.log("소수 개수: " + primeCount);
}

primeCount(1, 20);