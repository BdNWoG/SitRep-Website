import { auth } from "@clerk/nextjs/server";

import prismadb from "./prismadb";

export const userCheck = async () => {
    const { userId } = auth();

    if (!userId) {
        return;
    }

    const user = await prismadb.user.findUnique({
        where: {
            userId: userId,
        }
    });

    if (!user) {
        await prismadb.user.create({
            data: {
                userId: userId,
            }
        });
    }
};