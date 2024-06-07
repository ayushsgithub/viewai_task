import Link from "next/link";
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


async function getData() {
    const res = await fetch("https://randomuser.me/api/?results=20");
  
    if (!res.ok ) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }

export default async function TableSection() {
    const data = await getData();

  return (
    <div className="py-12 bg-gray-900 min-h-screen">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase mt-16">
            TABLE DATA
          </h2>
          <p className="mt-4 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="">
          <Table>
            <TableCaption>A table of your recent data.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[140px]">City</TableHead>
                <TableHead>State</TableHead>
                <TableHead>Country</TableHead>
                <TableHead className="text-right">Postcode</TableHead>
                <TableHead>Number</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Latitude</TableHead>
                <TableHead>Longitude</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.results.map((user: any) => (
                <TableRow key={user.id}>
                  <TableCell>{user.location.city}</TableCell>
                  <TableCell>{user.location.state}</TableCell>
                  <TableCell>{user.location.country}</TableCell>
                  <TableCell className="text-right">
                    {user.location.postcode}
                  </TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    {user.name.first} {user.name.last}
                  </TableCell>
                  <TableCell>{user.location.coordinates.latitude}</TableCell>
                  <TableCell>{user.location.coordinates.longitude}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All
        </Link>
      </div>
    </div>
  );
}