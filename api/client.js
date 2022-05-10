import sanityClient from '@sanity/client'
import dotenv from 'dotenv'
dotenv.config();

export default sanityClient({
	projectId: process.env.SANITY_PROJECT_ID,
	dataset: 'production',
	useCdn: false,
	apiVersion: '10.05.2022',
	token: process.env.SANITY_API_TOKEN
})