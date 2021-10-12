import { Server } from "socket.io";
import { Marcadores } from "./marcadores";
import { Marcador } from "./marcador";

class Sockets {
  io: Server;
  marcadores: Marcadores;

  constructor(io: Server) {
    this.io = io;

    this.socketEvents();

    this.marcadores = new Marcadores();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      socket.emit("marcadores-activos", this.marcadores.activos);

      socket.on("marcador-nuevo", (marcador: Marcador) => {
        this.marcadores.agregarMarcador(marcador);

        socket.broadcast.emit("marcador-nuevo", marcador);
      });

      socket.on("marcador-actualizado", (marcador: Marcador) => {
        this.marcadores.actualizarMarcador(marcador);
        socket.broadcast.emit("marcador-actualizado", marcador);
      });
    });
  }
}

export default Sockets;
