import { sanityClient } from './client';

export interface IBlog {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
	slug: { _type: string; current: string };
	subtitle: string;
	title: string;
	date?: string;
	coverImage?: string;
}

const blogFields = `
_createdAt,
_id,
_rev,
_type,
_updatedAt,
slug,
subtitle,
title,
date,
'coverImage': coverImage.asset->url 
`;

export const getAllBlogs = async () => {
	return sanityClient.fetch<IBlog>(`*[_type == "Blog"]{${blogFields}}`);
};
