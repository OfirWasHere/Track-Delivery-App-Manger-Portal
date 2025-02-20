async function saveUserDetails() {
    const response = await fetch("http://localhost:4000/api/all-users")
    const json = await response.json();
    console.log(json);
}

export default saveUserDetails