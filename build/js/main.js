// first the log in page
let data = {
	username: 'kyrils@gmail.com',
	password: 'kero1234',
}
function check_Data() {
	let checkUserName = document.getElementById('user-name').value

	let checkUserPassword = document.getElementById('pass').value

	if (checkUserName === data.username && checkUserPassword === data.password)
		alert('Successful log in')
	else {
		alert('please enter valid name or password ❌')
	}
}
function showPassword() {
	let S_pass = document.getElementById('pass')
	if (S_pass.type === 'password') {
		S_pass.type = 'text'
	} else {
		S_pass.type = 'password'
	}
}

// Register page

function onRegister() {
	// input value
	let firstName = document.getElementById('first-name').value
	let lastName = document.getElementById('last-name').value
	let Email = document.getElementById('e-mail').value
	let phoneNumber = document.getElementById('phone-number').value
	let password = document.getElementById('password-1').value
	let confiremPassword = document.getElementById('Confirem-Password').value
	let gender_M = document.getElementById('gender_M')
	let gender_F = document.getElementById('gender_F')
	let birthdate = document.getElementById('Birthdate').value
	let phonePattern = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
	let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
	//  label
	let L_Fname = document.getElementById('Label-Fname')
	let L_Lname = document.getElementById('label-Lname')
	let L_email = document.getElementById('L-email')
	let L_PhoneNum = document.getElementById('label-phone-num')
	let L_pass = document.getElementById('label-password')
	let L_Con_Pass = document.getElementById('label-Con-Pass')
	let L_gender = document.getElementById('L_Gender')
	let L_birthdate = document.getElementById('L_birthday')

	if (firstName.length == 0 || firstName.indexOf(' ') != -1) {
		resetLabel()
		changeLabeColor(L_Fname, 'please enter valid name ❌')
		return (valid = false)
	} else if (firstName.charAt(0) !== firstName.charAt(0).toUpperCase()) {
		resetLabel()
		changeLabeColor(L_Fname, 'first letter should be upper case ❌')
		return (valid = false)
	} else if (lastName.length == 0 || lastName.indexOf(' ') != -1) {
		resetLabel()
		changeLabeColor(L_Lname, 'please enter valid name ❌')
		return (valid = false)
	} else if (lastName.charAt(0) !== lastName.charAt(0).toUpperCase()) {
		resetLabel()
		changeLabeColor(L_Lname, 'first letter should be upper case ❌')
		return (valid = false)
	} else if (emailPattern.test(Email) == false) {
		resetLabel()
		changeLabeColor(L_email, 'please enter valid Email ❌ ')
		return (valid = false)
	} else if (phonePattern.test(phoneNumber) == false) {
		resetLabel()
		changeLabeColor(L_PhoneNum, ' please enter Valid PhoneNumber ❌')
		return (valid = false)
	} else if (password.length < 6) {
		changeLabeColor(L_pass, ' Must be not less than 6 ❌')
		return (valid = false)
	} else if (password !== confiremPassword) {
		resetLabel()
		changeLabeColor(L_Con_Pass, ' not match each other ❌')
		return (valid = false)
	} else if (gender_M.checked == false && gender_F.checked == false) {
		resetLabel()
		changeLabeColor(L_gender, 'please select one ❌')
		return (valid = false)
	} else if (birthdate === '') {
		resetLabel()
		changeLabeColor(L_birthdate, ' please select date ❌')
		return (valid = false)
	} else return (valid = true)
}
function changeLabeColor(label, text) {
	label.textContent = text
	label.style.color = 'red'
	label.style.textTransform = 'capitalize'
}
function resetLabel() {
	let L_Fname = document.getElementById('Label-Fname')
	let L_Lname = document.getElementById('label-Lname')
	let L_email = document.getElementById('L-email')
	let L_PhoneNum = document.getElementById('label-phone-num')
	let L_pass = document.getElementById('label-password')
	let L_Con_Pass = document.getElementById('label-Con-Pass')
	let L_gender = document.getElementById('L_Gender')
	let L_birthdate = document.getElementById('L_birthday')

	L_Fname.textContent = 'First Name :'
	L_Lname.textContent = 'Last Name :'
	L_email.textContent = 'Email : '
	L_PhoneNum.textContent = 'Phone Number : '
	L_pass.textContent = ' Password :'
	L_Con_Pass.textContent = 'Confirem Password :'
	L_gender.textContent = ' Gender :'
	L_birthdate.textContent = 'Birthdate :'

	let labelArr = [
		L_Fname,
		L_Lname,
		L_email,
		L_PhoneNum,
		L_pass,
		L_Con_Pass,
		L_gender,
		L_birthdate,
	]
	for (let i = 0; i < labelArr.length; ++i) {
		labelArr[i].style.color = '#3b82f6'
	}
}
