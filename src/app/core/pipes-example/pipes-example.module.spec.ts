import { PipesExampleModule } from './pipes-example.module';

describe('PipesExampleModule', () => {
  let pipesExampleModule: PipesExampleModule;

  beforeEach(() => {
    pipesExampleModule = new PipesExampleModule();
  });

  it('should create an instance', () => {
    expect(pipesExampleModule).toBeTruthy();
  });
});
