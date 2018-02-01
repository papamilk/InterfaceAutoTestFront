import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {PanelMenuModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { DatabaseInitModule }     from './database-init/database-init.module';
import { ExecuteModule }     from './execute/execute.module';
import { ExcelModule }     from './excel/excel.module';
import { ProjectModule }     from './project/project.module';
import { MainModule }     from './main/main.module';
import { SubModule }     from './sub/sub.module';
import { TcModule }     from './tc/tc.module';
import { SubTcModule }     from './sub-tc/sub-tc.module';
import { UrlModule }     from './url/url.module';
import { UrlTcModule }     from './url-tc/url-tc.module';
import { TdModule }     from './td/td.module';
import { DependModule }     from './depend/depend.module';
import { RMModule }     from './rm/rm.module';
import { RSModule }     from './rs/rs.module';
import { RTCModule }     from './rtc/rtc.module';
import { RURLModule }     from './rurl/rurl.module';
import { RTDModule }     from './rtd/rtd.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    PanelMenuModule,
    ProjectModule,
    MainModule,
    SubModule,
    TcModule,
    SubTcModule,
    UrlModule,
    UrlTcModule,
    TdModule,
    DependModule,
    RMModule,
    RSModule,
    RTCModule,
    RURLModule,
    RTDModule,
    DatabaseInitModule,
    ExecuteModule,
    ExcelModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
