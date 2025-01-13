async function saveUserDetails() {
    const getUsers = await fetch("http://localhost:4000/api/all-users")
    console.log(getUsers);
    
}

export default saveUserDetails