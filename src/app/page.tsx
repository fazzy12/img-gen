'use client';

import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";


export default function Home() {
  return (
      <main className="flex flex-col min-h-screen items-center justify-between p-24">
          <SignedIn>
            <SignOutButton/>
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal"/>
          </SignedOut>
          <Button>Sign In</Button>
      </main>

  );
}
