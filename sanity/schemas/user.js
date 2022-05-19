export default {
	title: 'User',
	name: 'user',
	type: 'document',
	fields: [
		{
			title: 'First name',
			name: 'first_name',
			type: 'string'
		},
		{
			title: 'Last name',
			name: 'last_name',
			type: 'string'
		},
		{
			title: 'User name',
			name: 'username',
			type: 'string'
		},
		{
			title: 'Photo',
			name: 'photo',
			type: 'image'
		},
		{
			title: 'Bio',
			name: 'bio',
			type: 'text'
		},
		{
			title: 'Following',
			name: 'following',
			type: 'array',
			of: [
				{
					type: 'reference',
					to:[{type: 'user'}]
				}
			],
			validation: (Rule) => Rule.unique()
		},
		{
			title: 'Created At',
			name: 'created_at',
			type: 'datetime'
		}
	]
}