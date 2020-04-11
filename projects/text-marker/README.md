# TextMarker

> Angular simple text marker with customize style

## Install

 > $ npm i text-marker

## Usage
HTML
``` html
<jk-text-marker [inputQuery]="searchtext" [styleClass]="styleclassname">
  your text here...
<jk-text-marker>
```
``` html
inputQuery => user search query.
styleClass => your custome styleclass name.
```
TS
``` ts 
@Component({
    selector: 'app-selector',
    template: 'app-selector.html',
    styles: ['app-selector.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class appcomponent{}
```
Note: You must need to add encapsulation in component decorator. Moreinfo checkout https://blog.thoughtram.io/angular/2015/06/29/shadow-dom-strategies-in-angular2.html

SCSS
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
