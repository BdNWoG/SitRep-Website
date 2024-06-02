import { auth } from "@clerk/nextjs/server";

import prismadb from "./prismadb";

export const userCheck = async () => {
    const { userId } = auth();

    if (!userId) {
        return;
    }

    const user = await prismadb.User.findUnique({
        where: {
            userId: userId,
        }
    });

    if (!user) {
        await prismadb.User.create({
            data: {
                userId: userId,
            }
        });
    }
};