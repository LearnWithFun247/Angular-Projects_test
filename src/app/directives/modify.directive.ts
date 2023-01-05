import { Directive, ElementRef, HostListener,Input,HostBinding,Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appModify]',
})
export class ModifyDirective {
  @Input() appModify:string="";
  //1.toggle a class using @Hostbinding and making attribute changes using @HostListener-starts
  // @HostBinding('class.box1') toggle: boolean = false;
  // @HostListener('mouseenter') onMouseEnter() {
  //   // this.highlight('red');
  // }
  // @HostListener('mouseleave') onMouseLeave() {
  //   // this.highlight('green');
  // }

  
  // @HostListener('onmouseleave',[$event]) onMouse
// @HostListener('mouseover') onMouseOver() {
//   this.toggle = !this.toggle;
//   }
// highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;//handling user events
  // }
//1.toggle a class using @Hostbinding and making attribute changes using @HostListener-ends
//2.toggling bw two classes and using @Hostbinding and making attribute changes using @HostListener-starts
@HostBinding('class.span1') span1: boolean = true;
@HostBinding('class.span2') span2: boolean = false;
@HostBinding('style.backgroundColor') bgColor: string = 'yellow';
@HostListener('click')
onClick() {
this.span1 = !this.span1;
this.span2 = !this.span2;
}
@HostListener('mouseover')  
onMouseAction() {
this.bgColor = 'green';
}
@HostListener('mouseleave')
onMouseLeave() {
this.bgColor = 'brown';
}
//toggling bw two classes and using @Hostbinding and making attribute changes using @HostListener-ends
// 3.Accessing and changing the attributes of DOM elements-starts
@Output() action=new EventEmitter<any>();
@HostBinding('attr.maxlength') max:number=10;
@HostBinding('attr.minlength') min:number=3;
@HostListener('keyup', ['$event.target.value'])
onTyping(data: any) {
  console.log("event",event);
  
if (data.length < this.min) {
this.action.emit(`Enter atleast ${this.min} character`);
} else if (data.length >= this.min && data.length < this.max) {
this.action.emit('');
} else {
this.action.emit(`Reached max char limit of ${this.max} characters`);
}
}

  
  constructor(private el: ElementRef) {
    // el.nativeElement.style.color="red";   using ElementRef directy
    // el.nativeElement.innerHTML ="hamzah"
    // this.el.nativeElement.style.color=this.appModify;
   
  }
  
  
  
}
