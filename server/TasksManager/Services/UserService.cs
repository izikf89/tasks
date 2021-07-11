using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TasksManager.Data;
using TasksManager.Models;

namespace TasksManager.Services
{
    public class UserService
    {
        private static readonly DatabaseContext _context;

        static UserService()
        {
            _context = new DatabaseContext();
        }

        public async static Task<User> Get(int id)
        {
            return await _context.Users.FindAsync(id);
        }

    }
}
