import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  home(): string {
    return `Welcome to my Movie API`;
  }
}
