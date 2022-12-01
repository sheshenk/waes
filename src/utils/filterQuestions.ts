export default function filterQuestions(allQuestions: Question[], seed: string | undefined) {
	const [levelOne, levelTwo, levelThree] = [1,2,3].map(n => {
		const sampled = allQuestions.filter(q => q.level === n)
		const shuffled = sampled // implement random shuffling here
		const sliced = shuffled.slice(0, Math.min(shuffled.length, 10))
		return sliced.map((q, i) => ({...q, qnum: i + 1}))
	})
	return [...levelOne, ...levelTwo, ...levelThree]
}