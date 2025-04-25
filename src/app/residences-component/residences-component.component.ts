import { Component } from '@angular/core';

interface Residence {
  id: number;
  name: string;
  address: string;
  image: string;
  status: string;
}

@Component({
  selector: 'app-residences-component',
  templateUrl: './residences-component.component.html',
  styleUrls: ['./residences-component.component.css']
})
export class ResidencesComponentComponent {
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpeg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction" }
  ];

  favorites: Residence[] = [];
  searchQuery: string = '';

  showLocation(residence: Residence): void {
    if (residence.address === 'inconnu') {
      alert(`L'adresse de la résidence "${residence.name}" est inconnue.`);
    } else {
      alert(`Adresse de la résidence "${residence.name}": ${residence.address}`);
    }
  }

  addToFavorites(residence: Residence): void {
    if (!this.favorites.includes(residence)) {
      this.favorites.push(residence);
      alert(`La résidence "${residence.name}" a été ajoutée aux favoris.`);
    }
  }
  removeFromFavorites(residence: Residence): void {
    const index = this.favorites.indexOf(residence);
    if (index !== -1) {
      this.favorites.splice(index, 1);
      alert(`La résidence "${residence.name}" a été retirée des favoris.`);
    }
  }
  filterResidences(): Residence[] {
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
