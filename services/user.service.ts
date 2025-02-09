export const getUser(userId: string) = async () => {
    const response = await prisma.user.findUnique({
        
    })
    });

export createUser = async (username, email, passworkd) => {
    const response = await prisma.user.create({
        data: user,
    });
    return response;
};
