var problems = [];

exports.runProblem = function(req, res){
  var id = +(req.params.id);
  if(id > 0 && problems.length >= id){
    problems[id - 1](req, res);
  }
}

problems[0] = function(req, res){
  var answer = 0;

  (function(){
    var limit = 1000;
    var sum = 0;
    for(var i = 1; i < limit; i++){
      if((i % 5 == 0) || (i % 3 == 0)){
        sum += i;
      }
    }

    answer = sum;
  })();

  res.render('answer', {
    problem: 0,
    answer: answer
  });
};
problems[1] = function (req, res) {
  var answer = 0;

  (function () {
    var sum = 0;
    var limit = 4000000;
    var numbers = [1,1];
    var currentIndex = 1;
    while(numbers[currentIndex] < limit){
      var number = numbers[currentIndex] + numbers[currentIndex - 1];
      if(number % 2 == 0)
        sum += number;
      numbers.push(number);
      currentIndex++;
    }
    answer = sum;
  })();

  res.render('answer', {
    problem: 1,
    answer: answer
  });
};
problems[2] = function (req, res) {
  var answer = 0;

  (function () {
    var number = 600851475143;
    var dividers = [];
    var primeDividers = [];
    var primes = [];
    for(var i = 2; i < Math.sqrt(number); i++){
      if(number % i == 0)
        dividers.push(i);
    }

    for(var n in dividers){
      var divider = dividers[n];
      var isPrime = true;

      var sqrt = Math.sqrt(divider);
      for(i = 2; i < sqrt; i++){
        if(divider % i == 0){
          isPrime = false;
          break;
        }
      }

      if(isPrime){
        primeDividers.push(divider);
      }
    }

    answer = primeDividers;
  })();

  res.render('answer', {
    problem: 2,
    answer: answer
  });
};
problems[3] = function (req, res) {
  var answer = 0;

  (function () {
    String.prototype.isPalindrom = function(){
      for(var i = 0; i < this.length / 2; i++){
        if(this[i] != this[this.length - (i + 1)])
          return false;
      }
      return true;
    };
    var limit = 999;
    var largest = [0,0,0];
    for(var i = 1; i <= limit; i++){
      for(var j = 1; j <= limit; j++){
        var product = i * j;
        var s = product.toString();
        if(!s.isPalindrom())
          continue;
        if(product > largest[0]){
          largest[0] = product;
          largest[1] = i;
          largest[2] = j;
        }
      }
    }
    answer = largest;
  })();

  res.render('answer', {
    problem: 3,
    answer: answer
  });
};
problems[4] = function (req, res) {
  var answer = 0;

  (function () {

    // 5*4*3 = 60
    // 5*2*2*3 = 60

    // 6*10 = 60
    // 6*5*2 = 60
    // 2*3*5*2 = 60

    // 7*6*5*2 = 420
    // 7*3*2*5*2 = 420
    // 5*2*2*3*7*3*2 = 2520

    function findPrimes(limit){
      var primes = [];
      for(var i = 2; i <= limit; i++){
        var isPrime = true;
        for(var j = 2; j <= Math.sqrt(i); j++){
          if(i % j == 0){
            isPrime = false;
            break;
          }
        }
        if(isPrime)
          primes.push(i);
      }
      return primes;
    }
    var limit = 20;
    var primes = findPrimes(limit);
    var match = [];
    var current = 1;
    var value = current;
    var i = 2;
    while(i <= limit){
      if(value % i == 0){
        current = value;
        i++;
        continue;
      }
      value = value + current;
    }
    answer = value;
  })();

  res.render('answer', {
    problem: 4,
    answer: answer
  });
};
