const sideMenu = [
	{
		label: 'Home',
		to: "/"
	}, {
		label: 'Profile',
		to: "/profile",
		children: [
			{
				label: 'Details',
				to: "details",
				children: [
					{
						label: 'Personal',
						to: "personal"
					}
				]
			}
		]
	},
	{
		label: 'Settings',
		to: "/settings",
		children: [
			{
				label: 'Security',
				to: "security"
			},
			{
				label: 'Notifications',
				to: "notifications",
				children: [
					{
						label: 'Email',
						to: "email"
					},
					{
						label: 'Sms',
						to: "sms"
					}
				]
			}
		]
	}
]

export default sideMenu;