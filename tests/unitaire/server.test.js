const app = require('../../backend/server');

describe('Configuration du serveur', () => {
  
  test('le serveur exporte une fonction Express', () => {
    expect(typeof app).toBe('function');
    expect(app.listen).toBeDefined();
  });

  test('le port est défini', () => {
    const PORT = process.env.PORT || 3001;
    expect(PORT).toBeDefined();
  });
});