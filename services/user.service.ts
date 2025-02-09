import { PrismaClient } from "@/node_modules/.prisma/client/index"
import { userAgentFromString } from "@/node_modules/next/server"
const prisma = new PrismaClient()

export const getUser(userId: string) = async () => {
    const response = await prisma.user.findUnique({
        
    })
    });

export const createUser = async (username: string, password: string) => {
    const response = await prisma.user.create({
        data: {
            username: username,
            password: password,
            mentor: false
        }
    });
    return response;
};

export const getRequests = async(username: string) => {
    const response = await prisma.proposal.findMany({
        where: {
            createdById: username,
            requests: {
                
            }
        }
    })

}

export const getProject = async(project_id: number) => {
    const response = await prisma.proposal.findUnique({
        where: {
            id: project_id
        }
    })
    return response

}