# TextMarker

> Angular simple text marker with customize style

## Install

 > $ npm i text-marker

## Usage
``` html
<jk-text-marker [inputQuery]="searchtext" [styleClass]="styleclassname">
  your text here...
<jk-text-marker>
```
``` ts 
@Component({
    selector: 'app-selector',
    template: 'app-selector.html',
    styles: ['app-selector.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class appcomponent{}
```

``` html
inputQuery => user search query.
styleClass => your custome styleclass name.
```

Eg:
``` scss
.customeStyle {
  background-color: yellow
  color: white;
  font-family: sans-serif;
  font-weight: 700
}
```

## Test

 > $ ng test text-marker

## Author

JayaSurya
