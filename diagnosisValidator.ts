import { AbstractControl } from '@angular/forms';

export function DiagnosisValidator(control: AbstractControl) {
    if (control.value.startsWith('broken') && (control.value.includes('arm') || control.value.includes('leg') || control.value.includes('neck'))) {
        return { invalidDiagnosis: false };
    }
    if (control.value.startsWith('pain') && (control.value.includes('stomach') || control.value.includes('neck'))) {
        return { invalidDiagnosis: false };
    }
    return { invalidDiagnosis: true };
}


