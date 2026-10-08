import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LatestreleaseComponent } from './latestrelease/latestrelease.component';
import { MollywoodmoodComponent } from './navigatingcomponent/mollywoodmood/mollywoodmood.component';
import { AhaoriginalsComponent } from './navigatingcomponent/ahaoriginals/ahaoriginals.component';
import { WatchforfreeComponent } from './navigatingcomponent/watchforfree/watchforfree.component';
import { WatchbylanguageComponent } from './navigatingcomponent/watchbylanguage/watchbylanguage.component';
import { NavbarComponent } from './commoncomponents/navbar/navbar.component';
import { FooterComponent } from './commoncomponents/footer/footer.component';
import { WatchinteluguandtamilComponent } from './navigatingcomponent/watchinteluguandtamil/watchinteluguandtamil.component';
import { TrendingnowComponent } from './navigatingcomponent/trendingnow/trendingnow.component';
import { InthespotlightComponent } from './navigatingcomponent/inthespotlight/inthespotlight.component';

@NgModule({
  declarations: [
    AppComponent,
    LatestreleaseComponent,
    MollywoodmoodComponent,
    AhaoriginalsComponent,
    WatchforfreeComponent,
    WatchbylanguageComponent,
    NavbarComponent,
    FooterComponent,
    WatchinteluguandtamilComponent,
    TrendingnowComponent,
    InthespotlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
