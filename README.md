# neutronium vue result command binding
<p align="center"><img width="100"src="https://raw.githubusercontent.com/NeutroniumCore/neutronium-vue/master/template/src/assets/logo.png"></p>
Mixin to integrate MVVM IResultCommand with vue

[![Npm version](https://img.shields.io/npm/v/neutronium-vue-resultcommand-topromise.svg?maxAge=2592000)](https://www.npmjs.com/package/neutronium-vue-resultcommand-topromise)
[![MIT License](https://img.shields.io/github/license/NeutroniumCore/neutronium-vue-resultcommand-topromise.svg)](https://github.com/NeutroniumCore/neutronium-vue-resultcommand-topromise/blob/master/LICENSE)
[![Npm version](https://img.shields.io/npm/v/neutronium-vue-resultcommand-topromise.svg?maxAge=2592000)](https://www.npmjs.com/package/neutronium-vue-result-command-topromise)


## Usage
Provide mixin to easily integrate IResultCommand in vue.js using [Neutronium](https://github.com/NeutroniumCore/Neutronium).
Component this mixin exposes:

## Function
### `topromise`

## Example
 
 To bind to C# ResultCommand property:
 ```CSharp
 public class ViewModel
 {
     public IResultCommand ResultCommand {get;} 
     
     public ViewModel()
     {
         ResultCommand = RelayResultCommand.Create<string, int>(Count);
     }

     private int? Count(string routeName)
     {
        return routeName?.Lenght.
     }
 }
 ```
 
 Do on javascript side:
```javascript
import {toPromise} from 'neutronium-vue-resultcommand-topromise'

const promise = toPromise(viewModel.ResultCommand, 'countLetterNumber');
promise.then((ok)=>{
     //Ok code
 }, (error) =>{
 //Error handling
})
```

### Installation
- Available through:
``` js
 npm install neutronium-vue-resultcommand-topromise --save
```
