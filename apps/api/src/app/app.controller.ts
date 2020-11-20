import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Post } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPosts(): Promise<Post[]> {
    return this.appService.getPosts();
  }
}
