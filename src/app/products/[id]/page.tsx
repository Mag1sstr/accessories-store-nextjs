"use client";
import { useParams } from "next/navigation";

export default function SingleProduct() {
  const { id } = useParams();
  return (
    <>
      <p>ID: {id}</p>
    </>
  );
}
