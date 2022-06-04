import { Title } from "@mantine/core";

export default function Index() {
  throw new Error("This is an error")
  return (
    <div>
      <Title>This page throws an error</Title>
    </div>
  );
}
