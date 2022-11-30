import { Text, useMantineTheme } from "@mantine/core"

interface QuestionTextProps {
	question: Question
}

export default function QuestionText(props: QuestionTextProps) {
	const theme = useMantineTheme()
	return (
		<Text align="center" size='lg'>
			{
				props.question.isWildcard && 
					<span style={{ color: theme.primaryColor, fontWeight: 'bold' }}>
						Wildcard: 
					</span>
			}
			{props.question.body}
		</Text>
	)
}