import client from '@sanity/client'
import dotenv from 'dotenv'
dotenv.config();

export default client({
	projectId: process.env.SANITY_PROJECT_ID,
	dataset: 'production',
	useCdn: false,
	apiVersion: '2022-05-10',
	token: process.env.SANITY_API_TOKEN
})