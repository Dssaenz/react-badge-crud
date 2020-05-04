import React from 'react';
import {
	ListWrapper,
	LinkRoute,
	BadgeImage,
	SectionWrapper,
	SectionItems,
	TextName,
	TextGit,
	TextJob,
	Icon,
	SectionIcon,
} from './styles';

function BadgeCard(props) {
	return(
		<ListWrapper key={props.item.id} className='Badge__list'>
			<LinkRoute to={`/badges/${props.item.id}`}>
				<SectionWrapper>
					<BadgeImage src={props.item.avatarUrl} alt={props.item.firstName} className='Badge__image' />
					<SectionItems>
						<TextName className='Badge__list--name'>{props.item.firstName} {props.item.lastName}</TextName>
						<SectionIcon>
							<Icon className='fab fa-github' />
							<TextGit className='Badge__social'>{props.item.gitHub}</TextGit>
						</SectionIcon>
						<TextJob className='Badge__list--git'>{props.item.jobTitle}</TextJob>
					</SectionItems>
				</SectionWrapper>
			</LinkRoute>
		</ListWrapper>
	);
}

export default BadgeCard;