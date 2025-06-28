import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'


function CTA() {
  return (
    <Card className="bg-[#1C1C1C] text-white rounded-2xl px-6 py-8 shadow-md w-1/3 max-lg:w-1/2 max-md:w-full">
      <CardHeader className="text-center space-y-4">
        <div className="inline-block bg-yellow-400 text-black text-sm font-medium px-4 py-1 rounded-full">
          Start learning your way.
        </div>
        <h2 className="text-2xl font-bold leading-tight">
          Build a Personalize<br />Learning Companion
        </h2>
        <p className="text-sm text-gray-300">
          Pick a name, subject, voice, & personality — and start learning through voice conversations that feel natural and fun.
        </p>
      </CardHeader>

      <CardContent className="flex justify-center items-center flex-wrap gap-4 my-4">
       <Image src="/images/cta.svg" alt="cta" width={362} height={232} />
      </CardContent>

      <CardContent className="text-center">
        <Link href={"/companions/new"}>
        <Button className="bg-[#FF5722] text-white text-md w-full rounded-xl hover:bg-[#e64a19]">
          + Build New Companion
        </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

export default CTA
