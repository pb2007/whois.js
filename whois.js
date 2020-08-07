// WhoIs by pb2007 (podnf)

// Settings \\
const admins = [83487] // User IDs of admins
const discreet = true  // Whether or not you want to show "You are not an admin!" text.
// Settings end \\

// stole this from edged's admin commands lol
function getPlayer(name) {
	for (let p of Game.players)
		if (p.username.toLowerCase().indexOf(String(name).toLowerCase())==0)
			return Array.from(Game.players).find(v=>v.username===p.username);
}

Game.command("whois", (p, args) => {
	// Return if not admin
	if (!admins.includes(p.userId)) return (!discreet ? p.message("\\c6Error: You are not an admin!") : null);

	// Get the victim
	let v = getPlayer(args[0])

	// Message caller info about victim
	p.message(`[#ffde0a]WhoIs \\c6${v.username}[#ffde0a]:`)
	p.message(`[#ffde0a]- ID: ${v.userId}`)
	p.message(`[#ffde0a]- Health: \\c0${v.health}/${v.maxHealth}`)
	p.message(`[#ffde0a]- Jump height | Speed: \\c0${v.jumpPower} | ${v.speed}`)
	p.message(`[#ffde0a]- IP address: \\c0${v.socket.IPV4}`)
	p.message(`[#ffde0a]- Position | Scale (x/y/z): \\c0${v.position.x} / ${v.position.y} / ${v.position.z} | ${v.scale.x} / ${v.scale.y} / ${v.scale.z}`)
})