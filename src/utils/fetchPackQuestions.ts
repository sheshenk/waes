export default async function fetchPackQuestions(pack: string | undefined) {
	const SPREADSHEET_ID = '18AxSMc_5qVs3VDmwYvI81a1n0enOkbhJri2K0fxb41Y'
	const API_KEY = 'AIzaSyA6QvYBMY4XPzg20xJRx8uYZJcUcsfTamg'
	const RANGES = `${pack}!A:D`
	const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGES}?key=${API_KEY}`
	const questionArray: string[][] = await fetch(url)
		.then(res => res.json())
		.then(res => res.values ? res.values : [])
	if (!questionArray.length) return []
	const allQuestions: Question[] = questionArray.slice(1).map(q => {
		const [question, level, isWildcard, isDrawing] = q
		return {
			level: parseInt(level),
			isWildcard: parseInt(isWildcard) === 1,
			isDrawing: parseInt(isDrawing) === 1,
			body: question
		}
	})
	return allQuestions
}