import { ActionIcon, Group } from "@mantine/core"
import { IconArrowBackUp, IconDownload } from "@tabler/icons"

interface WhiteboardControlsProps {
	undo: () => void,
	download: () => void
}

export default function WhiteboardControls(props: WhiteboardControlsProps) {
	return (
		<Group position='right' spacing={4}>
			<ActionIcon onClick={props.undo} variant="filled">
				<IconArrowBackUp size={16}/>
			</ActionIcon>
			<ActionIcon onClick={props.download} variant="filled">
				<IconDownload size={16}/>
			</ActionIcon>
		</Group>
	)
}