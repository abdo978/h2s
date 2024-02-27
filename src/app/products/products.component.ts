import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  catgorieSelected: any
  listeProduits : any[] = [
    {id : 1, name : "Coquilles anti-bruit pour casque.", image :"https://bouchons-doreilles.fr/wp-content/uploads/2023/03/3M-Peltor-Optime-1-Helmbevestiging-5.jpg"},
    {id : 2, name : "Masque FFP2 avec valve.", image :"https://multimedia.3m.com/mws/media/708710J/3m-8822-particulate-respirator.jpg"},
    {id : 2, name : "Masque panoramique.", image :"https://www.hyprom.net/uploads/masque-panoramique-climax1646903383.png"},
    {id : 3, name : "Gant résistant aux produits chimiques", image :"https://geneq.com/biotechnology/image/cache/catalog/old/products/Gants_r%C3%A9sistant_aux_produits_chimiques-512x512.jpg"},
    {id : 1, name : "Lunettes masque.", image :"https://tenuepro.com/232-large_default/lunettes-masque-en-polycarbonate.jpg"},
    {id : 2, name : "Chaussure de sécurité S1 .", image :"https://www.chaussures-pro.fr/2590-large_default/chaussure-de-securite-s1-src-moray-aimont.jpg"},
    {id : 2, name : "Gilet haute visibilité.", image :"https://doncelmaroc.com/3949-thickbox_default/gilet-haute-visibilite-jaune-t-s-m.jpg"},
    {id : 3, name : "Gel Glove 381 mm. ", image :"https://assets.fishersci.com/TFS-Assets/CCG/Showa-Best-Glove/product-images/21-2114624-19395344-STD-01.jpg-650.jpg"},
    {id : 3, name : "Tablier Polyéthylène", image :"https://images.kkeu.de/is/image/BEG/V%C3%AAtements_de_travail_%C3%A9quipement_de_protection_individuelle/V%C3%AAtements_de_protection_jetables/Tablier_jetable_en_PE_basse_densit%C3%A9_blanc_pdplarge-mrd--540393_PDK_00_00_00_5547952.jpg"},
  ]
  listeBestSellers : any[] = [
    {id : 1, name : "Coquilles anti-bruit pour casque.", image :"https://bouchons-doreilles.fr/wp-content/uploads/2023/03/3M-Peltor-Optime-1-Helmbevestiging-5.jpg", price : 20.95,},
    {id : 2, name : "Masque FFP2 avec valve.", image :"https://multimedia.3m.com/mws/media/708710J/3m-8822-particulate-respirator.jpg", price : 85.05,},
    {id : 2, name : "Masque panoramique.", image :"https://www.hyprom.net/uploads/masque-panoramique-climax1646903383.png", price : 30.00,},
    {id : 3, name : "Gant résistant aux produits chimiques", image :"https://geneq.com/biotechnology/image/cache/catalog/old/products/Gants_r%C3%A9sistant_aux_produits_chimiques-512x512.jpg", price : 145,  } 
  ]
}
 