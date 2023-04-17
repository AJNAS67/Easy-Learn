import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './interceptor/header.interceptor';
import { AuthGuard } from './guard/auth.guard';
import { CustomErrorHandle } from './interceptor/error-service/custom-error-handle.service';
import { GlobalErrorHandlerInterceptor } from './interceptor/global-error-handler.interceptor';
import { SnackBarModule } from './snack-bar/snack-bar/snack-bar.module';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoaderInterceptor } from './interceptor/loader.interceptor';

@NgModule({
  declarations: [AppComponent, SpinnerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SnackBarModule
  ],
  providers: [
    AuthGuard,

    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    // { provide: ErrorHandler, useClass: CustomErrorHandle },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
