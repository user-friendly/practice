<?php


class Difference{
    
  private $elements = array();
    
  public $maximumDifference = -INF;

  public function __construct($elements) {
    $this->elements = $elements;
  }
  
  public function computeDifference() {
    for($i = 0; $i < count($this->elements)-1; $i++) {
      for($j = $i + 1; $j < count($this->elements); $j++) {
        $a = $this->elements[$i];
        $b = $this->elements[$j];
        if (abs($a - $b) > $this->maximumDifference) {
          $this->maximumDifference = abs($a - $b);
        }
      }
    }
  }

} //End of Difference class  
     








$N=intval(fgets(STDIN));
$a =array_map('intval', explode(' ', fgets(STDIN)));
$d=new Difference($a);
$d->ComputeDifference();
print ($d->maximumDifference);
