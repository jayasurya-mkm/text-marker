import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
    selector: 'jk-text-marker',
    template: `
    <div #content [hidden]="true">
        <ng-content></ng-content>
    </div>
    <div [innerHTML]="innerHtmlContent"></div>
  `,
    styles: []
})
export class TextMarkerComponent implements OnInit {

    @ViewChild('content', null) content: ElementRef;
    @Input() styleClass: string;
    @Input() set inputQuery(value) {
        console.log(value);
        this.innerHtmlContent = this.originalContent;
        this.innerHtmlContent = value ? this.innerHtmlContent && this.innerHtmlContent.replace(new RegExp(value, 'g'),
            `<span class="${this.styleClass}">${value}</span>`) : this.innerHtmlContent;
    }

    innerHtmlContent: string;
    originalContent: string;

    constructor() { }

    ngOnInit() {
        this.innerHtmlContent = this.originalContent = this.content ? this.content.nativeElement.textContent : '';
    }
}
