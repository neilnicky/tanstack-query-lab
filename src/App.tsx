import { Suspense } from "react";
import "./App.css";
import Card from "./components/Card";
import CardX from "./components/CardX";

export default function App() {
  return (
    <>
      <Suspense fallback={<div>Varumm...</div>}>
        <CardX />
      </Suspense>
    </>
  );
}
