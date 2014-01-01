jsPrelude
=========

Learn Haskell building Prelude functions for javascript

```var hs = require('../src/prelude');```

functions (see spec for usage):

* min
* max
* head
* listCon (1:2:3:[])
* listCat ([1,2] ++ [3,4])
* listItem ([1,2,3] !! 2)
* last
* init
* tail
* sum
* maximum
* TODO: minimum
* map
* filter
* Helper functions for filter
  * gt (>)
  * lt (<)
  * ge (>=)
  * le (<=)
* take
* drop
* non-standard functions
  * rotate - rotate items in an array
  * sudoku - build SuDoKu template
