import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure
} from "~/server/api/trpc";

export const todoRouter = createTRPCRouter({
  todos: protectedProcedure
    //.input(z.object({ title: z.string().min(3) }))
    .query(({ ctx }) => {
        return ctx.db.todo.findMany({
            where: {
                userId: ctx.session.user.id,
            },
            orderBy: {createdAt: "desc"},
        });
    }),
});

createTodo: protectedProcedure
    .input(z.object({ title: z.string().min(3) }))
    .mutation(async ({ ctx, input }) => {
        return ctx.db.todo.create({
            data: {
                title: input.title,
                userId: ctx.session.user.id,
            },
        });
    }),
});
