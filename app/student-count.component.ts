import { Component, Input } from "@angular/core";

@Component({
    selector: 'student-count',
    templateUrl: './app/student-count.component.html'
})

export class StudentCountComponent {

    //here we have decorated varibles using @Input directive means that thease
    //variables ll get data from parent component in our case
    //it is from student-list.component
    @Input()
    totalStudentsCount: any;

    @Input()
    maleStudentsCount: any;

    @Input()
    femaleStudentsCount: any;

    //this variable is use to select the All Radio button by default
    selectedRadioButton: any = "All";

}