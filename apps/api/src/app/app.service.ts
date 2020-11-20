import { Injectable } from '@nestjs/common';
import { PrismaClient, Post } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AppService {
  getPosts(): Promise<Post[]> {
    return prisma.post.findMany();
  }
}
