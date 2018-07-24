import { FormsExampleModule } from './forms-example.module';

describe('FormsExampleModule', () => {
  let formsExampleModule: FormsExampleModule;

  beforeEach(() => {
    formsExampleModule = new FormsExampleModule();
  });

  it('should create an instance', () => {
    expect(formsExampleModule).toBeTruthy();
  });
});
