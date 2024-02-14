import { MapPinned } from "lucide-react";
import style from "./style.module.scss";

export function EmptyState() {
  return (
    <div className={style.container}>
      <MapPinned size={117} strokeWidth={0.5} color="#7D7802" />
      <h1>Nenhum estado encontrado</h1>
    </div>
  );
}
