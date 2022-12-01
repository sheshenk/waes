import { Space, Stack, Title } from "@mantine/core";
import QuestionText from "./QuestionText";
import QuestionWhiteboard from "./QuestionWhiteboard";

interface QuestionBodyProps {
	question: Question
}

export default function QuestionBody(props: QuestionBodyProps) {
	return (
		<Stack spacing='xl'>
			<Title align='center' order={3}>
				Level {props.question.level} Question {props.question.qnum}
			</Title>
			<QuestionText question={props.question}/>
			{ props.question.isDrawing && <QuestionWhiteboard question={props.question}/> }
			<Space my={props.question.isDrawing ? 0 : 'sm'}/>
		</Stack>
	)
}