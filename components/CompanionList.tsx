import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn, getSubjectColor } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

function CompanionList({ title, companions, className }: any) {
  return (
    <article className={cn("companion-list", className)}>
      <h2 className="text-3xl font-bold">Recent Sessions</h2>
      <Table className="mt-4 border rounded-md overflow-hidden bg-white shadow-sm">
        <TableHeader >
          <TableRow className="border-b">
            <TableHead className="text-lg w-2/3">Lessons</TableHead>
            <TableHead className="text-lg">Subject</TableHead>
            <TableHead className="text-lg text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions.map((companion: any) => (
            <TableRow key={companion.id} className="hover:bg-gray-50 transition-colors border-b">
              <TableCell className="font-medium">
                <Link href={`/companions/${companion.id}`}>
                  <div className="flex items-center gap-2">
                    <div className="size-[72px] flex items-center justify-center p-1 max-md:hidden " style={{ backgroundColor: getSubjectColor(companion.subject) }}>
                      <Image
                        src={`/icons/${companion.subject}.svg`}
                        alt={companion.name}
                        width={35}
                        height={35} 
                        
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold text-2xl">{companion.name}</p>
                      <p className="text-sm">{companion.topic}</p>
                    </div>
                  </div>
                </Link>
              </TableCell>
              <TableCell>
                <div className="subject-badge w-fit max-md:hidden">
                  {companion.subject}
                </div>
                <div className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden" style={{ backgroundColor: getSubjectColor(companion.subject) }} >
                  <Image
                    src={`/icons/${companion.subject}.svg`}
                    alt={companion.subject}
                    width={18}
                    height={18}
                  />
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center gap-2 w-full justify-end">
                    <p className="text-2xl">
                        {companion.duration} {' '}
                        <span className="max-md:hidden">min</span>
                    </p>
                    <Image src={"/icons/clock.svg"} alt="clock" width={14} height={14} className="md:hidden" />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  );
}

export default CompanionList;
