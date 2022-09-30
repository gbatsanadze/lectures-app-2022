import {NgModule} from "@angular/core";
import {ShellComponent} from "./shell.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {BpmModule} from "./bpm/bpm.module";
import {ShellRoutingModule} from "./shell-routing.module";

@NgModule({
  declarations: [ShellComponent],
  imports: [ShellRoutingModule,  BpmModule,
  ]
})

export class ShellModule {

}
