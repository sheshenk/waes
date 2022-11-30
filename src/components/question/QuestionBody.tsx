import { Space, Stack, Title } from "@mantine/core";
import QuestionText from "./QuestionText";
import QuestionWhiteboard from "./QuestionWhiteboard";

interface QuestionBodyProps {
	qid: number
	question: Question
}

export default function QuestionBody(props: QuestionBodyProps) {
	return (
		<Stack spacing='xl'>
			<Title align='center' order={3}>
				Level {Math.ceil((props.qid + 1) / 10)} Question {(props.qid % 10) + 1}
			</Title>
			<QuestionText question={props.question}/>
			{ props.question.isDrawing && <QuestionWhiteboard question={props.question}/> }
			{ !props.question.isDrawing && <Space my='sm'/> }
		</Stack>
	)
}