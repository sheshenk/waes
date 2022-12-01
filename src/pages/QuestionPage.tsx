import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import LoadingBars from "../components/question/LoadingBars"
import QuestionBody from "../components/question/QuestionBody"
import QuestionNavigation from "../components/question/QuestionNavigation"
import fetchPackQuestions from "../utils/fetchPackQuestions"
import filterQuestions from "../utils/filterQuestions"
import parseQid from "../utils/parseQid"

export default function QuestionPage() {
	const { pack, seed, qid: qidStr } = useParams()

	const [qid, setQid] = useState<number>(0)
	const [allQuestions, setAllQuestions] = useState<Question[]>([])
	const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([])

	useEffect(() => {
		setQid(parseQid(qidStr))
	}, [qidStr])

	useEffect(() => {
		fetchPackQuestions(pack)
			.then(res => setTimeout(() => {
				setAllQuestions(res)
			}, 1000))
	}, [pack])

	useEffect(() => {
		const filtered = filterQuestions(allQuestions, seed)
		setFilteredQuestions(filtered)
	}, [allQuestions, seed])

	return (
		filteredQuestions.length === 0 ? <LoadingBars/> : (
			<>
			<QuestionBody question={filteredQuestions[qid]}/>
			<QuestionNavigation qid={qid} max={filteredQuestions.length - 1} pack={pack} seed={seed}/>
			</>
		)
	)
}
