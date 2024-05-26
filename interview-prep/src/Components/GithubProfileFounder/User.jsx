

const User = ({ user }) => {
	const { avatar_url, login, name, created_at, public_repos, url } = user;
	const date = new Date(created_at).toLocaleDateString();
	// Another way to do is
	// const d = new Date(created_at);
	// date - d.getDate();
	// month = d.toLocaleString('default', { month: 'short' });
	// year = d.getFullYear();
	return <div style={{
		marginBottom: '20px',
	}}>
		<a href={`https://github.com/${login}`}> 
			<img src={avatar_url} alt={name} />
			</a>
		<div>
			This profile is created at {date}
		</div>
		<div>Total public repositories: {public_repos}</div>
	</div>
}
export default User;