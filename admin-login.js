const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-button");
const loginMessage = document.getElementById("login-message");

function showMessage(message, type) {
    loginMessage.textContent = message;
    loginMessage.className =
        type === "error" ? "error-message" : "success-message";
}

async function checkExistingSession() {
    const { data, error } =
        await window.supabaseClient.auth.getSession();

    if (error) {
        console.error("Session error:", error.message);
        return;
    }

    if (data.session) {
        window.location.replace("dashboard.html");
    }
}

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document
        .getElementById("email")
        .value
        .trim();

    const password = document
        .getElementById("password")
        .value;

    loginButton.disabled = true;
    loginButton.textContent = "Logging in...";
    showMessage("", "");

    try {
        const { error } =
            await window.supabaseClient.auth.signInWithPassword({
                email,
                password
            });

        if (error) {
            throw error;
        }

        showMessage("Login successful.", "success");

        window.location.replace("dashboard.html");
    } catch (error) {
        console.error(error);
        showMessage(
            error.message || "Unable to log in.",
            "error"
        );
    } finally {
        loginButton.disabled = false;
        loginButton.textContent = "Log in";
    }
});

checkExistingSession();