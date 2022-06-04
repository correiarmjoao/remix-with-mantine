import { Sun, MoonStars } from 'tabler-icons-react';
import { Header as MantineHeader, Group, ActionIcon, useMantineColorScheme, useMantineTheme, MediaQuery, Burger } from '@mantine/core';
import { Logo } from './Logo';

interface HeaderProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Header({ opened, setOpened }: HeaderProps) {
  const theme = useMantineTheme()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <MantineHeader height={60}>
      <Group sx={{ height: '100%' }} px={20} position="apart">
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o: boolean) => !o)}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xs"
            />
          </MediaQuery>
          <Logo colorScheme={colorScheme} />
        </div>
        <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
          {colorScheme === 'dark' ? <Sun size={16} /> : <MoonStars size={16} />}
        </ActionIcon>
      </Group>
    </MantineHeader>
  )
}