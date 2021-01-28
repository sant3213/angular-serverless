import { ChangeDetectorRef, Component } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { SigninService } from './signin.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amplify-angular-auth';
  user: CognitoUserInterface | undefined;
  authState?: AuthState;

  formFields = [
    {
      type: "email",
      label: "Custom email Label",
      placeholder: "custom email placeholder",
      required: true,
    },
    {
      type: "password",
      label: "Custom Password Label",
      placeholder: "custom password placeholder",
      required: true,
    },
    {
      type: "phone_number",
      label: "Custom Phone Label",
      placeholder: "custom Phone placeholder",
      required: false,
    }
  ];
  constructor(private ref: ChangeDetectorRef, private service:SigninService) {}

  ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    })
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
}

logout(){
    this.service.logout();
}
}