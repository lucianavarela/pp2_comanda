export class Menu {
    id: number;
    precio: number;
    nombre: string;
    sector: string;

    icon() {
        switch (this.sector) {
            case "Cervecero":
                return 'beer';
                break;
            case "Cocinero":
                return 'restaurant';
                break;
            case "Bartender":
                return 'wine';
                break;
            default:
                return '';
                break;
        }
    }
}

export enum Sector {
    // Sector = idSector
    Cocina = 3,
    BarraTragos = 1
}
