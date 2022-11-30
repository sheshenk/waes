import { Stack } from "@mantine/core"
import { useSvgDrawing } from "react-hooks-svgdrawing"
import WhiteboardControls from "./WhiteboardControls"

interface QuestionWhiteboardProps {
	question: Question
}

export default function QuestionWhiteboard(props: QuestionWhiteboardProps) {
	const [renderRef, draw] = useSvgDrawing({
		penWidth: 2,
		penColor: '#000',
	})
	return (
		<Stack spacing={8}>
			<div style={{ border: '1px solid #ccc', height: 250 }} ref={renderRef}/>
			<WhiteboardControls undo={() => draw.undo()} download={() => draw.download('png')}/>
		</Stack>
	)
}