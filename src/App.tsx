import { Suspense } from "react";
import "./App.css";
import Card from "./components/Card";

export default function App() {
  return (
    <>
      <Suspense fallback={<div>Varumm...</div>}>
        <Card />
      </Suspense>
    </>
  );
}
