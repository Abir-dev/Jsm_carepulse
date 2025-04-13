"use client";

import { useSearchParams } from "next/navigation";
import PatientForm from "@/components/forms/PatientForm";
import PasskeyModal from "@/components/PasskeyModal";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";  // Import Suspense

export default function Home() {
  const searchParams = useSearchParams();
  const isAdmin = searchParams.get("admin") === "true";

  return (
    <Suspense fallback={<div>Loading...</div>}>  {/* Wrap with Suspense */}
      <div className="flex h-screen max-h-screen">
        {isAdmin && <PasskeyModal />}

        <section className="remove-scrollbar container my-auto">
          <div className="sub-container max-w-[496px]">
            <Image 
              src="/assets/icons/logo-full.svg"
              height={1000}
              width={1000}
              alt="patient"
              className="mb-12 h-10 w-fit"
            /> 

            <PatientForm />

            <div className="text-14-regular mt-20 flex justify-between"> 
              <p className="justify-items-end text-dark-600 xl:text-left">© 2025 CarePulse</p>
              <Link href="/?admin=true" className="text-green-500">Admin</Link>
            </div>
          </div>
        </section>

        <Image 
          src="/assets/images/onboarding-img.png"
          height={1000}
          width={1000}
          alt="patient"
          className="side-img max-w-[50%]"
        />
      </div>
    </Suspense>
  );
}
