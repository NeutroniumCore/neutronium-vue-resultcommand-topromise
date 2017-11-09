const toPromise = function toPromise(command, argument) {
	if (arguments.length <= 1) {
		return function toPromise(argument) {
			return new Promise(function (fullfill, reject) {
				var res = { fullfill: function (res) { fullfill(res); }, reject: function (err) { reject(new Error(err)); } };
				command.Execute(argument, res);
			});
		}
	}

	return new Promise(function (fullfill, reject) {
		var res = { fullfill: function (res) { fullfill(res); }, reject: function (err) { reject(new Error(err)); } };
		command.Execute(argument, res);
	});
}

export {
	toPromise
}