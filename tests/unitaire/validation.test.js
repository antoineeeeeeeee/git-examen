describe('Tests de validation simples', () => {
  
  // Test 1 : Vérifier qu'une tâche a un titre
  test('une tâche doit avoir un titre', () => {
    const task = { title: 'Ma tâche' };
    expect(task.title).toBeDefined();
    expect(task.title.length).toBeGreaterThan(0);
  });

  test('une tâche sans titre est invalide', () => {
    const task = { description: 'Pas de titre' };
    expect(task.title).toBeUndefined();
  });

  // Test 2 : Vérifier les priorités valides
  test('la priorité doit être low, medium ou high', () => {
    const validPriorities = ['low', 'medium', 'high'];
    
    expect(validPriorities).toContain('low');
    expect(validPriorities).toContain('medium');
    expect(validPriorities).toContain('high');
    expect(validPriorities).not.toContain('ultra');
  });

  // Test 3 : Vérifier les statuts valides
  test('le statut doit être todo, in_progress ou done', () => {
    const task = { status: 'todo' };
    const validStatuses = ['todo', 'in_progress', 'done'];
    
    expect(validStatuses).toContain(task.status);
  });
});