import { ValidatorFn, AbstractControl, Validators, Validator, FormControl, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input, OnInit } from '@angular/core';

// Validation Function
function validateAssigneeFromTeamMemberList(listOfAssigne: any[], currentUser: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const assigneeToCheck = control.value;
    if (isPresent(Validators.required(control))) {
      return null;
    }
    if (listOfAssigne.some(assignee => assignee.FullName === assigneeToCheck)) {
      return null;
    } else if (currentUser === assigneeToCheck) {
      return null;
    } else {
      return  {
        assigneeName : {valid: false}
      };
    }
  };
}

// Check for required fields
function isPresent(obj: any) {
  return obj !== undefined && obj !== null;
}

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[assigneeName][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: AssigneeNameValidator, multi: true }
  ]
})
export class AssigneeNameValidator implements Validator, OnInit {
  validator: ValidatorFn;
  // tslint:disable-next-line: no-input-rename
  @Input ('assigneeName') assigneeNameObject: any;
  constructor() {}
  ngOnInit() {
    const loggedInUser = this.assigneeNameObject.currentUser;
    const assineeList = this.assigneeNameObject.otherAssignee;
    const assineeFullNameList = assineeList.map(assignee => {
      assignee.FullName = assignee.first_name.concat(' ', assignee.last_name);
      return assignee;
    });
    console.log('Assinee FullName List: ', assineeFullNameList);
    this.validator = validateAssigneeFromTeamMemberList(assineeFullNameList, loggedInUser);
  }
  validate(control: AbstractControl) {
    return this.validator(control);
  }
}
