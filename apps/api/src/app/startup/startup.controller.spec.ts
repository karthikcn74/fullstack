import { Test, TestingModule } from '@nestjs/testing';
import { StartupController } from './startup.controller';

describe('Startup Controller', () => {
  let controller: StartupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StartupController],
    }).compile();

    controller = module.get<StartupController>(StartupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
