import { Button, SimpleGrid } from "@mantine/core"
import { useNavigate } from "react-router-dom"

interface QuestionNavigationProps {
	qid: number,
	max: number,
	pack: string | undefined,
	seed: string | undefined
}

export default function QuestionNavigation(props: QuestionNavigationProps) {
	const navigate = useNavigate()
	return (
		<SimpleGrid spacing={8} cols={1} breakpoints={[{ minWidth: 'md', cols: 2}]}>
			<Button
				disabled={props.qid <= 0}
				onClick={() => navigate(`/${props.pack}/${props.seed}/${props.qid - 1}`)}
				size='xs' color='gray'>Back</Button>
			<Button
				disabled={props.qid >= props.max}
				onClick={() => navigate(`/${props.pack}/${props.seed}/${props.qid + 1}`)}
				size='xs'>Next</Button>
		</SimpleGrid>
	)
}