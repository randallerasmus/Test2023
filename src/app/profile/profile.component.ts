import {Component, OnInit} from '@angular/core';
import {ImageService} from "../platform/services/image.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  UserName: string = 'JOE BIDEN';
  public imageUrl: string | null;

  constructor(private imageService: ImageService) {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phone = '';
    this.address = '';
    this.city = '';
    this.imageUrl = localStorage.getItem('assets/profile.jpg');

  }

  ngOnInit() {
    setTimeout(() => {
      this.imageUrl = this.imageService.imageUrl;
    }, 500);
  }


  saveProfile() {
    // Handle save profile logic here
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result as string;
      this.imageService.imageUrl = this.imageUrl;
    };
    reader.readAsDataURL(file);
    event.target.value = null;
  }


  onUploadClick() {
    // Save the image to local storage or send to the server
  }

}
