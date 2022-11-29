import { Button, Select, Stack, Text } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const packs = ['basic']

export default function HomeSelectPack() {
	const navigate = useNavigate()
	const val = Math.ceil(Math.random() * 10000).toString()
	const [pack, setPack] = useState<string | null>(packs[0])
	return (
		<Stack>
			<Text align='center' size='md'>Choose a pack and start a game!</Text>
			<Select value={pack} onChange={p => setPack(p)} data={packs.map(p => ({ value: p, label: p.charAt(0).toUpperCase() + p.slice(1)}))} color='#c0392b'/>
			<Button onClick={() => navigate(`/${pack}/${val}/0`)} color='red'>Start New Game</Button>
		</Stack>
	)
}