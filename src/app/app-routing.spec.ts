import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth.guard';

describe('AppRoutingModule', () => {
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]), // Configura el módulo de pruebas de rutas
        AppRoutingModule  // Importa el módulo de rutas de la aplicación
      ],
      declarations: [
        AppComponent // Declara el componente principal de la aplicación
      ],
      providers: [
        AuthGuard // Proveedor de AuthGuard
      ]
    }).compileComponents(); // Compila los componentes declarados

    router = TestBed.inject(Router); // Inyecta el servicio de rutas
    location = TestBed.inject(Location); // Inyecta el servicio de ubicación
    router.initialNavigation(); // Inicializa la navegación del enrutador
  });

  it('should redirect to /login when navigating to the root route', fakeAsync(() => {
    router.navigate(['']); // Navega a la ruta raíz
    tick(); // Avanza el temporizador simulado
    expect(location.path()).toBe('/login'); // Verifica que la ubicación actual sea '/login'
  }));
});
