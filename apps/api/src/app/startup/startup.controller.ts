import { Controller, Get } from '@nestjs/common';
import { StartupService } from './startup.service';


@Controller('startup')
export class StartupController {
    constructor(private readonly startupService: StartupService) {}

    @Get('')
    getStartup() {
      return this.startupService.getStartup();
    }
}
