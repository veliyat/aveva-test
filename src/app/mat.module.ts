import { NgModule } from '@angular/core';
import { MatSnackBarModule , MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule } from '@angular/material';

@NgModule({
    imports: [MatSnackBarModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule],
    exports: [MatSnackBarModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule]
})
export class MatModule {}