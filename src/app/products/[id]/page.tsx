"use client";
import { useParams } from "next/navigation";

export default function Products() {
  const { id } = useParams();
  return (
    <>
      <p>ID: {id}</p>
    </>
  );
}
