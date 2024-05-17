// para casos de SSR
import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class TestInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("------------------ INTERCEPTOR 2 -------------------")

        const token = localStorage.getItem("access_token");

        const peticion = req.clone({
            setHeaders: {
                'Accept': 'application/json',
                'Authorization': 'Bearer '+token
            }
        })

        return next.handle(peticion)
    }
}
