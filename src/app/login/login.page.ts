import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  credentials: any = {
    username  : null,
    password  : null
  }

  constructor(
    private router: Router,
    private toastController: ToastController,
    private authService: AuthService
  ) { }

  ngOnInit() {}

  login() {
    console.log(this.credentials);
 
    if (this.credentials.username == 'test' && this.credentials.password == 'test') {
      this.presentToast("¡Bienvenido!");
      const token = 'your-generated-token';
      this.authService.login(token);
      this.router.navigate(["/home"])
    }
    else {
      this.presentToast("Credenciales no son correctas");
    }
  }

  async presentToast(message:string, duration?:number) {
   const toast = await this.toastController.create(
    {
      message: message,
      duration: duration ? duration:2000
    }
  );
  toast.present(); 
  }
}