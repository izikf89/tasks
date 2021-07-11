using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TasksManager.Data;
using TasksManager.Models;

namespace TasksManager.Services
{
    public class MissionService
    {
        private static readonly DatabaseContext _context;

        static MissionService()
        {
            _context = new DatabaseContext();
        }

        public async static Task<List<Mission>> GetByUser(int userId)
        {
            return await _context.Missions.AsQueryable().Where(m => m.UserId == userId).ToListAsync();
        }

    }
}
