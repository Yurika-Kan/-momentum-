import { createUser, addSpecialty } from "./services/user_service";


async function test() {
    try {
        await createUser("user123", "password", false, "123", "google.com");
        const result = await addSpecialty(["AI", "ML"], "user123");
        console.log("Specialties added successfully:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}

test();
