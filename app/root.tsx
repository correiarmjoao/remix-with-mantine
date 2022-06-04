import type { MetaFunction } from "@remix-run/node";
import {
  Outlet,
  useCatch,
} from "@remix-run/react";
import { Document } from "./components/Document";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function Root() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function CatchBoundary() {
  let caught = useCatch();
  let message = caught.statusText;
  if (typeof caught.data === "string") {
    message = caught.data;
  }
  return (
    <Document>
      <h1>{message}</h1>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document>
      <h1>An unknown error occured.</h1>
    </Document>
  );
}