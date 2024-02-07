import { Controller, Get } from "@nestjs/common";


@Controller('/app')
export class AppController {

  @Get()
  getRootRoute(): string{
    return "Hello World";
  }

  @Get('')
  getByeThere(): string{
    return 'bye there';
  }

}