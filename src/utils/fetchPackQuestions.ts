export default async function fetchPackQuestions(pack: string | undefined) {
	return fetch(`https://raw.githubusercontent.com/sheshenk/waes/branch-InitLayout/src/assets/packs/${pack}.json`)
		.then(res => res.json())
		.then(res => res.questions ? res.questions : [])
}