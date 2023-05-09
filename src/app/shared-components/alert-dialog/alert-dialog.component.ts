// import { Component, Inject, OnInit } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import {Router} from "@angular/router";
//
// export type DialogType = 'info' | 'warning' | 'success' | 'error';
//
// interface DialogData {
//   type: DialogType;
//   title: string;
//   bodyText: string;
//   subBodyText: string;
//   enableNotificationCheck: boolean;
//   dismissBtnText: string;
//   confirmBtnText: string;
//   disableConfirmBtn: boolean;
// }
//
// @Component({
//   selector: 'tms-alert-dialog',
//   templateUrl: './alert-dialog.component.html',
//   styleUrls: ['./alert-dialog.component.scss'],
// })
// export class AlertDialogComponent implements OnInit {
//   type: DialogType;
//   title: string;
//   bodyText: string;
//   subBodyText: string;
//   enableNotificationCheck: boolean;
//   dismissBtnText: string;
//   confirmBtnText: string;
//   disableConfirmBtn: boolean = false;
//   notificationChecked = false;
//
//   constructor(
//     @Inject(MAT_DIALOG_DATA) public data: DialogData,
//     public dialogRef: MatDialogRef<AlertDialogComponent>
//   ) {
//     this.type = data?.type || 'info';
//     this.title = data?.title || '';
//     this.bodyText = data?.bodyText || '';
//     this.subBodyText = data?.subBodyText || '';
//     this.enableNotificationCheck = data?.enableNotificationCheck || false;
//     this.dismissBtnText = data?.dismissBtnText || 'No';
//     this.confirmBtnText = data?.confirmBtnText || 'Yes';
//     this.disableConfirmBtn = data?.disableConfirmBtn || false;
//   }
//
//   ngOnInit(): void {}
//
//   cancel() {
//     let result = { result: false };
//     this.dialogRef.close(result);
//   }
//
//   confirm() {
//     let result: any = { result: true };
//
//     if (this.enableNotificationCheck) {
//       result.notificationChecked = this.notificationChecked;
//     }
//
//     this.dialogRef.close(result);
//   }
// }
