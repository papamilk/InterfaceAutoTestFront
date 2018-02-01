import { Component } from '@angular/core';
import {ExcelService} from "./excel.service";
import {isUndefined} from "ngx-bootstrap/bs-moment/utils/type-checks";

@Component({
  selector: 'excel-validate',
  templateUrl: './validate.component.html'
})

export class ExcelValidateComponent {
  expectResult: string;
  validationInfo: string;

  constructor(
    private excelService: ExcelService
  ) {}

  validate() {
    if (isUndefined(this.expectResult)) {
      this.validationInfo = "请输入有效的期望结果";
    } else {
      this.excelService.validateExpectResult(this.expectResult).then(info => this.validationInfo = info);
    }
  }

}
