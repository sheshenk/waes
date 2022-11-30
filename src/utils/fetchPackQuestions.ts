export default async function fetchPackQuestions(pack: string | undefined) {
	return fetch(`https://raw.githubusercontent.com/sheshenk/waes/master/src/assets/packs/${pack}.json`)
		.then(res => res.json())
		.then(res => res.questions ? res.questions : [])
}