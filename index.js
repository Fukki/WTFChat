module.exports = function WTFChat(mod) {
	const cmd = mod.command || mod.require.command;
	let mode = 21;
	
	cmd.add('chat', (...arg) => {
		let msg = ''; 
		for (let n in arg) {
			msg = (n > 0 ? msg + ' ' + arg[n] : arg[n])
		}
		mod.toServer('C_CHAT', 1, {
			channel: mode,
			message: msg
		});
	});
	
	cmd.add('chatset', (...arg) => {
		if (arg[0]) {
			switch (arg[0].toLowerCase()) {
				case 's': setMode(0, 'Say'); break;
				case 'p': setMode(1, 'Party'); break;
				case 'g': setMode(2, 'Guild'); break;
				case 'a': setMode(3, 'Area'); break;
				case 't': setMode(4, 'Trade'); break;
				case 'greet': setMode(9, 'Greet'); break;
				case 'pn': setMode(21, 'Party Notice'); break;
				case 'rn': setMode(25, 'Raid Notice'); break;
				case 'e': setMode(26, 'Emote'); break;
				case 'c': setMode(27, 'Global'); break;
				case 'r': setMode(32, 'Raid'); break;
			}
		}
	});
	
	function setMode(m, s){
		mode = m;
		cmd.message('Chat mode has changed to: ' + s);
	}
}