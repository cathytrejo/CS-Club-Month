myNewObject = new Object ();
		myNewObject.info = 'I am a shiny new object';
		function myFunc() {
			alert(this.info);
		}
		myNewObject.showInfo = myFunc;
		/*An alternate way of assigning a value to showInfo method,
		which is simply:
			myNewObject.showInfo = function () {
				alert(this.info);
			} */
