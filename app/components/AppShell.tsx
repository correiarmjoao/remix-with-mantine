import {
  AppShell as MantineAppShell,
  useMantineTheme,
} from '@mantine/core';
import { Navbar } from './Navbar';
import { Header } from './Header';
import { useState } from 'react';

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <MantineAppShell
      header={<Header opened={opened} setOpened={setOpened} />}
      navbar={<Navbar hiddenBreakpoint="sm" hidden={!opened} />}
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      fixed
      navbarOffsetBreakpoint="sm"
    >
      {children}
    </MantineAppShell>
  );
}

