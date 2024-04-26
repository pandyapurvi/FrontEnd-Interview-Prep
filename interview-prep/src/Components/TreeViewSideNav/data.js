const sideMenu = [
	{
		label: 'home',
		to: "/"
	}, {
		label: 'profile',
		to: "/profile",
		children: [
			{
				label: 'details',
				to: "details",
				children: [
					{
						label: 'personal',
						to: "personal"
					}
				]
			}
		]
	},
	{
		label: 'settings',
		to: "/settings",
		children: [
			{
				label: 'security',
				to: "security"
			},
			{
				label: 'notifications',
				to: "notifications",
				children: [
					{
						label: 'email',
						to: "email"
					},
					{
						label: 'sms',
						to: "sms"
					}
				]
			}
		]
	}
]

export default sideMenu;