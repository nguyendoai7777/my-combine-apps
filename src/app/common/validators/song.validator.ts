import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const minutesValidator: ValidatorFn = (ctrl: AbstractControl): ValidationErrors | null => {
  return ctrl.value.length === 0 || !/^[0-9]*$/.test(ctrl.value) ? null : !(+ctrl.value <= 60 && +ctrl.value > 0) ? { minute: 'Minute must be from 1 to 60' } : null;
};
