import type { NextPage } from 'next';
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap';
import PageLayout from '../Components/PageLayout';
import AdminIntro from '../Components/AdminIntro';
import CardListItem from '../Components/CardListItem';
import CardItem from '../Components/CardItem';

const Home: NextPage = () => {
	return (
		<PageLayout>
			<hr />
			<AdminIntro />
			{/* className from props */}
			<Row className="mb-5">
				<Col md="10">
					<CardListItem />
				</Col>

				<Col md="4">
					<CardItem />
				</Col>
			</Row>
		</PageLayout>
	);
};

export default Home;
