import { describe, it, expect } from 'vitest';
import config from '../astro-theme-config';

describe('Property 6: Config structural invariants', () => {
  it('should have valid career entries', () => {
    config.about.career.forEach((entry) => {
      expect(entry.period).toBeTruthy();
      expect(typeof entry.period).toBe('string');
      expect(entry.title).toBeTruthy();
      expect(typeof entry.title).toBe('string');
      expect(entry.description).toBeTruthy();
      expect(typeof entry.description).toBe('string');
    });
  });

  it('should have valid skill categories', () => {
    config.skills.forEach((skill) => {
      expect(skill.label).toBeTruthy();
      expect(typeof skill.label).toBe('string');
      expect(skill.names.length).toBeGreaterThan(0);
      skill.names.forEach((name) => {
        expect(name).toBeTruthy();
        expect(typeof name).toBe('string');
      });
    });
  });
});
