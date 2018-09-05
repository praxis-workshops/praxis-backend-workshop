import { Test, TestingModule } from '@nestjs/testing';
import { HealthStatusController } from './health-status.controller';

describe('HealthStatus Controller', () => {
  let module: TestingModule;
  let controller: HealthStatusController;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [HealthStatusController],
    }).compile();

    controller = module.get<HealthStatusController>(HealthStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should response with a good status', () => {
    const response = controller.healthStatus();
    expect(response).toEqual({
      message: "I'm ok",
    });
  })
});
