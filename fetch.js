async function getPost() {
    try {
        const response = await fetch("https://api.github.com/users/sourya07singh");
        const data = await response.json();
        console.log("Post:", data);
    } catch (err) {
        console.error("Error:", err);
    }
}

getPost();
