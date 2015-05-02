var sort = (function (){

  function Sort(array){
    var leftPart;
    var rightPart;
    var middle;

    if(array.length < 2){
      return array;
    }

    middle = Math.floor(array.length / 2);
    leftPart = array.slice(0, middle);
    rightPart = array.slice(middle, array.length + 1);

    return merge(Sort(leftPart), Sort(rightPart));
  };

  function merge(leftPart, rightPart){
    var result = [];

    while (leftPart.length && rightPart.length){
      if (leftPart[0] < rightPart[0]){
          result.push(leftPart.shift());
      } else {
          result.push(rightPart.shift());
      }
    }

    return result.concat(leftPart, rightPart);
  };

  return Sort;

})();