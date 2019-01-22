import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = {
  		 d: [{
  		    e: 'I am a string!',
  		    f: [{
  		    	g: [{
  		    	  h: [{
  		    	     i : 'So am I!',
  		    	     j :  false,
  		    	     k :  123,
  		    	     l :  'And I am the last!'
  		    	  }]
  		    	}]
  		    }]
  		 }]
  	}

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      a: [true],
      b: [1],
      c: [ 'I am a nested string!'],
      d: this.fb.array([])
    })

  }

  onSubmit() {
    alert(this.myForm.value);
  }

  addNewD() {
    let control = <FormArray>this.myForm.controls.d;
    control.push(
      this.fb.group({
  		  e: ['I am a string!'],
          f: this.fb.array([])
      })
    )
  }

  deleteD(index) {
    let control = <FormArray>this.myForm.controls.d;
    control.removeAt(index)
  }

  addNewF(control) {
    control.push(
      this.fb.group({
        g : this.fb.array([])
      }))
  }

  deleteF(control, index) {
    control.removeAt(index)
  }
 
 addNewG(control) {
    control.push(
      this.fb.group({
        h : this.fb.array([])
      }))
  }

  deleteG(control, index){
 	control.removeAt(index)
 }

  addNewH(control){
  	control.push(
  		this.fb.group({
  			i : ['So am I!'],
  			j : [false],
  			k : [123],
  			l : ['And I am the last!']
  		})
  	)
  }

  deleteH(control, index){
  	control.removeAt(index)
 }


 
}


