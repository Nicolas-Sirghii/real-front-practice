 async function getUsers() {
  try {
    const response = await fetch("https://python-mysql-api.onrender.com");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getUsers();
