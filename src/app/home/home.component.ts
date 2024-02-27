import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  listeProduits : any[] = [
    {id : 1, name : "Coquilles anti-bruit pour casque.", image :"https://bouchons-doreilles.fr/wp-content/uploads/2023/03/3M-Peltor-Optime-1-Helmbevestiging-5.jpg"},
    {id : 2, name : "Masque FFP2 avec valve.", image :"https://multimedia.3m.com/mws/media/708710J/3m-8822-particulate-respirator.jpg"},
    {id : 2, name : "Masque panoramique.", image :"https://www.hyprom.net/uploads/masque-panoramique-climax1646903383.png"},
    {id : 3, name : "Gant résistant aux produits chimiques", image :"https://geneq.com/biotechnology/image/cache/catalog/old/products/Gants_r%C3%A9sistant_aux_produits_chimiques-512x512.jpg"},
  ]
}