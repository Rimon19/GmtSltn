import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styles: []
})

export class CheckboxComponent {

  master_checked: boolean = false;
  master_indeterminate: boolean = false;
  checkbox_list = [];

  constructor() {
    this.checkbox_list = [
      {
        name: "HTML/CSS",
        disabled: false,
        checked: false,
        labelPosition: "after"
      }, {
        name: "JavaScript/jQuery",
        disabled: false,
        checked: false,
        labelPosition: "after"
      }, {
        name: "CSS Preprocessing",
        disabled: false,
        checked: false,
        labelPosition: "after"
      }, {
        name: "Version Control/Git",
        disabled: false,
        checked: false,
        labelPosition: "after"
      }, {
        name: "Responsive Design",
        disabled: false,
        checked: false,
        labelPosition: "after"
      }, {
        name: "Testing/Debugging",
        disabled: false,
        checked: false,
        labelPosition: "after"
      }, {
        name: "Browser Developer Tools",
        disabled: false,
        checked: false,
        labelPosition: "after"
      },
    ]
  }

  master_change() {
    for (let value of (<any>Object).values(this.checkbox_list)) {
      value.checked = this.master_checked;
    }
  }

  list_change() {
    let checked_count = 0;
    //Get total checked items
    for (let value of (<any>Object).values(this.checkbox_list)) {
      if (value.checked)
        checked_count++;
    }

    if (checked_count > 0 && checked_count < this.checkbox_list.length) {
      // If some checkboxes are checked but not all; then set Indeterminate state of the master to true.
      this.master_indeterminate = true;
    } else if (checked_count == this.checkbox_list.length) {
      //If checked count is equal to total items; then check the master checkbox and also set Indeterminate state to false.
      this.master_indeterminate = false;
      this.master_checked = true;
    } else {
      //If none of the checkboxes in the list is checked then uncheck master also set Indeterminate to false.
      this.master_indeterminate = false;
      this.master_checked = false;
    }
  }
}
