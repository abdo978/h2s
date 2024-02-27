import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Replace these with your company's actual latitude, longitude, and address
    const companyLatitude = 33.26553;
    const companyLongitude = -7.58754;
    const companyAddress = '114, rue Ahmed Chaouki 26100 Berrechid - Maroc';

    const map = L.map('map').setView([companyLatitude, companyLongitude], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      // attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: 'assets/galery/location.png',
      iconSize: [32, 32], // Set the size of your custom icon
      iconAnchor: [16, 32], // The anchor point of the icon, adjust as needed
      popupAnchor: [0, -32], // The offset of the popup relative to the icon
    });

    const marker = L.marker([companyLatitude, companyLongitude], { icon: customIcon }).addTo(map);

    // Add a popup with the company's address that is opened by default
    marker.bindPopup(companyAddress).openPopup();
  }

}
