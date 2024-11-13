import { Component,inject,ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog,MatDialogActions,MatDialogClose,MatDialogContent,MatDialogTitle}from '@angular/material/dialog';
import { FormControl,FormGroup,FormArray } from '@angular/forms';

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'registerdialog.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogElementsExampleDialog {
  refreshpage(){
    window.location.reload();
  }
}


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatInputModule,ReactiveFormsModule,MatButtonModule],
  templateUrl:'./register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  formbuilder=inject(FormBuilder);
  authService=inject(AuthService);
  router=inject(Router);
  registerForm=this.formbuilder.group({
    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.minLength(5)]]
  })
  readonly dialog = inject(MatDialog);
  register(){
    let value=this.registerForm.value;
    this.authService.register(value.name!,value.email!,value.password!).subscribe((result)=>{
      
    this.dialog.open(DialogElementsExampleDialog);
  
    })
  }




  
}
