import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[myIf]'
})
export class StructuralDirective implements OnInit {
    private show = false;
    // @Input() myIf: boolean = false;
    @Input() myIfElse!: TemplateRef<any>;
    @Input() set myIf(value: any){
        console.log(typeof value, ' :', value);
        this.show = value;
        this.viewContainerRef.clear();
        if(value){
            this.viewContainerRef.createEmbeddedView(this.tempRef)
        }
        else if(this.myIfElse){
            console.log('else', this.myIfElse)
            this.viewContainerRef.createEmbeddedView(this.myIfElse)
        }
    }
    
    constructor(
        private tempRef: TemplateRef<any>, 
        private viewContainerRef: ViewContainerRef
    ) { }

    ngOnInit() {
        // console.log(typeof this.myIf)
        this.viewContainerRef.clear()
        if(this.show){
            this.viewContainerRef.createEmbeddedView(this.tempRef);
        }
        else if(this.myIfElse){
            // this.viewContainerRef.clear(); //only if stmt
            this.viewContainerRef.createEmbeddedView(this.myIfElse) //if -else stmt
        }
    }

    // whenever myIf value changes -ng Onchanges will execute
    // ngOnChanges(changes: SimpleChanges): void {
    //     // console.log(changes);
    //     this.show = changes.myIf.currentValue;
    //     if(this.show){
    //         this.viewContainerRef.createEmbeddedView(this.tempRef);
    //     }
    //     else{
    //         this.viewContainerRef.clear();
    //     }
    // }

}