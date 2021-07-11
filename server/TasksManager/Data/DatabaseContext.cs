using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TasksManager.Models;

namespace TasksManager.Data
{
    public class DatabaseContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Mission> Missions { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
          => options.UseSqlite(@"Data Source=" + AppDomain.CurrentDomain.BaseDirectory + "DB.db");

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<User>().HasData(
                new User
                {
                    Id = 1,
                    Name = "user"
                }
            );

            builder.Entity<Mission>().HasData(
                new Mission
                {
                    Id = 1,
                    Title = "task",
                    Due = DateTime.Now,
                    UserId = 1                    
                }
            ); ;
        }
    }
}
