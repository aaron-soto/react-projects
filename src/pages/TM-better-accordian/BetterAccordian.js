import './better-accordian.scss';

export const BetterAccordian = () => {
	return (
		<div className='container'>
			<div className='row page-header'>
				<h1>Better Accordian</h1>
				<a
					href='https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Cause-Effect-App.md'
					target='_blank'
					rel='noreferrer'
				>
					Challenge Github Repo
				</a>
			</div>

			<div className='accordian'>
				<div className='accordian-item'>Item 1</div>
			</div>
		</div>
	);
};
