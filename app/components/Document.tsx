import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { ColorScheme } from '@mantine/core';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { useState } from "react";
import { AppShell } from "./AppShell";

import { getCache } from '@mantine/core';
import { useContext, useEffect } from "react";
import { ClientStyleContext } from "~/context";

interface DocumentProps {
  children: React.ReactNode;
}

export function Document({ children }: DocumentProps) {

  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const clientStyleData = useContext(ClientStyleContext);

  useEffect(() => {
    const cache = getCache({ key: 'mantine' })
    cache.sheet.container = document.head;
    const tags = cache.sheet.tags;
    cache.sheet.flush();
    tags.forEach((tag) => {
      (cache.sheet as any)._insertTag(tag);
    });
    clientStyleData?.reset();
  }, []);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider
            theme={{
              colorScheme,
              colors: {
                white: ["#ffffff"]
              }
            }}
            withGlobalStyles
            withNormalizeCSS
          >
            <AppShell>
              {children}
            </AppShell>
          </MantineProvider>
        </ColorSchemeProvider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );

}