# sentence-validator
sentence-validator



## About

The motivation with this module is to provide a sentence validation on string which can help to verify if entered string is garbage value or not.

## Getting Started

Install SuperTest as an npm module and save it to your package.json file as a development dependency:

```bash
npm i sentence-validator
```

  Once installed it can now be referenced by simply calling ```require('sentence-validator');```

## Example

Here is an example.

```js

const sentenceValidator =  require('sentence-validator')


console.log( sentenceValidator("How are you"))
//true

console.log( sentenceValidator("asf asdasdfk asdflkja"))  // garbage value
//false
```

## License

ISC

