import { MovieLengthPipe } from './movie-length.pipe';

describe('MovieLengthPipe', () => {
  const pipe = new MovieLengthPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "2h2m" to "2 hours, 2 minutes"', () => {
    expect(pipe.transform('2h2m')).toBe('2 hours, 2 minutes');
  });
});
