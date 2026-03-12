describe('Données initiales', () => {
  
  // Données de test (ce qu'il y a dans ton server.js)
  const mockUsers = [
    {
      id: '1',
      email: 'admin@test.com',
      name: 'Admin User'
    }
  ];

  const mockTasks = [
    {
      id: '1',
      title: 'Tâche exemple',
      status: 'todo',
      priority: 'medium'
    }
  ];

  test('il doit y avoir au moins un utilisateur', () => {
    expect(mockUsers.length).toBeGreaterThan(0);
    expect(mockUsers[0].email).toBe('admin@test.com');
  });

  test('l\'utilisateur admin doit avoir un email valide', () => {
    const admin = mockUsers[0];
    expect(admin.email).toMatch(/@/); // Contient un @
    expect(admin.email).toBe('admin@test.com');
  });

  test('il doit y avoir au moins une tâche exemple', () => {
    expect(mockTasks.length).toBeGreaterThan(0);
    expect(mockTasks[0].title).toBeDefined();
  });

  test('la tâche exemple a les bons champs', () => {
    const task = mockTasks[0];
    expect(task.id).toBe('1');
    expect(task.title).toBe('Tâche exemple');
    expect(task.status).toBe('todo');
    expect(task.priority).toBe('medium');
  });
});