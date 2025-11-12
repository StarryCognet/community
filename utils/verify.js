// 手机号验证
export const checkMobile = (mobile) => {
	let reg =
		/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[01256789]))\d{8}$/

	return reg.test(mobile)
}

// 验证码
export const checkCode = (code) => {
	let reg = /^\d{6}$/

	return reg.test(code)
}

// 密码验证
export const checkPass = (pass) => {
	let reg = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
	return reg.test(pass)
}