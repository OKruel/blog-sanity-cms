import Sanity from '@sanity/client';

const options = {
	projectId: process.env.SANITY_PROJECT_ID,
	dataset: process.env.SANITY_DATASET_NAME,
	apiVersion: `2021-12-31`,
};
export const sanityClient = Sanity(options);
