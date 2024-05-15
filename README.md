jQuery Function Wrapper
==============

Copyright 2012, Ricki Runge (ricki@ricki.dk)

Dual licensed under the MIT or GPL licenses.

http://www.opensource.org/licenses/mit-license.php

http://www.gnu.org/licenses/gpl.html

# Usage
 
**orgFn**: original function to wrap

**fn**: function that wraps the original function. Signature for the function may be "function(orgFn[, arg1, arg2, ...])"

**context** (optional): If you want the method to be executed in a special context (context will be availabe as "this"). If null/undefined the global object is used (usaly window)


# Example of use
```
window.myFunc = $.wrapper(window.myFunc, function(org_myFunc, myArg1, myArg2, myArg3) { 
    console.log("before myFunc");
    var myResult = org_myFunc(myArg1, myArg2, myArg3);
    console.log("after myFunc");
    return myResult;
});
```
