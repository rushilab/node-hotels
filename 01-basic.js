var a = 5;
var b = 10;

function func1(a,b) {return a + b;  }


function func2(a,b, func1) {
    console.log(" in func2");
result = func1(a,b);
    console.log("Result:", result);
}

func2(a,b, func1);