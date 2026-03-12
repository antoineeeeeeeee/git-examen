const { validateEmail, formatTaskResponse } = require('../utils/helpers');

describe('Fonctions utilitaires', () => {
  
  describe('validateEmail', () => {
    test('valide un email correct', () => {
      expect(validateEmail('test@test.com')).toBe(true);
      expect(validateEmail('admin@test.com')).toBe(true);
    });

    test('rejette un email sans @', () => {
      expect(validateEmail('test.com')).toBe(false);
    });

    test('rejette un email sans point', () => {
      expect(validateEmail('test@test')).toBe(false);
    });

    test('rejette un email vide', () => {
      expect(validateEmail('')).toBe(false);
      expect(validateEmail(null)).toBe(false);
      expect(validateEmail(undefined)).toBe(false);
    });
  });

  describe('formatTaskResponse', () => {
    test('formate une tâche complète', () => {
      const task = {
        id: '123',
        title: 'Test',
        status: 'in_progress',
        priority: 'high'
      };
      
      const result = formatTaskResponse(task);
      expect(result.id).toBe('123');
      expect(result.title).toBe('Test');
      expect(result.status).toBe('in_progress');
      expect(result.priority).toBe('high');
    });

    test('ajoute des valeurs par défaut si manquantes', () => {
      const task = {
        id: '123',
        title: 'Test'
      };
      
      const result = formatTaskResponse(task);
      expect(result.status).toBe('todo');
      expect(result.priority).toBe('medium');
    });

    test('retourne null si pas de tâche', () => {
      expect(formatTaskResponse(null)).toBeNull();
    });
  });
});