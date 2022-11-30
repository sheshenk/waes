import { Stack } from "@mantine/core";
import HomeBody from "../components/home/HomeBody";
import HomeSelectPack from "../components/home/HomeSelectPack";
import HomeTitle from "../components/home/HomeTitle";

export default function HomePage() {
	return (
		<Stack spacing='xl'>
			<HomeTitle/>
			<HomeBody/>
			<HomeSelectPack/>
		</Stack>
	)
}
