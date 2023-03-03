import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MeetingModel } from 'src/app/model/meeting.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css'],
})
export class MeetingComponent {
  @ViewChild('closeModal') closebutton: any; //for close modal

  formValue: FormGroup;
  meetingModel: MeetingModel = new MeetingModel();
  meetingData: any;
  showAdd: boolean;
  showUpdate: boolean;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.formValue = this.fb.group({
      meetingName: [''],
      startDate: [''],
      endDate: [''],
      comment: [''],
    });

    this.getMeeting();
  }

  clickAddMeeting() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postMeeting() {
    this.meetingModel.meetingName = this.formValue.value.meetingName;
    this.meetingModel.startDate = this.formValue.value.startDate;
    this.meetingModel.endDate = this.formValue.value.endDate;
    this.meetingModel.comment = this.formValue.value.comment;

    this.api.postMeeting(this.meetingModel).subscribe(
      (response) => {
        console.log(response);
        this.toast.success('The meeting was successfully added');
        this.formValue.reset();
        this.getMeeting();
        this.closebutton.nativeElement.click();
      },
      (err) => {
        this.toast.error('There is an error in the record');
      }
    );
  }

  getMeeting() {
    this.api.getMeeting().subscribe((response) => {
      this.meetingData = response;
    });
  }

  deleteMeeting(item: any) {
    this.api.deleteMeeting(item.id).subscribe(
      (response) => {
        this.toast.success('The meeting was successfully deleted');
        this.getMeeting();
      },
      (err) => {
        this.toast.error('There is an error ');
      }
    );
  }

  onEdit(item: any) {
    this.showAdd = false;
    this.showUpdate = true;

    this.meetingModel.id = item.id;
    this.formValue.controls['meetingName'].setValue(item.meetingName);
    this.formValue.controls['startDate'].setValue(item.startDate);
    this.formValue.controls['endDate'].setValue(item.endDate);
    this.formValue.controls['comment'].setValue(item.comment);
  }

  updateMeeting() {
    this.closebutton.nativeElement.click();

    this.meetingModel.meetingName = this.formValue.value.meetingName;
    this.meetingModel.startDate = this.formValue.value.startDate;
    this.meetingModel.endDate = this.formValue.value.endDate;
    this.meetingModel.comment = this.formValue.value.comment;

    this.api.updateMeeting(this.meetingModel, this.meetingModel.id).subscribe(
      (response) => {
        this.toast.success('The meeting was successfully updated');
        this.formValue.reset();
        this.getMeeting();
      },
      (err) => {
        this.toast.error('There is an error');
      }
    );
  }
}
