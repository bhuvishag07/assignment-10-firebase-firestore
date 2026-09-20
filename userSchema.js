function validateUser(data) {

    if (!data.name) {
        return 'Name is required';
    }

    if (!data.email) {
        return 'Email is required';
    }

    if (!data.email.includes('@')) {
        return 'Valid email is required';
    }

    if (!data.age) {
        return 'Age is required';
    }

    if (data.age < 16 || data.age > 100) {
        return 'Age must be between 16 and 100';
    }

    if (!data.course) {
        return 'Course is required';
    }

    return null;
}

module.exports = validateUser;