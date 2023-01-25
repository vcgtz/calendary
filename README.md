# calendary
Module to work easily with calendars in JS.


![Node.js Workflow](https://github.com/vcgtz/calendary/actions/workflows/node.js.yml/badge.svg)

## Installation
This module is available through [NPM](https://www.npmjs.com/).

To install this library, you just need to run:
```bash
npm i calendary
```

## Usage
Create an instance of Calendar:
```js
const { Calendar } = require('calendary');

const calendar = new Calendar(2023);
```

Then you can access to an array of months with:
```js
calendar.getMonths();
```

And every month has access to an array of days:
```js
const firstMonth = calendar.getMonths()[0];

firstMonth.getDays();
```

You can get a simple representation of a month using the `print()` method from a month object:
```js
const { Calendar } = require('calendary');
const calendar = new Calendar(2023);
const march = calendar.getMonths()[2];

march.print();
```

Which will print:
```text
March, 2023
          1  2  3  4
 5  6  7  8  9 10 11
12 13 14 15 16 17 18
19 20 21 22 23 24 25
26 27 28 29 30 31
```


### Array representation
You can get an array representation of the calendar using:
```js
const calendarArr = calendar.toArray();
```

Which will return a multi-dimensional array like this:
```text
[
  Month[], Month[], Month[],
  Month[], Month[], Month[],
  Month[], Month[], Month[],
  Month[], Month[], Month[]
]
```

Where each `Month[]` looks like:
```text
[
  [ Day{}, Day{}, Day{}, Day{}, Day{}, Day{}, Day{} ], // Each array represents a week
  [ Day{}, Day{}, Day{}, Day{}, Day{}, Day{}, Day{} ],
  [ Day{}, Day{}, Day{}, Day{}, Day{}, Day{}, Day{} ],
  [ Day{}, Day{}, Day{}, Day{}, Day{}, Day{}, Day{} ],
  [ Day{}, Day{}, Day{},  null,  null,  null,  null ],
]
```

With this, you can iterate over each month and each week to print the calendar as you need.

Also, you can get the week representation from a single month:
```js
const { Calendar } = new Calendar(2023);
const january = calendar.getMonths()[0];

const janWeeks = january.getWeeks();
```

## License
[MIT](https://github.com/vcgtz/calendary/blob/main/LICENSE)
