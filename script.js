function generateToken() {
    // Define the characters that can be used in the token
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let token = '';
  
    // Generate a random token of length 32
    for (let i = 0; i < 32; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return token;
  }
  