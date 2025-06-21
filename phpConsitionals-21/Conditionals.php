<?php
// Grade Checker


echo "<h2>1. Grade Checker</h2>";

$marks = 85; 

// Using if-else
echo "<h3>Using if-else:</h3>";
if ($marks >= 90 && $marks <= 100) {
    echo "Grade: A<br>";
} elseif ($marks >= 80 && $marks <= 89) {
    echo "Grade: B<br>";
} elseif ($marks >= 70 && $marks <= 79) {
    echo "Grade: C<br>";
} else {
    echo "Grade: Fail<br>";
}

// Using switch
echo "<h3>Using switch (rounded to nearest 10):</h3>";
$roundedMarks = floor($marks / 10) * 10;

switch ($roundedMarks) {
    case 90:
    case 100:
        echo "Grade: A<br>";
        break;
    case 80:
        echo "Grade: B<br>";
        break;
    case 70:
        echo "Grade: C<br>";
        break;
    default:
        echo "Grade: Fail<br>";
        break;
}

// Loop Practice

echo "<h2>2. Loop Practice</h2>";

// loop 1 to 10
echo "<h3>Numbers from 1 to 10 (for loop):</h3>";
for ($i = 1; $i <= 10; $i++) {
    echo "$i ";
}

echo "<br><br>";

// even numbers from 1 to 20
echo "<h3>Even numbers from 1 to 20 (while loop):</h3>";
$j = 1;
while ($j <= 20) {
    if ($j % 2 == 0) {
        echo "$j ";
    }
    $j++;
}

echo "<br><br>";

// PHP Function

echo "<h2>3. Square Function</h2>";

function square($num) {
    return $num * $num;
}

$num1 = 4;
$num2 = 7;

echo "Square of $num1 is: " . square($num1) . "<br>";
echo "Square of $num2 is: " . square($num2) . "<br>";

?>
