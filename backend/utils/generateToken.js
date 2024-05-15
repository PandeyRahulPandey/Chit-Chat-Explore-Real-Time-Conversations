import jwt from "jsonwebtoken";   // jsonwebtoken is a package.
// 1. JWT stands for JSON Web Token. 
// 2. It's a compact, URL-safe means of representing claims to be transferred between two parties. 
// 3. These claims are typically used for authentication and information exchange in web development.
// 4. JWTs are stateless, meaning the server doesn't need to keep track of sessions or store tokens on the server side.
// 5. JWT's commonly used for:-
    //a. Authentication
    //b. Authorization
    //c. Session Management
    //d. Information Exchange

const generateTokenAndSetCookie = (userId, res) => {
	// jwt.sign is a method to create token.
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "15d",   // token expires in 15 days.
	});

	res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days,24 hours, 60 min, 60 sec,1000 millisec.
		httpOnly: true, // prevent XSS attacks or cross-site scripting attacks
		sameSite: "strict", // CSRF attacks cross-site request forgery attacks
		secure: process.env.NODE_ENV!== "development",
	});
};

export default generateTokenAndSetCookie;
