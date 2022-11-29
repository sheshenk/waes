import { Stack, Title } from "@mantine/core";

export default function HomeTitle() {
	return (
		<Stack spacing={0}>
			<Title align='center' color='dimmed' order={3}>Welcome to</Title>
			<Title align='center' order={2}>We Ain't Exactly Strangers</Title>
		</Stack>
	)
}