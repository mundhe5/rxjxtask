import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Istudent } from '../../model/student.interface';
import { UuidService } from '../../services/uuid.service';
import { StudentService } from '../../services/student.service';
import { CustomRegex } from '../../const/validators';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  studentform!:FormGroup
  iseditstudent:boolean=false
  studentinfo!:Istudent
  constructor(private _uuidservice:UuidService,
    private _studentservice:StudentService
  ) { }

  ngOnInit(): void {

   this.createformforstudent()
   this._studentservice.studentsubject$
          .subscribe(res=>{
            if(res){
              this.studentinfo=res
              this.iseditstudent=true
              this.studentform.patchValue(res)
            }
          })
  }

  createformforstudent(){
    this.studentform=new FormGroup({
      fname:new FormControl(null,[Validators.required,Validators.pattern(CustomRegex.onlyText)]),
      lname:new FormControl(null,[Validators.required,Validators.pattern(CustomRegex.onlyText)]),
      email:new FormControl(null,[Validators.required,Validators.pattern(CustomRegex.email)]),
      contact:new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)])
    })
  }


  onsubmit(){
        if(this.studentform.valid){
          let stdobj:Istudent={
            ...this.studentform.value,
            stdid:this._uuidservice.genrateuuid()
          }

          console.log(stdobj)
          this._studentservice.studentadded(stdobj)
          this.studentform.reset()
        }
  }
  onupdatestdin(){
    if(this.studentform.valid){
      let updatestd:Istudent={
            ...this.studentform.value,
            stdid:this.studentinfo.stdid
      }

      console.log(updatestd)
      this._studentservice.updatestudentinfo(updatestd)
      this.studentform.reset()
      this.iseditstudent=false
    }
  }


}
