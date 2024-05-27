"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="border-2 rounded-lg border-white p-8 flex items-center flex-col">
        <h1 className="font-bold text-lg">Burası Anasayfa</h1>
        <div className="flex gap-2 mt-5">
          <Button as={Link} href="/login">
            Giriş yap
          </Button>
          <Button as={Link} href="/register">
            Kayıt ol
          </Button>
        </div>
      </div>
    </div>
  );
}
