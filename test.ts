import { createUser, addSpecialty, getProjects, createProject } from "./services/user_service";


async function test() {
    try {
        console.log(createProject("test", "t", "duration", "user123", []));
        console.log(getProjects);
        const result = await addSpecialty(["AI", "ML"], "user123");
        console.log("Specialties added successfully:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}

test();
