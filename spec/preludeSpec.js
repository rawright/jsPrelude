var jsTester = require('../lib/jsTester').jsTester,
  options = {},
  describe = jsTester(options),
  hs = require('../src/prelude');

describe('min', function (it) {
  it('should return the minimum of two values', function (expect) {
    expect(hs.min(1, 2)).toBe(1);
    expect(hs.min(2, 1)).toBe(1);
    expect(hs.min(0.5, 0.2)).toBe(0.2);
    expect(hs.min(-0.5, 0.2)).toBe(-0.5);
    expect(hs.min('abc', 'abd')).toBe('abc');
  });
});

describe('max', function (it) {
  it('should return the maximum of two values', function (expect) {
    expect(hs.max(1, 2)).toBe(2);
    expect(hs.max(2, 1)).toBe(2);
    expect(hs.max(0.5, 0.2)).toBe(0.5);
    expect(hs.max(-0.5, 0.2)).toBe(0.2);
    expect(hs.max('abc', 'abd')).toBe('abd');
  });
});

describe('head', function (it) {
  it('should return the first item in a list', function (expect) {
    expect(hs.head([1,2,3,4,5])).toBe(1);
  });
});

describe('listCon', function (it) {
  it('should add args 0 - n-1 to list at arg n', function (expect) {
    expect(hs.listCon(1,2,3,[]).join()).toBe([1,2,3].join());
    expect(hs.listCon(1,2,3,[4,5]).join()).toBe([1,2,3,4,5].join());
  });
});

describe('listCat - ++', function (it) {
  it('should concatenate two lists', function (expect) {
    expect(hs.listCat([1,2,3],[4,5,6]).join()).toBe([1,2,3,4,5,6].join());
    expect(hs.listCat([],[]).join()).toBe([].join());
  });
});

describe('listItem - !!', function (it) {
  it('should return item n from a list', function (expect) {
    expect(hs.listItem([1,2,3,4,5], 1)).toBe(2);
  });
});

describe('last', function (it) {
  it('should return the last item in a list', function (expect) {
    expect(hs.last([1,2,3,4,5])).toBe(5);
  });
});

describe('init', function (it) {
  it('should return all but the last item in a list', function (expect) {
    expect(hs.init([1,2,3,4,5]).join()).toBe([1,2,3,4].join());
    expect(hs.init([1]).join()).toBe([].join());
  });
});

describe('tail', function (it) {
  it('should return all but the first item in a list', function (expect) {
    expect(hs.tail([1,2,3,4,5]).join()).toBe([2,3,4,5].join());
    expect(hs.tail([1]).join()).toBe([].join());
  });
});

describe('length', function (it) {
  it('should return the number of elements in a list', function (expect) {
    expect(hs.length([])).toBe(0);
  });
});

describe('sum', function (it) {
  it('should return the sum of members of an array', function (expect) {
    expect(hs.sum([1,2,3,4,5,6,7,8,9])).toBe(45);
    expect(hs.sum([])).toBe(0);
  });
});

describe('maximum', function (it) {
  it('should return the maximum value of an array', function (expect) {
    expect(hs.maximum([1,2,3,4,5,6,7,8,9])).toBe(9);
    expect(hs.maximum([9,8,7,6,5,4,3,2,1])).toBe(9);
  });
});

describe('minimum', function (it) {
  it('should return the minimum value of an array', function (expect) {
    expect(hs.minimum([1,2,3,4,5,6,7,8,9])).toBe(1);
    expect(hs.minimum([9,8,7,6,5,4,3,2,1])).toBe(1);
  });
});

describe('reverse', function (it) {
  it('should return an array with items in reverse order', function (expect) {
    expect(hs.reverse([1,2,3,4,5]).join()).toBe([5,4,3,2,1].join());
  });
});

describe('map', function (it) {
  var doubleIt = function (n) { return n + n; },
    squareIt = function (n) { return n * n; };
  it('should take a function and an array and return an array', function (expect) {
    expect(hs.map(doubleIt, [1,2,3,4]).join()).toBe([2,4,6,8].join());
    expect(hs.map(squareIt, [1,2,3,4]).join()).toBe([1,4,9,16].join());
  });
});

describe('filter', function (it) {
  it('should take a filter and an array and return a filtered array', function (expect) {
    var gt = function (x, y) { return y > x; },
      even = function (y) { return (y % 2 === 0); };
    expect(hs.filter(gt, 3, [1,2,3,4,5,6]).join()).toBe([4,5,6].join());
    expect(hs.filter(even, [1,2,3,4,5,6]).join()).toBe([2,4,6].join());
  });
});

describe('helper functions gt, lt, ge, le', function (it) {
  it('should return true if y > x in gt(x, y) else false', function (expect) {
    expect(hs.gt(1, 2)).toBe(true);
    expect(hs.gt(1, 1)).toBe(false);
    expect(hs.gt(2, 1)).toBe(false);
  });
  it('should return true if y < x in lt(x, y) else false', function (expect) {
    expect(hs.lt(1, 2)).toBe(false);
    expect(hs.lt(1, 1)).toBe(false);
    expect(hs.lt(2, 1)).toBe(true);
  });
  it('should return true if y >= x in ge(x, y) else false', function (expect) {
    expect(hs.ge(1, 2)).toBe(true);
    expect(hs.ge(1, 1)).toBe(true);
    expect(hs.ge(2, 1)).toBe(false);
  });
  it('should return true if y <= x in le(x, y) else false', function (expect) {
    expect(hs.le(1, 2)).toBe(false);
    expect(hs.le(1, 1)).toBe(true);
    expect(hs.le(2, 1)).toBe(true);
  });
});

describe('take', function (it) {
  it('should return the first n elements of the list', function (expect) {
    expect(hs.take(4, [1,2,3,4,5,6,7]).join()).toBe([1,2,3,4].join());
    expect(hs.take(4, [1,2,3]).join()).toBe([1,2,3].join());
  });
});

describe('drop', function (it) {
  it('should drop the first n elements from the list', function (expect) {
    expect(hs.drop(4, [1,2,3,4,5,6,7]).join()).toBe([5,6,7].join());
    expect(hs.drop(4, [1,2,3]).join()).toBe([].join());
  });
});

describe('rotate', function (it) {
  it('should rotate the members of an array by n places', function (expect) {
    expect(hs.rotate([1,2,3,4], 0).join()).toBe([1,2,3,4].join());
    expect(hs.rotate([1,2,3,4], 1).join()).toBe([2,3,4,1].join());
    expect(hs.rotate([1,2,3,4], 2).join()).toBe([3,4,1,2].join());
    expect(hs.rotate([1,2,3,4], 3).join()).toBe([4,1,2,3].join());
    expect(hs.rotate([1,2,3,4], 4).join()).toBe([1,2,3,4].join());
  });
});

describe('sudoku', function (it) {
  it('should produces a 2-dimensional array as a sudoku puzzle', function (expect) {
    console.log(hs.map(hs.rotate, [1,2,3,4,5,6,7,8,9], [0,3,6,1,4,7,2,5,8]));
  });
});

var passes = 0,
  fails = 0;
for (var i = 0; i < options.suites.length; i += 1) {
  for (var j = 0; j < options.suites[i].specs.length; j += 1) {
    passes += options.suites[i].specs[j].passes;
    fails += options.suites[i].specs[j].fails;
  }
}

console.log ('passed: ' + passes, 'failed: ' + fails);
