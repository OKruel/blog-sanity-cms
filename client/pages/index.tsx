import React from 'react';
import Image from 'next/image';
//Components
import { Row, Col } from 'react-bootstrap';
import PageLayout from '../Components/PageLayout';
import AdminIntro from '../Components/AdminIntro';
import CardListItem from '../Components/CardListItem';
import CardItem from '../Components/CardItem';

import { getAllBlogs, IBlog } from '../lib/sanity/api';

interface IHome {
	blogs: IBlog[];
}

const Home: React.FC<IHome> = ({ blogs }) => {
	console.log('blogs', blogs);
	return (
		<PageLayout>
			<hr />
			<AdminIntro />
			<Row className="mb-5">
				<Col md="10">
					<CardListItem />
				</Col>
				{blogs.map((blog) => {
					return (
						<Col key={blog._id} md="4">
							<CardItem
								title={blog.title}
								subtitle={blog.subtitle}
								createdAt={blog._createdAt}
								image={blog.coverImage}
							/>
						</Col>
					);
				})}
			</Row>
		</PageLayout>
	);
};

export const getStaticProps = async () => {
	const result = await getAllBlogs();

	console.log(result);

	return {
		props: { blogs: result },
	};
};

export default Home;
