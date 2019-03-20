import { FirebaseExampleModule } from './firebase-example.module';

describe('FirebaseExampleModule', () => {
  let firebaseExampleModule: FirebaseExampleModule;

  beforeEach(() => {
    firebaseExampleModule = new FirebaseExampleModule();
  });

  it('should create an instance', () => {
    expect(firebaseExampleModule).toBeTruthy();
  });
});
