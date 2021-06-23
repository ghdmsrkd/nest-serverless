import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @ApiOperation({
    summary: 'nest serverless 하이!',
    description: '헬로 월드',
  })
  @Get('/api/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
