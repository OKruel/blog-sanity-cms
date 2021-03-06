import React from 'react';
import { Card } from 'react-bootstrap';

interface ICardItem {
	title: string;
	subtitle: string;
	createdAt: string;
	image?: string;
}

const CardItem: React.FC<ICardItem> = ({
	title,
	subtitle,
	createdAt,
	image,
}) => {
	return (
		<Card className={`fj-card`}>
			<div className="card-body-wrapper">
				<Card.Header className="d-flex flex-row">
					{/* <Image
                     src={'https://via.placeholder.com/150'}
                     className="rounded-circle mr-3"
                     height="50px"
                     width="50px"
                     alt="avatar"
               /> */}
					<div>
						<Card.Title className="font-weight-bold mb-1">
							Placeholder Author
						</Card.Title>
						<Card.Text className="card-date">{createdAt}</Card.Text>
					</div>
				</Card.Header>
				<div className="view overlay">
					<Card.Img src={image} alt="Card image cap" />
				</div>
				<Card.Body>
					<Card.Title className="card-main-title">{title}</Card.Title>
					<Card.Text>{subtitle}</Card.Text>
				</Card.Body>
			</div>
			<a className="card-button">Read More</a>
		</Card>
	);
};

export default CardItem;
