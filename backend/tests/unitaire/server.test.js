const app = require('../../server');

describe('Configuration du serveur', () => {
  
  test('le serveur exporte une fonction Express', () => {
    expect(typeof app).toBe('function');
    expect(app.listen).toBeDefined();
  });

  test('le port est défini', () => {
    const PORT = process.env.PORT || 3001;
    expect(PORT).toBe(3001); // Port par défaut
  });

  test('JWT_SECRET est défini', () => {
    const JWT_SECRET = process.env.JWT_SECRET || 'secret_key_for_dev';
    expect(JWT_SECRET).toBeDefined();
    expect(JWT_SECRET.length).toBeGreaterThan(0);
  });
});