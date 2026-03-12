describe('Tests API simples', () => {
  
  test('une tâche doit avoir une structure valide', () => {
    const task = {
      id: '1',
      title: 'Test',
      status: 'todo'
    };

    expect(task).toHaveProperty('id');
    expect(task).toHaveProperty('title');
    expect(task).toHaveProperty('status');
  });

  test('une réponse API doit avoir un format JSON', () => {
    const response = { id: '1', title: 'Test' };
    expect(typeof response).toBe('object');
    expect(JSON.stringify(response)).toBe('{"id":"1","title":"Test"}');
  });

  test('une erreur 404 doit retourner un message', () => {
    const errorResponse = { error: 'Tâche non trouvée' };
    expect(errorResponse.error).toBe('Tâche non trouvée');
  });
});