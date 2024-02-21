export interface Cliente {
  ID: number;
  Nombre: string;
  Apellido: string;
  Email: string;
  Ciudad: string | null;
  Provincia: string | null;
  Pais: string | null;
  Rol: number;
}

export interface clientesProps {
  clientes: Cliente[];
}
