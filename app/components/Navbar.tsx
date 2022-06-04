import { Navbar as MantineNavbar, ScrollArea } from '@mantine/core';
import type { MantineNumberSize } from '@mantine/core';
import { MainLinks } from './MainLinks';
import { User } from './User';

interface NavbarProps {
  hiddenBreakpoint: MantineNumberSize;
  hidden: boolean;
}

export function Navbar({ hiddenBreakpoint, hidden }: NavbarProps) {
  return (
    <MantineNavbar hiddenBreakpoint={hiddenBreakpoint} hidden={hidden} width={{ sm: 200, lg: 300 }}>
      <MantineNavbar.Section grow component={ScrollArea} >
        <MainLinks />
      </MantineNavbar.Section>
      <MantineNavbar.Section>
        <User />
      </MantineNavbar.Section>
    </MantineNavbar>
  )
}