export default function parseQid(qidStr: string | undefined) {
	if (!qidStr) return 0
	const res = parseInt(qidStr)
	return isNaN(res) ? 0 : res
}