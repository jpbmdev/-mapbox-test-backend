import { Marcador } from "./marcador";

interface MarcadroesList {
  [id: string]: Marcador;
}

export class Marcadores {
  activos: MarcadroesList;
  constructor() {
    this.activos = {};
  }

  agregarMarcador(marcador: Marcador) {
    this.activos[marcador.id] = marcador;
    return marcador;
  }

  removeMarcador(id: string) {
    delete this.activos[id];
  }

  actualizarMarcador(marcador: Marcador) {
    this.activos[marcador.id] = marcador;
  }
}
