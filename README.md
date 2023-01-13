# calendary
Module to work easily with calendars in JS

## Installation
This module is available through [NPM](https://www.npmjs.com/).

To install this library, you just need to run:
```bash
npm i calendary
```

## Usage
Create an instance of Calendar:
```js
const Calendar = require('calendary');

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

## License
MIT
