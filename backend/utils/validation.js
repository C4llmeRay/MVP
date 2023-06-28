// Utility function to validate email format
exports.isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Utility function to validate password strength
  exports.isValidPassword = (password) => {
    // Add your password validation logic here
  };
  