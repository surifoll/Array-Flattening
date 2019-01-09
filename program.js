//http://opensas.wordpress.com/2013/06/23/sharing-you-javascript-ninja-secrets-run-your-jasmine-tests-on-jsfiddle/
function flatten(myArr) {

  var temp = [];

  function recursiveFlatten(myArr) { 
   if(myArr === null || typeof(myArr) === 'string'){
       return temp;
    }
    for(var i = 0; i < myArr.length; i++) {
      if(Array.isArray(myArr[i])) {
        recursiveFlatten(myArr[i]);
      } else {
        temp.push(myArr[i]);
      }
    }
  }
  recursiveFlatten(myArr);
  return temp;
}

var myArr = [1,9, [2, [3, [4, [5,9]]]]];
console.log(flatten(myArr));

//=========================Test===============================
//=========================Test===============================
//=========================Test===============================
//=========================Test===============================

describe("running falt array test", function(){
    it("should run test", function(){
        expect(flatten(myArr)).toEqual([1, 9, 2, 3, 4, 5, 9 ]);
    });
});
 

describe("running flatten  array test", function(){
    it("should run test for iteger value", function(){
        expect(flatten(1)).toEqual([]);
    });
});

describe("running flatten  array test", function(){
    it("should run test for empty string", function(){
        expect(flatten("")).toEqual([]);
    });
});

describe("running flatten  array test", function(){
    it("should run test for null value", function(){
        expect(flatten(null)).toEqual([]);
    });
});

describe("running flatten  array test", function(){
    it("should run tests for string", function(){
        expect(flatten("ade")).toEqual([]);
    });
});
// load jasmine htmlReporter
(function() {
  var env = jasmine.getEnv();
  env.addReporter(new jasmine.HtmlReporter());
  env.execute();
}());
