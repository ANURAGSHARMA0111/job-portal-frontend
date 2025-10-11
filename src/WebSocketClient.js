const socket = new WebSocket("ws://localhost:5000/ws");  // Change port if needed

socket.onopen = () => {
    console.log("✅ WebSocket connected successfully!");
};

socket.onmessage = (event) => {
    console.log("📩 Message from server: ", event.data);
};

socket.onerror = (error) => {
    console.error("❌ WebSocket error: ", error);
};

socket.onclose = () => {
    console.warn("⚠️ WebSocket connection closed.");
};

export default socket;
