// Haskell Prelude functions for javascript

(function () {
  "use strict";
  function hsMin (val1, val2) {
    return (val1 < val2 ? val1 : val2);
  }

  function hsMax (val1, val2) {
    return (val1 > val2 ? val1 : val2);
  }

  function hsListCon () {
    var arr2 = [],
      i = 0,
      j = 0;
    while (i < arguments.length - 1) {
      arr2.push(arguments[i]);
      i += 1;
    }
    while (j < arguments[i].length) {
      arr2.push(arguments[i][j]);
      j += 1;
    }
    return arr2;
  }

  function hsListCat (arr1, arr2) {
    var arr3 = [];
    for (var i = 0; i < 2; i += 1) {
      for (var j = 0; j < arguments[i].length; j += 1) {
        arr3.push(arguments[i][j]);
      }
    }
    return arr3;
  }

  function hsListItem (arr, n) {
    return arr[n];
  }

  function hsHead (arr) {
    return arr[0];
  }

  function hsLast (arr) {
    return arr.slice(-1)[0];
  }

  function hsInit (arr) {
    return arr.slice(0,-1);
  }

  function hsTail (arr) {
    return arr.slice(1);
  }

  function hsLength (arr) {
    return arr.length;
  }

  function hsSum (arr) {
    var tot = 0;
    for (var i = 0; i < arr.length; i += 1) {
      tot += arr[i];
    }
    return tot;
  }

  function hsMaximum (arr) {
    return (hsLength(arr) === 1 ? hsHead(arr) : hsMax(hsHead(arr), hsMaximum(hsTail(arr))));
  }

  function hsMinimum (arr) {
    return (hsLength(arr) === 1 ? hsHead(arr) : hsMin(hsHead(arr), hsMinimum(hsTail(arr))));
  }

  function hsReverse (arr) {
    return arr.reverse();
  }

  function hsMap() {
    var f = arguments[0],
      arr = arguments[arguments.length - 1],
      args = [],
      arr2 = [],
      i;
    for (i = 1; i < arguments.length; i += 1) {
      args.push(arguments[i]);
    }
    for (i = 0; i < arr.length; i += 1) {
      args[args.length - 1] = arr[i];
      arr2.push(f.apply(this, args));
    }
    return arr2;
  }

  function hsFilter(f) {
    var arr = arguments[arguments.length-1],
      arr2 = [],
      args = [],
      i,
      j;
    for (i = 1; i < arguments.length; i += 1) {
      args.push(arguments[i]);
    }
    j = args.length - 1;
    for (i = 0; i < arr.length; i += 1) {
      args[j] = arr[i];
      if (f.apply(this, args)) arr2.push(arr[i]);
    }
    return arr2;
  }

  function hsGt(x, y) {
    return y > x;
  }

  function hsLt(x, y) {
    return y < x;
  }

  function hsGe(x, y) {
    return y >= x;
  }

  function hsLe(x, y) {
    return y <= x;
  }

  function hsTake(n, arr) {
    return arr.slice(0, n);
  }

  function hsDrop(n, arr) {
    return arr.slice(n);
  }

  function rotate(arr, n) {
    return hsListCat(hsDrop(n, arr), hsTake(n, arr));
  }

  exports.min = hsMin;
  exports.max = hsMax;
  exports.listCon = hsListCon;
  exports.listCat = hsListCat;
  exports.listItem = hsListItem;
  exports.head = hsHead;
  exports.last = hsLast;
  exports.init = hsInit;
  exports.tail = hsTail;
  exports.length = hsLength;
  exports.sum = hsSum;
  exports.maximum = hsMaximum;
  exports.minimum = hsMinimum;
  exports.reverse = hsReverse;
  exports.map = hsMap;
  exports.filter = hsFilter;
  exports.gt = hsGt;
  exports.lt = hsLt;
  exports.ge = hsGe;
  exports.le = hsLe;
  exports.take = hsTake;
  exports.drop = hsDrop;
  exports.rotate = rotate;
}());
