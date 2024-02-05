import { Controller, Get } from "@nestjs/common";


@Controller()
export class AppController {

  @Get("/hello")
  getRootRoute(): string{
    return "Hello World";
  }

}