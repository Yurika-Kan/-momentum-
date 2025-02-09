import { PrismaClient } from "@/node_modules/.prisma/client/index"
const prisma = new PrismaClient()

export const getUser = async (userId: string) => {
    const response = await prisma.user.findUnique({
        where: {
            username: userId,
        }
    })
    return response
};

export const createUser = async (username: string, password: string, mentor: boolean,
    contact_info: string, link: string) => {
    const response = await prisma.user.create({
        data: {
            username: username,
            password: password,
            mentor_mode: mentor,
            contact_info: contact_info,
            link: link
        }
    });
    return response;
};

export const getRequests = async(username: string) => {
    const response = await prisma.proposal.findMany({
        where: {
            createdById: username,

        },
        select: {
            requests: {
                select: {
                    user_id: true
                }
            },
        },
    })
    return response
}

export const createProject = async(title: string, description: string, duration: string, user: string, 
    tags: string[]) => {
    const response = await prisma.proposal.create({
        data: {
            title: title,
            description: description,
            duration: duration,
            createdById: user,
        },
    })

    for (var tag in tags) {
        await prisma.tagsOnPost.create({
            data: {
                prop_id: response.id,
                tag: tag
            }
        })
    }

    return response
}

export const getMentors = async() => {
    const response = await prisma.user.findMany({
        where: {
            mentor_mode: true
        }
    })
    return response
}

export const getProject = async(project_id: number) => {
    const response = await prisma.proposal.findUnique({
        where: {
            id: project_id
        }
    })
    return response
}
