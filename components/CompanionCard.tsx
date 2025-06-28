import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  duration: number;
  subject: string;
  color: string;
}

function CompanionCard({
  id,
  name,
  topic,
  duration,
  subject,
  color,
}: CompanionCardProps) {
  return (
    <Card
      className="companion-card"
      style={{ borderLeft: `5px solid ${color}`,backgroundColor: `${color}20`, borderRight:"none", borderTop:"none", borderBottom:"none" }}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{name}</CardTitle>
          <Button>
            <Image
              src="/icons/bookmark.svg"
              alt="bookmark"
              width={12.5}
              height={15}
            />
          </Button>
        </div>

        <CardDescription>{subject}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <p>
          <span className="font-medium">Topic:</span> {topic}
        </p>
        <p>
          <span className="font-medium">Duration:</span> {duration} mins
        </p>
      </CardContent>
      <CardFooter>
        <Link href={`/companions/${id}`}>
          <Button variant="outline">Launch Now</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default CompanionCard;
