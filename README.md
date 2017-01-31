# @stayradiated/react-floating-label
> Floating label input.

Checkout the [DEMO](http://code-kotis.github.io/react-floating-label/)

__Install it:__

```sh
npm install --save @stayradiated/react-floating-label
```

__Usage:__

```js
var FloatingLabel = require('@stayradiated/react-floating-label');

<FloatingLabel
	errorMsg='Full name can contain only the alphabets and space'
	pattern={/^[a-z\s]+$/i}/>

```

__Props:__


```js
autoComplete: PropTypes.bool,
errorMsg: PropTypes.string,
placeholder: PropTypes.string.isRequired,
pattern: PropTypes.any,
type: PropTypes.string.isRequired,
id: PropTypes.string.isRequired,
isDisabled: PropTypes.bool
```

__License:__

MIT

