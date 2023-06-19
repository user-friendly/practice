<?php

interface AdvancedArithmetic {

  public function divisorSum($n);
}

/*
 * Write your code here
 */
class Calculator implements AdvancedArithmetic {
  function divisorSum($n) {
    if ($n == 1) {
      return 1;
    }
    
    // TODO Storing the numbers in an array is really not needed.
    // Include the obvious special cases: 1 and N.
    $divs = [1, $n];
    
    // We can eliminate all x > N/2.
    
    // Try each number, counting down from the middle.
    // Whatever the round direction is, it should not matter for odd numbers.
    // There should be a reminder in either case.
    for ($x = (int) ($n/2); $x > 1; $x--) {
      if ($n % $x == 0) {
        $divs[] = $x;
      }
    }
    
    return array_sum($divs);
  }
}

while ($line = fgets(STDIN)) {
  $n = intval($line);
  $myCalculator = new Calculator();
  if ($myCalculator instanceof AdvancedArithmetic) // checking if Calculator has implemented AdvancedArithemtic
  {
    $sum = $myCalculator->divisorSum($n);
    echo "I implemented: AdvancedArithmetic\n" . $sum;
  }
  else {
    echo "Wrong answer"; // You will get this output if you dont implement
  }
  echo "\n";
}
