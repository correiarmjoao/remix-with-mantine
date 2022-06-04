import React from 'react';
import { GitPullRequest, AlertCircle, Messages, Database } from 'tabler-icons-react';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import { NavLink } from '@remix-run/react';

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  to: string;
}

function MainLink({ icon, color, label, to }: MainLinkProps) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <NavLink to={to} style={{ textDecoration: "none", color: "inherit" }}>
        <Group>
          <ThemeIcon color={color} variant="light">
            {icon}
          </ThemeIcon>

          <Text size="sm">{label}</Text>
        </Group>
      </NavLink>
    </UnstyledButton>
  );
}

const data = [
  { icon: <GitPullRequest size={16} />, color: 'blue', label: 'Pull Requests', to: '/' },
  { icon: <AlertCircle size={16} />, color: 'teal', label: 'Open Issues', to: '/issues' },
  { icon: <Messages size={16} />, color: 'violet', label: 'Error page', to: '/error' },
  { icon: <Database size={16} />, color: 'grape', label: '404', to: '/thisIsMissing' },
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}
