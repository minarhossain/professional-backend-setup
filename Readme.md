# user registration steps
1. get user details from frontend from model related
2. validation (if any field is not empty)
3. check if user already exists (username, email)
4. check for images check for avatar
5. upload them cloudinary, avatar check again
6. create user object - create entry in db 
7. remove password and refresh field form response
8. check for user creation
9. return response