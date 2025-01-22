"use client";

import { Card, CardBody } from "@nextui-org/react";
import { FileUnknownIcon } from "hugeicons-react";

export default function NotFound() {
  return (
    <Card className="mx-auto max-w-md">
      <CardBody className="text-center">
        <FileUnknownIcon size="4x" />
        <p className="text-xl">This page can not be found.</p>
      </CardBody>
    </Card>
  );
}
