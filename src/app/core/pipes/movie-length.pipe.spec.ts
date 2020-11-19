import { MovieLengthPipe } from './movie-length.pipe';

describe('MovieLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new MovieLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
