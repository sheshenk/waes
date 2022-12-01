export default function filterQuestions(allQuestions: Question[], seed: string | undefined) {
	const seedNum = seed ? parseInt(seed) : 0
	const [levelOne, levelTwo, levelThree] = [1,2,3].map(n => {
		const sampled = allQuestions.filter(q => q.level === n)
		const shuffled = shuffle(sampled, seedNum)
		const sliced = shuffled.slice(0, Math.min(shuffled.length, 10))
		return sliced.map((q, i) => ({...q, qnum: i + 1}))
	})
	return [...levelOne, ...levelTwo, ...levelThree]
}

function random(seed: number) {
	var x = Math.sin(seed++) * 10000
	return x - Math.floor(x)
}

function shuffle(array: Question[], seed: number) {
	var m = array.length, t, i
	while (m) {
		i = Math.floor(random(seed) * m--)
		t = array[m]
		array[m] = array[i]
		array[i] = t
		++seed
	}
	return array
}