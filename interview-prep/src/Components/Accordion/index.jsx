import data from "./data";
import { useEffect, useState } from "react";
import "./style.css";

const Accordion = () => {
	const [loading, setLoading] = useState(true)
	const [singleSelection, setSingleSelection] = useState(null)
	const [multiSelection, setMultiSelection] = useState([])
	const [isEnabled, setEnabled] = useState(false)

	const handleAccordion = (itemId) => {
		setSingleSelection(itemId === singleSelection ? null : itemId);
	};
	const handleMutliSelection = (itemId) => {
		if (multiSelection.includes(itemId)) {
			setMultiSelection(multiSelection.filter((id) => id !== itemId));
		} else {
			setMultiSelection([...multiSelection, itemId]);
		}
	}
	useEffect(() => {
		if (data.length > 0)
			setLoading(false);
	}, []);


	if (loading) return (<h1>Loading...</h1>);
	
	if(!data.length) return null;
		return (
			<div className="wrapper">
				<div onClick={() => setEnabled(!isEnabled)} className="btn">
					<div className="btnText">
						{isEnabled ? 'Enable multi selection' : 'Disable multi selection'}
					</div>
				</div>
					{data.map((item) => {
						return (
							<div key={item.id} className="item">
								<div onClick={
									isEnabled ? () => handleMutliSelection(item.id) :
										() => handleAccordion(item.id)
								}
								className="content">
										<div>{item.question}</div>
										<div>+</div>
									</div>
								{singleSelection === item.id || multiSelection.indexOf(item.id) !== -1 ? <p>{item.answer}</p> : null}
							</div>
						)
					})}
				</div>
		)
}
export default Accordion;